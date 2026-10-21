import type { CSSProperties } from "react";
import { css } from "@emotion/css";

const breakpointWidths = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } as const;
type Breakpoint = keyof typeof breakpointWidths;

export type BoxSx = {
    [Property in keyof CSSProperties]?: CSSProperties[Property] | Partial<Record<Breakpoint, CSSProperties[Property]>>;
};

const unitlessProperties = new Set([
    "aspectRatio", "flex", "flexGrow", "flexShrink", "fontWeight", "lineHeight",
    "opacity", "order", "zIndex",
]);

function propertyNameToCss(propertyName: string) {
    return propertyName.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function declaration(propertyName: string, value: string | number) {
    const unit = typeof value === "number" && value !== 0 && !unitlessProperties.has(propertyName)
        ? "px"
        : "";
    return `${propertyNameToCss(propertyName)}: ${value}${unit};`;
}

export function createSxClass(sx?: BoxSx) {
    const baseDeclarations: string[] = [];
    const responsiveDeclarations = new Map<Breakpoint, string[]>();

    for (const [propertyName, value] of Object.entries(sx ?? {})) {
        if (value && typeof value === "object") {
            for (const [breakpoint, responsiveValue] of Object.entries(value)) {
                if (breakpoint in breakpointWidths && (typeof responsiveValue === "string" || typeof responsiveValue === "number")) {
                    const rules = responsiveDeclarations.get(breakpoint as Breakpoint) ?? [];
                    rules.push(declaration(propertyName, responsiveValue));
                    responsiveDeclarations.set(breakpoint as Breakpoint, rules);
                }
            }
        } else if (typeof value === "string" || typeof value === "number") {
            baseDeclarations.push(declaration(propertyName, value));
        }
    }

    const responsiveCss = [...responsiveDeclarations.entries()]
        .sort(([first], [second]) => breakpointWidths[first] - breakpointWidths[second])
        .map(([breakpoint, declarations]) => breakpoint === "xs"
            ? declarations.join("\n")
            : `@media (min-width: ${breakpointWidths[breakpoint]}px) { ${declarations.join("\n")} }`)
        .join("\n");

    return baseDeclarations.length || responsiveCss
        ? css(`${baseDeclarations.join("\n")}\n${responsiveCss}`)
        : "";
}
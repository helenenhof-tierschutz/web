import { createElement, type ComponentPropsWithoutRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { css } from "@emotion/css";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

type GridProps<T extends ElementType> = {
    as?: T;
    container?: boolean;
    size?: ResponsiveValue<number>;
    spacing?: ResponsiveValue<number>;
    columns?: number;
    alignItems?: CSSProperties["alignItems"];
    className?: string;
    children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children" | "size">;

const breakpointWidths: Record<Breakpoint, number> = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
};

function getResponsiveRules<T>(
    value: ResponsiveValue<T> | undefined,
    declaration: (value: T) => string,
) {
    if (value === undefined) return "";

    if (typeof value !== "object") return declaration(value);

    const values = value as Partial<Record<Breakpoint, T>>;
    return (Object.entries(values) as [Breakpoint, T][])
        .sort((first, second) => breakpointWidths[first[0]] - breakpointWidths[second[0]])
        .map(([breakpoint, entry]) => {
            const rule = declaration(entry);
            return breakpoint === "xs"
                ? rule
                : `@media (min-width: ${breakpointWidths[breakpoint]}px) { ${rule} }`;
        })
        .join("\n");
}

export default function Grid<T extends ElementType = "div">({
    as,
    container = false,
    size,
    spacing = 0,
    columns = 12,
    alignItems,
    className,
    children,
    ...props
}: GridProps<T>) {
    const containerClass = container
        ? css`
            display: grid;
            grid-template-columns: repeat(${columns}, minmax(0, 1fr));
            ${getResponsiveRules(spacing, (value) => `gap: calc(var(--grid-spacing-unit) * ${value});`)}
            ${alignItems ? `align-items: ${alignItems};` : ""}
        `
        : "";
    const itemClass = size === undefined
        ? ""
        : css`${getResponsiveRules(size, (value) => `grid-column: span ${value};` )}`;

    return createElement(
        as ?? "div",
        {
            ...props,
            className: [containerClass, itemClass, className].filter(Boolean).join(" "),
        },
        children,
    );
}
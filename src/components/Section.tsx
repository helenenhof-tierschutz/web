import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { css } from "@emotion/css";

type SectionSurface = "none" | "soft" | "medium" | "strong";
type SectionWidth = "content" | "narrow" | "full";
type SectionSpacing = "default" | "compact" | "intro" | "reading" | "none";
type SectionElement = "section" | "article";

type SectionProps = Omit<ComponentPropsWithoutRef<"section">, "children" | "className"> & {
    as?: SectionElement;
    surface?: SectionSurface;
    width?: SectionWidth;
    spacing?: SectionSpacing;
    textAlign?: "left" | "center" | "right";
    className?: string;
    contentClassName?: string;
    children?: ReactNode;
};

const surfaceClasses: Record<SectionSurface, string> = {
    none: css`background: var(--surface-none);`,
    soft: css`background: var(--surface-soft);`,
    medium: css`background: var(--surface-medium);`,
    strong: css`background: var(--surface-strong); color: var(--color-on-main);`,
};

const widthClasses: Record<SectionWidth, string> = {
    content: css`
        width: min(var(--container-width), calc(100% - 2 * var(--page-gutter)));
        margin-inline: auto;
    `,
    narrow: css`
        width: min(var(--container-width-narrow), calc(100% - 2 * var(--page-gutter)));
        margin-inline: auto;
    `,
    full: css`width: 100%;`,
};

const spacingClasses: Record<SectionSpacing, string> = {
    default: css`padding-block: var(--section-space);`,
    compact: css`padding-block: var(--section-space-compact);`,
    intro: css`padding-block: var(--section-space-intro);`,
    reading: css`
        padding-block: var(--section-space-reading-start) var(--section-space-reading-end);
        @media (max-width: 760px) {
            padding-block: var(--section-space-reading-start-mobile) var(--section-space-reading-end-mobile);
        }
    `,
    none: css`padding-block: 0;`,
};

const readingContentClass = css`
    h2 { margin: 36px 0 12px; }
    h2:first-child { margin-top: 0; }
    p, address, li { color: var(--color-text-light); font-size: 0.96rem; line-height: 1.85; }
    address { font-style: normal; }
    ul { padding-left: 1.25rem; }
    a { color: var(--color-main); text-decoration: underline; text-underline-offset: 3px; }
    a:hover { color: var(--color-accent); }
`;

export default function Section({
    as = "section",
    surface = "soft",
    width = "content",
    spacing = "default",
    textAlign,
    className,
    contentClassName,
    children,
    ...props
}: SectionProps) {
    const Component = as;
    const sectionClass = css`
        ${surfaceClasses[surface]}
        ${spacingClasses[spacing]}
        ${textAlign ? `text-align: ${textAlign};` : ""}
    `;

    return (
        <Component className={[sectionClass, className].filter(Boolean).join(" ")} {...props}>
            <div className={[
                widthClasses[width],
                spacing === "reading" && readingContentClass,
                contentClassName,
            ].filter(Boolean).join(" ")}>
                {children}
            </div>
        </Component>
    );
}
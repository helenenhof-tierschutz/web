import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { css } from "@emotion/css";

const styles = {
    root: css`
        margin-top: 0;
        em {
            color: var(--color-accent);
            font-style: italic;
        }
    `,
    heading: css`
        font-family: var(--font-serif);
        font-weight: 500;
    `,
    h1: css`
        font-size: 2rem;
        line-height: 1.15;
        @media (max-width: 760px) { font-size: 1.75rem; }
    `,
    h2: css`
        font-size: 1.5rem;
        line-height: 1.25;
        @media (max-width: 760px) { font-size: 1.375rem; }
    `,
    displayH1: css`
        font-size: 4rem;
        line-height: 1.1;
        @media (max-width: 760px) { font-size: 2.75rem; }
    `,
    displayH2: css`
        font-size: 3rem;
        line-height: 1.12;
        @media (max-width: 760px) { font-size: 2.25rem; }
    `,
    displayH3: css`font-size: 2rem; line-height: 1.2;`,
    h3: css`font-size: 1.25rem; line-height: 1.3;`,
    h4: css`font-size: 1.125rem; line-height: 1.35;`,
    h5: css`font-size: 1rem; line-height: 1.4;`,
    h6: css`font-size: 0.875rem; line-height: 1.45;`,
    displayHeading: css`letter-spacing: -0.04em;`,
    body1: css`
        font-size: 1rem;
        line-height: 1.5;
    `,
    body2: css`
        font-size: 0.875rem;
        line-height: 1.43;
    `,
    subtitle2: css`
        font-family: var(--font-serif);
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.6;
    `,
    inherit: css`font: inherit;`,
    button: css`
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.028em;
        text-transform: uppercase;
    `,
    caption: css`
        font-size: 0.75rem;
        line-height: 1.66;
    `,
    overline: css`
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        line-height: 2.66;
        text-transform: uppercase;
    `,
    alignLeft: css`text-align: left;`,
    alignRight: css`text-align: right;`,
    alignCenter: css`text-align: center;`,
    alignJustify: css`text-align: justify;`,
    noWrap: css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,
    gutterBottom: css`margin-bottom: 0.35em;`,
    eyebrow: css`
        display: inline-block;
        margin-bottom: 14px;
        color: var(--color-accent);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        line-height: 1.6;
        text-transform: uppercase;
    `,
    subtitle1: css`
        font-family: var(--font-serif);
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.6;
    `,
    colorMain: css`color: var(--color-main);`,
    colorMuted: css`color: var(--color-text-light);`,
    colorAccent: css`color: var(--color-accent);`,
    colorOnMain: css`color: var(--color-on-main);`,
};

type TypographyVariant =
    | "root"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "inherit"
    | "button"
    | "caption"
    | "overline"
    | "alignLeft"
    | "alignRight"
    | "alignCenter"
    | "alignJustify"
    | "noWrap"
    | "gutterBottom"
    | "eyebrow";

type TypographyProps<T extends ElementType> = {
    component?: T;
    variant?: TypographyVariant;
    size?: "default" | "display";
    align?: "left" | "right" | "center" | "justify";
    color?: "main" | "muted" | "accent" | "onMain" | "inherit";
    noWrap?: boolean;
    gutterBottom?: boolean;
    children?: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "component" | "className" | "children" | "align" | "color" | "size">;

const variantComponents: Record<TypographyVariant, ElementType> = {
    root: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
    button: "span",
    caption: "span",
    overline: "span",
    alignLeft: "p",
    alignRight: "p",
    alignCenter: "p",
    alignJustify: "p",
    noWrap: "p",
    gutterBottom: "p",
    eyebrow: "span",
};

export default function Typography<T extends ElementType = "p">({
    component,
    variant,
    size = "default",
    children,
    className,
    align,
    color,
    noWrap,
    gutterBottom,
    ...props
}: TypographyProps<T>) {
    const resolvedVariant = variant ?? "body1";
    const Component = component ?? variantComponents[resolvedVariant];
    const variantClasses: Record<TypographyVariant, string> = {
        root: styles.root,
        h1: `${styles.heading} ${styles.h1}`,
        h2: `${styles.heading} ${styles.h2}`,
        h3: `${styles.heading} ${styles.h3}`,
        h4: `${styles.heading} ${styles.h4}`,
        h5: `${styles.heading} ${styles.h5}`,
        h6: `${styles.heading} ${styles.h6}`,
        subtitle1: styles.subtitle1,
        subtitle2: styles.subtitle2,
        body1: styles.body1,
        body2: styles.body2,
        inherit: styles.inherit,
        button: styles.button,
        caption: styles.caption,
        overline: styles.overline,
        alignLeft: styles.alignLeft,
        alignRight: styles.alignRight,
        alignCenter: styles.alignCenter,
        alignJustify: styles.alignJustify,
        noWrap: styles.noWrap,
        gutterBottom: styles.gutterBottom,
        eyebrow: styles.eyebrow,
    };
    const tagClasses = Component === "h1" || Component === "h2" ? styles.displayHeading : "";
    const sizeClass = size === "display"
        ? resolvedVariant === "h1"
            ? styles.displayH1
            : resolvedVariant === "h2"
                ? styles.displayH2
                : resolvedVariant === "h3"
                    ? styles.displayH3
                    : ""
        : "";
    const alignmentClasses = align ? styles[`align${align[0].toUpperCase()}${align.slice(1)}` as "alignLeft" | "alignRight" | "alignCenter" | "alignJustify"] : "";
    const colorClass = color === "main"
        ? styles.colorMain
        : color === "muted"
            ? styles.colorMuted
            : color === "accent"
                ? styles.colorAccent
                : color === "onMain"
                    ? styles.colorOnMain
                    : "";
    const utilityClasses = [noWrap && styles.noWrap, gutterBottom && styles.gutterBottom];

    return (
        <Component
            className={[styles.root, tagClasses, variantClasses[resolvedVariant], sizeClass, alignmentClasses, colorClass, ...utilityClasses, className].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </Component>
    );
}
import { createElement, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { css } from "@emotion/css";
import { createSxClass, type BoxSx } from "./styleSystem";

type CardVariant = "outlined" | "plain";
type CardSurface = "paper" | "soft" | "transparent";

type CardProps<T extends ElementType> = {
    as?: T;
    variant?: CardVariant;
    surface?: CardSurface;
    hoverable?: boolean;
    sx?: BoxSx;
    className?: string;
    children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "variant" | "surface" | "className" | "children" | "sx">;

export default function Card<T extends ElementType = "article">({
    as,
    variant = "outlined",
    surface = "paper",
    hoverable = false,
    className,
    sx,
    children,
    ...props
}: CardProps<T>) {
    const cardClass = css`
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
        ${variant === "outlined" ? `border: 1px solid var(--color-border);` : ""}
        ${surface === "paper" ? `background: var(--color-bg-light);` : ""}
        ${surface === "soft" ? `background: var(--color-cream);` : ""}
        ${hoverable ? `transition: transform var(--transition-fast), box-shadow var(--transition-fast);
            &:hover { transform: translateY(-5px); box-shadow: 0 15px 30px color-mix(in srgb, var(--color-main) 7%, transparent); }
            @media (prefers-reduced-motion: reduce) { transition-duration: 0.01ms; }` : ""}
    `;

    return createElement(
        as ?? "article",
        {
            ...props,
            className: [cardClass, createSxClass(sx), className].filter(Boolean).join(" "),
        },
        children,
    );
}
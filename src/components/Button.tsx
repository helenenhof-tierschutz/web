import type { AnchorHTMLAttributes, ReactNode } from "react";
import { css } from "@emotion/css";

const styles = {
    button: css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        min-height: 52px;
        padding: 15px 23px;
        border: 1px solid var(--color-accent);
        border-radius: var(--border-radius);
        background: var(--color-accent);
        color: var(--color-on-accent);
        font-size: 0.88rem;
        font-weight: 600;
        cursor: pointer;
        transition: background var(--transition-fast), transform var(--transition-fast);

        &:hover {
            background: var(--color-accent-hover);
            transform: translateY(-2px);
        }
    `,
    light: css`
        border-color: color-mix(in srgb, var(--color-white) 55%, transparent);
        background: transparent;
        color: var(--color-white);

        &:hover {
            background: color-mix(in srgb, var(--color-white) 12%, transparent);
        }
    `,
    small: css`
        min-height: 43px;
        padding: 11px 17px;
        font-size: 0.8rem;
    `,
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "light";
    size?: "default" | "small";
    children: ReactNode;
};

export default function Button({
    variant = "primary",
    size = "default",
    className,
    children,
    ...props
}: Props) {
    const classes = [
        styles.button,
        variant === "light" ? styles.light : "",
        size === "small" ? styles.small : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a className={classes} {...props}>
            {children}
        </a>
    );
}

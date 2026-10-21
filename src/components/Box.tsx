import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { css } from "@emotion/css";
import { createSxClass, type BoxSx } from "./styleSystem";

const baseClass = css`min-width: 0;`;

type BoxProps<T extends ElementType> = {
    as?: T;
    className?: string;
    sx?: BoxSx;
    children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children" | "sx">;

export default function Box<T extends ElementType = "div">({
    as,
    className,
    sx,
    children,
    ...props
}: BoxProps<T>) {
    const Component = as ?? "div";
    const sxClass = createSxClass(sx);

    return (
        <Component className={[baseClass, sxClass, className].filter(Boolean).join(" ")} {...props}>
            {children}
        </Component>
    );
}
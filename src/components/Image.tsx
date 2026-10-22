import type { CSSProperties, ImgHTMLAttributes } from "react";
import { css } from "@emotion/css";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "className" | "height"> & {
    fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    aspectRatio?: string;
    objectPosition?: string;
    displayHeight?: CSSProperties["height"];
    mobileHeight?: CSSProperties["height"];
    mobileMaxWidth?: CSSProperties["maxWidth"];
    className?: string;
    imageClassName?: string;
};

export default function Image({
    fit = "cover",
    aspectRatio,
    objectPosition,
    className,
    imageClassName,
    displayHeight = "490px",
    mobileHeight = "clamp(300px, 95vw, 460px)",
    mobileMaxWidth = "560px",
    ...props
}: ImageProps) {
    const frameClass = css`
        position: relative;
        padding: 0 35px 35px 0;
        &::before {
            position: absolute;
            z-index: 0;
            right: 0;
            bottom: 0;
            width: 78%;
            height: 70%;
            background: var(--color-border-muted);
            content: "";
        }
        & > img {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            max-width: 100%;
            height: ${displayHeight};
            background: var(--color-cream);
            object-fit: ${fit};
            ${aspectRatio ? `aspect-ratio: ${aspectRatio};` : ""}
            ${objectPosition ? `object-position: ${objectPosition};` : ""}
        }
        @media (max-width: 760px) {
            max-width: ${mobileMaxWidth};
            & > img { height: ${mobileHeight}; }
        }
    `;

    return (
        <div className={[frameClass, className].filter(Boolean).join(" ")}>
            <img className={imageClassName} {...props} />
        </div>
    );
}

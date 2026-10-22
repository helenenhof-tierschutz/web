import type { ReactNode } from "react";
import { css } from "@emotion/css";
import Button from "./Button";
import Typography from "./Typography";

const styles = {
    banner: css`
        position: relative;
        display: flex;
        align-items: center;
        min-height: clamp(330px, 32vw, 470px);
        overflow: hidden;
        isolation: isolate;

        img {
            position: absolute;
            z-index: -2;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &::after {
            position: absolute;
            z-index: -1;
            inset: 0;
            content: "";
            background: linear-gradient(90deg,
                color-mix(in srgb, var(--palette-forest-deep) 91%, transparent) 0%,
                color-mix(in srgb, var(--palette-forest-deep) 76%, transparent) 46%,
                color-mix(in srgb, var(--palette-forest-deep) 18%, transparent) 100%);
        }

        @media (max-width: 760px) {
            min-height: 360px;
            &::after {
                background: linear-gradient(90deg,
                    color-mix(in srgb, var(--palette-forest-deep) 88%, transparent),
                    color-mix(in srgb, var(--palette-forest-deep) 58%, transparent));
            }
        }
    `,
    content: css`
        padding-block: 74px;
        h1 { max-width: 760px; margin-bottom: 20px; color: var(--color-white); }
        p { max-width: 640px; margin-bottom: 22px; color: var(--color-cream-dark); font-family: var(--font-serif); font-size: clamp(1.18rem, 2vw, 1.45rem); line-height: 1.55; }
        @media (max-width: 760px) { padding-block: 58px; }
    `,
};

type Props = {
    src: string;
    alt: string;
    eyebrow: string;
    title: ReactNode;
    lead?: ReactNode;
    action?: { href: string; label: string };
    objectPosition?: string;
};

export default function PageBanner({ src, alt, eyebrow, title, lead, action, objectPosition = "center" }: Props) {
    return (
        <section className={styles.banner}>
            <img src={src} alt={alt} loading="eager" fetchPriority="high" style={{ objectPosition }} />
            <div className={`container ${styles.content}`}>
                <Typography variant="eyebrow">{eyebrow}</Typography>
                <Typography variant="h1" size="display">{title}</Typography>
                {lead && <Typography variant="body1">{lead}</Typography>}
                {action && <Button href={action.href}>{action.label}</Button>}
            </div>
        </section>
    );
}

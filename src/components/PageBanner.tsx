import { css } from "@emotion/css";

const styles = {
    banner: css`
        height: clamp(190px, 20vw, 300px);
        overflow: hidden;
        background: var(--color-cream-dark);

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 760px) {
            height: 180px;
        }
    `,
};

type Props = {
    src: string;
    alt: string;
    objectPosition?: string;
};

export default function PageBanner({ src, alt, objectPosition = "center" }: Props) {
    return (
        <div className={styles.banner}>
            <img src={src} alt={alt} loading="eager" fetchPriority="high" style={{ objectPosition }} />
        </div>
    );
}

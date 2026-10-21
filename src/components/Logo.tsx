import { css } from "@emotion/css";

const styles = {
    logoImage: css`
        display: block;
        width: 80px; /* adjust to the size you want */
        height: auto;
        flex-shrink: 0;
    `,
    brand: css`
        display: inline-flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        color: var(--color-main);
        text-decoration: none;

        @media (max-width: 400px) {
            gap: 8px;
        }
    `,
    copy: css`
        display: flex;
        flex-direction: column;
        gap: 4px;

        strong {
            font-family: var(--font-serif);
            font-size: 1.45rem;
            font-weight: 600;
            line-height: 1;
        }

        small {
            font-size: 0.53rem;
            font-weight: 700;
            letter-spacing: 0.095em;
        }

        @media (max-width: 760px) {
            strong {
                font-size: 1.25rem;
            }

            small {
                font-size: 0.45rem;
            }
        }

        @media (max-width: 400px) {
            small {
                letter-spacing: 0.04em;
            }
        }
    `,
    footer: css`color: var(--color-main);`,
};

type Props = {
    variant?: "header" | "footer";
};

export default function Logo({ variant = "header" }: Props) {
    return (
        <span
            className={`${styles.brand} ${variant === "footer" ? styles.footer : ""
                }`}
        >
            <img className={styles.logoImage} src="/images/0DA12AFB-D4DF-4CC1-8E56-7A5362EC0445.png" alt="Helenenhof logo" />
            <span className={styles.copy}>
                <strong>Helenenhof</strong>
                <small>TIERSCHUTZVEREIN NORDEIFEL E.V.</small>
            </span>
        </span >
    );
}

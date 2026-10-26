import Button from "./Button";
import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    layout: css`
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(190px, 0.62fr) minmax(0, 0.8fr);
        gap: clamp(28px, 4vw, 64px);
        align-items: stretch;
        @media (max-width: 900px) {
            grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
            .support-image { grid-row: 2; }
            .support-actions { grid-row: 2; }
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
            .support-image, .support-actions { grid-row: auto; }
        }
    `,
    copy: css`
        h2 { margin-bottom: 28px; }
        p { max-width: 600px; color: var(--color-cream-dark); line-height: 1.8; }
    `,
    lead: css`
        color: var(--color-white) !important;
        font-family: var(--font-serif);
        font-size: 1.35rem;
    `,
    actions: css`
        display: grid;
        align-content: center;
        gap: 14px;
        a { width: 100%; justify-content: space-between; }
    `,
    actionsHeading: css`
        margin: 0 0 3px;
        color: var(--color-accent);
    `,
    image: css`
        display: block;
        width: 100%;
        height: 100%;
        min-height: 250px;
        max-height: 355px;
        object-fit: cover;
        object-position: 57% center;
        @media (max-width: 900px) { min-height: 280px; }
        @media (max-width: 640px) {
            height: auto;
            min-height: 0;
            max-height: none;
            aspect-ratio: 4 / 3;
        }
    `,
};

export default function SupportSection() {
    return (
        <Section surface="strong" id="unterstuetzen" contentClassName={styles.layout}>
            <div className={styles.copy}>
                <Typography variant="eyebrow">Helfen Sie mit</Typography>
                <Typography variant="h2" size="display">
                    Kleine Beiträge.{" "}<br /><em>Große Hilfe.</em>
                </Typography>
                <Typography variant="body1" className={styles.lead}>
                    Über Unterstützung für die Tiere freuen wir uns.
                </Typography>
                <Typography variant="body1">
                    Tierpatenschaften und andere finanzielle Fördermöglichkeiten machen die Versorgung planbar und dauerhaft möglich.
                </Typography>
                <Typography variant="body1">
                    Jeder Euro hilft. Etwas Sinnvolles zu tun, kann so einfach sein…
                </Typography>
            </div>
            <img
                className={[styles.image, "support-image"].join(" ")}
                src="/images/home/tierpatenschaft-kaninchen.png"
                alt="Eine Person füttert ein braunes Schlappohrkaninchen mit Löwenzahn"
                loading="lazy"
            />
            <div className={[styles.actions, "support-actions"].join(" ")} aria-label="Möglichkeiten zu helfen">
                <Typography component="p" variant="eyebrow" className={styles.actionsHeading}>
                    So können Sie helfen
                </Typography>
                <Button href="/unterstuetzen#spenden">Jetzt spenden <span aria-hidden="true">→</span></Button>
                <Button href="/unterstuetzen#mitgliedschaft" variant="light">Mitglied werden <span aria-hidden="true">→</span></Button>
                <Button href="/unterstuetzen#patenschaften" variant="light">Tierpatenschaft übernehmen <span aria-hidden="true">→</span></Button>
            </div>
        </Section>
    );
}

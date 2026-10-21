import Button from "./Button";
import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    layout: css`
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
        gap: clamp(40px, 8vw, 110px);
        align-items: center;
        @media (max-width: 760px) { grid-template-columns: 1fr; }
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
        gap: 14px;
        a { width: 100%; justify-content: space-between; }
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
                    Über Unterstützung für die Tiere freuen wir uns. Tierpatenschaften und andere finanzielle Fördermöglichkeiten machen die Versorgung planbar und dauerhaft möglich.
                </Typography>
                <Typography variant="body1">
                    Jeder Euro hilft. Etwas Sinnvolles zu tun, kann so einfach sein…
                </Typography>
            </div>
            <div className={styles.actions} aria-label="Möglichkeiten zu helfen">
                <Button href="/unterstuetzen#spenden">Jetzt spenden <span aria-hidden="true">→</span></Button>
                <Button href="/unterstuetzen#mitgliedschaft" variant="light">Mitglied werden <span aria-hidden="true">→</span></Button>
                <Button href="/unterstuetzen#patenschaft" variant="light">Tierpatenschaft übernehmen <span aria-hidden="true">→</span></Button>
            </div>
        </Section>
    );
}

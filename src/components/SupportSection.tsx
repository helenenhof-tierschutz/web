import Button from "./Button";
import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    supportLayout: css`
        display: grid;
        grid-template-columns: 0.85fr 1fr;
        gap: clamp(50px, 9vw, 125px);
        align-items: start;
        @media (max-width: 760px) { grid-template-columns: 1fr; gap: 30px; }
    `,
    supportIntro: css`
        h2 { margin-top: 0; margin-bottom: 26px; }
        & > p { max-width: 450px; margin-bottom: 30px; color: var(--color-cream-dark); font-size: 0.95rem; line-height: 1.95; }
    `,
    supportList: css`border-top: 1px solid color-mix(in srgb, var(--color-white) 20%, transparent);`,
    supportItem: css`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        align-items: start;
        padding: 28px 0;
        border-bottom: 1px solid color-mix(in srgb, var(--color-white) 20%, transparent);
        h3 { margin-top: 0; margin-bottom: 9px; font-family: var(--font-serif); font-size: 1.5rem; font-weight: 500; }
        p { margin-top: 0; margin-bottom: 0; color: var(--color-cream-dark); font-size: 0.85rem; line-height: 1.8; }
    `,
};

const waysToHelp = [
    {
        title: "Spenden",
        text: "Mit einer Spende helfen Sie, Futter, medizinische Versorgung und den Alltag der Tiere zu finanzieren.",
    },
    {
        title: "Tierpatenschaften",
        text: "Regelmäßige Unterstützung hilft uns, die Versorgung unserer Schützlinge langfristig zu planen.",
    },
    {
        title: "Engagement zeigen",
        text: "Auch das Teilen unserer Arbeit und der Austausch mit anderen Tierfreunden helfen unserem Verein.",
    },
];

export default function SupportSection() {
    return (
        <Section
            surface="strong"
            id="unterstuetzen"
            contentClassName={styles.supportLayout}
        >
                <div className={styles.supportIntro}>
                    <Typography variant="eyebrow">
                        Gemeinsam für Tiere
                    </Typography>

                    <Typography variant="h2" size="display">
                        Gute Veränderung
                        <br />
                        beginnt mit <em>uns.</em>
                    </Typography>

                    <Typography variant="body1">
                        Tierschutz braucht Menschen, die mithelfen.
                        Jede Unterstützung macht einen Unterschied –
                        für die Tiere, die heute auf uns angewiesen sind,
                        und für die Zukunft des Helenenhofs.
                    </Typography>

                    <Button
                        variant="light"
                        href="/?WORK_IN_PROGRESS"
                    >
                        Alle Möglichkeiten entdecken
                    </Button>
                </div>

                <div className={styles.supportList}>
                    {waysToHelp.map((item) => (
                        <article className={styles.supportItem} key={item.title}>
                            <div>
                                <Typography variant="h3">{item.title}</Typography>
                                <Typography variant="body1">{item.text}</Typography>
                            </div>
                        </article>
                    ))}
                </div>
        </Section>
    );
}

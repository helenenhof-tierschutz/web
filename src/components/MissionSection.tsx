import { css } from "@emotion/css";
import Card from "./Card";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

type MissionIconName = "home" | "care" | "network" | "support" | "dialogue";

const styles = {
    heading: css`
        max-width: 670px;
        margin: 0 auto 56px;
        text-align: center;
        h2 { margin: 0; }
        @media (max-width: 760px) { margin-bottom: 36px; }
    `,
    card: css`
        .mission-icon {
            display: grid;
            width: 48px;
            height: 48px;
            margin-bottom: 18px;
            place-items: center;
            border-radius: 50%;
            background: var(--color-cream-dark);
            color: var(--color-main);
        }
        .mission-icon svg { width: 25px; height: 25px; }
        h3 { margin-bottom: 16px; }
        p { line-height: 1.7; }
        p:last-child { margin-bottom: 0; }
    `,
};

function MissionIcon({ name }: { name: MissionIconName }) {
    const common = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.7,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    return (
        <span className="mission-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
                {name === "home" && <>
                    <path {...common} d="m3.5 10 8.5-6.7L20.5 10v10.2H3.5Z" />
                    <path {...common} d="M8.8 20.2v-5.6h6.4v5.6" />
                    <path {...common} d="M12 10.8v.1" />
                </>}
                {name === "care" && <>
                    <circle {...common} cx="12" cy="12" r="8.7" />
                    <path {...common} d="M12 7.6v8.8M7.6 12h8.8" />
                </>}
                {name === "network" && <>
                    <circle {...common} cx="5.2" cy="12" r="2.3" />
                    <circle {...common} cx="18.8" cy="6" r="2.3" />
                    <circle {...common} cx="18.8" cy="18" r="2.3" />
                    <path {...common} d="m7.3 11 9.4-4M7.3 13l9.4 4" />
                </>}
                {name === "support" && <>
                    <path {...common} d="M12 20.4s-7.4-4.5-7.4-10.1A3.7 3.7 0 0 1 12 9a3.7 3.7 0 0 1 7.4 1.3c0 5.6-7.4 10.1-7.4 10.1Z" />
                </>}
                {name === "dialogue" && <>
                    <path {...common} d="M4 5.2h16v10.1H9l-5 3.5Z" />
                    <path {...common} d="M8 9.2h8M8 12.3h5.2" />
                </>}
            </svg>
        </span>
    );
}

const missions: { title: string; icon: MissionIconName; paragraphs: string[] }[] = [
    {
        title: "Aufnahme und artgerechte Unterbringung",
        icon: "home",
        paragraphs: [
            "Wir nehmen hilfsbedürftige, ausgesetzte oder vernachlässigte Tiere auf, pflegen und versorgen sie und bringen sie artgerecht unter.",
            "Nach Jahren der Vernachlässigung legen wir Wert darauf, den Tieren ordentliches, frisches Futter und ein dauerhaftes Heim zu bieten.",
        ],
    },
    {
        title: "Tierärztliche Versorgung",
        icon: "care",
        paragraphs: [
            "Tierärztliche Untersuchungen, Behandlungen, Impfungen, Medikamente und notwendige Pflegemaßnahmen gehören zu den wichtigsten, aber auch kostenintensivsten Teilen unserer Arbeit.",
            "Viele Tiere kommen in schlechtem Zustand zu uns und benötigen eine umfassende medizinische Versorgung.",
        ],
    },
    {
        title: "Zusammenarbeit und Vermittlung im Netzwerk",
        icon: "network",
        paragraphs: [
            "Wir bauen derzeit die Zusammenarbeit mit Tierärzten, anderen Tierschutzorganisationen und Pflegestellen aus.",
            "Tiere vermitteln wir grundsätzlich auch in geeignete und verantwortungsvolle Haltungen – aber nur dann, wenn es im Einzelfall dem Tierwohl entspricht.",
        ],
    },
    {
        title: "Tierpatenschaften und Förderung",
        icon: "support",
        paragraphs: [
            "Über Unterstützung für die Tiere freuen wir uns. Tierpatenschaften und andere finanzielle Fördermöglichkeiten machen die Versorgung planbar und dauerhaft möglich.",
        ],
    },
    {
        title: "Aufklärung der Öffentlichkeit",
        icon: "dialogue",
        paragraphs: [
            "Wir informieren über artgerechte Tierhaltung und Tierschutz, machen die Bedürfnisse der Tiere sichtbar und bemühen uns, Wissen über einen anständigen Umgang mit Lebewesen zu vermitteln.",
            "Besuche auf dem Hof sind derzeit noch nicht möglich. Für später sind Hoffeste und Nachmittage mit Kindern, Senioren oder anderen Interessierten geplant. Dann möchten wir vor Ort zeigen, wie bereichernd der Kontakt zu Tieren sein kann.",
            "Gemäß dem Motto – „leise, langsam, liebevoll“.",
        ],
    },
];

export default function MissionSection() {
    return (
        <Section surface="soft" id="unsere-arbeit">
            <div className={styles.heading}>
                <Typography variant="eyebrow">Was wir tun</Typography>
                <Typography variant="h2" size="display">
                    Mit Herz und Verstand.{" "}<br /><em>Für jedes Tier.</em>
                </Typography>
            </div>
            <Grid container spacing={{ xs: 2, lg: 2.25 }}>
                {missions.map((mission) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={mission.title}>
                        <Card as="article" surface="paper" className={styles.card} sx={{ padding: { xs: 24, sm: "27px 23px" } }}>
                            <MissionIcon name={mission.icon} />
                            <Typography variant="h3">{mission.title}</Typography>
                            {mission.paragraphs.map((paragraph) => (
                                <Typography variant="body2" color="muted" key={paragraph}>{paragraph}</Typography>
                            ))}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

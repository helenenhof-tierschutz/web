import { css } from "@emotion/css";
import Card from "./Card";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    heading: css`
        max-width: 670px;
        margin: 0 auto 56px;
        text-align: center;
        h2 { margin: 0; }
        @media (max-width: 760px) { margin-bottom: 36px; }
    `,
    card: css`
        h3 { margin-bottom: 16px; }
        p { line-height: 1.7; }
        p:last-child { margin-bottom: 0; }
    `,
};

const missions = [
    {
        title: "Aufnahme und artgerechte Unterbringung",
        paragraphs: [
            "Wir nehmen hilfsbedürftige, ausgesetzte oder vernachlässigte Tiere auf, pflegen und versorgen sie und bringen sie artgerecht unter.",
            "Nach Jahren der Vernachlässigung legen wir Wert darauf, den Tieren ordentliches, frisches Futter und ein dauerhaftes Heim zu bieten.",
        ],
    },
    {
        title: "Tierärztliche Versorgung",
        paragraphs: [
            "Tierärztliche Untersuchungen, Behandlungen, Impfungen, Medikamente und notwendige Pflegemaßnahmen gehören zu den wichtigsten, aber auch kostenintensivsten Teilen unserer Arbeit.",
            "Viele Tiere kommen in schlechtem Zustand zu uns und benötigen eine umfassende medizinische Versorgung.",
        ],
    },
    {
        title: "Zusammenarbeit und Vermittlung im Netzwerk",
        paragraphs: [
            "Wir bauen derzeit die Zusammenarbeit mit Tierärzten, anderen Tierschutzorganisationen und Pflegestellen aus.",
            "Tiere vermitteln wir grundsätzlich auch in geeignete und verantwortungsvolle Haltungen – aber nur dann, wenn es im Einzelfall dem Tierwohl entspricht.",
        ],
    },
    {
        title: "Tierpatenschaften und Förderung",
        paragraphs: [
            "Über Unterstützung für die Tiere freuen wir uns. Tierpatenschaften und andere finanzielle Fördermöglichkeiten machen die Versorgung planbar und dauerhaft möglich.",
        ],
    },
    {
        title: "Aufklärung der Öffentlichkeit",
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

import { css } from "@emotion/css";
import Card from "./Card";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    sectionHeading: css`
        max-width: 670px;
        margin: 0 auto 56px;
        text-align: center;
        h2 {
            margin-top: 0;
            margin-bottom: 26px;
        }
        & > p { max-width: 540px; margin: 0 auto; color: var(--color-text-light); font-size: 0.96rem; line-height: 1.9; }
        @media (max-width: 760px) { margin-bottom: 36px; }
    `,
};

const missions = [
    {
        title: "Aufnahme & Unterbringung",
        text: "Wir nehmen hilfsbedürftige, ausgesetzte oder vernachlässigte Tiere auf, pflegen und versorgen sie und bringen sie artgerecht unter.",
    },
    {
        title: "Tierärztliche Versorgung",
        text: "Tierärztliche Untersuchungen, Impfungen, Medikamente und notwendige Pflegemaßnahmen gehören zu den wichtigsten, aber auch kostenintensivsten Teilen unserer Arbeit.",
    },
    {
        title: "Vermittlung & Netzwerk",
        text: "Wir arbeiten mit Tierärzten, Pflegestellen und anderen Tierschutzorganisationen zusammen. Tiere vermitteln wir grundsätzlich auch in geeignete und verantwortungsvolle Haltungen.",
    },
    {
        title: "Aufklärung der Öffentlichkeit",
        text: "Wir informieren über artgerechte Tierhaltung und Tierschutz, machen die Bedürfnisse der Tiere sichtbar und bemühen uns, Wissen über einen anständigen Umgang mit Lebewesen zu vermitteln.",
    },
];

export default function MissionSection() {
    return (
        <Section
            surface="soft"
            id="unsere-arbeit"
        >
            <div className={styles.sectionHeading}>
                <Typography variant="eyebrow">Was uns wichtig ist</Typography>

                <Typography variant="h2" size="display">
                    Tierschutz, der
                    <br />
                    <em>vor Ort ankommt.</em>
                </Typography>

                <Typography variant="body1">
                    Verantwortung bedeutet für uns, hinzusehen,
                    zu handeln und jedem Tier die Fürsorge zu geben,
                    die es braucht.
                </Typography>
            </div>

            <Grid container spacing={{ xs: 2, lg: 2.25 }}>
                {missions.map((mission) => (
                    <Grid
                        as="div"
                        size={{ xs: 12, sm: 6, lg: 3 }}
                        key={mission.title}
                    >
                        <Card
                            as="article"
                            surface="soft"
                            hoverable
                            sx={{
                                position: "relative",
                                minHeight: { xs: "unset", sm: 270, lg: 310 },
                                padding: { xs: 24, sm: "27px 23px" },
                            }}
                        >
                            <Typography variant="h3" gutterBottom>{mission.title}</Typography>
                            <Typography variant="body2" color="muted">{mission.text}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

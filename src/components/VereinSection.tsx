import { css } from "@emotion/css";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    text: css`
        max-width: 590px;
        p { color: var(--color-text-light); line-height: 1.8; }
    `,
};

export default function VereinSection() {
    return (
        <Section surface="soft">
            <Grid container spacing={{ xs: 2, md: 6 }}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Typography variant="eyebrow">Tierschutz in der Nordeifel</Typography>
                    <Typography variant="h1" size="display">
                        Unser <em>Verein.</em>
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <div className={styles.text}>
                        <Typography variant="subtitle1" color="main">
                            Wir arbeiten mit Ruhe, Geduld und Verantwortung.
                        </Typography>
                        <Typography variant="body1" color="muted">
                            Nicht die schnelle Aufnahme möglichst vieler Tiere steht im
                            Mittelpunkt, sondern eine gute, langfristig tragfähige
                            Versorgung jedes einzelnen Tieres.
                        </Typography>
                        <Typography variant="body1" color="muted">
                            Ins Leben gerufen wurde unser Verein am 24. Mai 2026 in
                            Aachen, unter den Gründungsmitgliedern ein Informatikstudent,
                            ein Theologe und eine pensionierte Buchhalterin. Alle
                            motiviert durch den Wunsch, den Blick auf Lebewesen zu
                            lenken, denen oft übel mitgespielt wird.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Section>
    );
}

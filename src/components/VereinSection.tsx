import { css } from "@emotion/css";
import Grid from "./Grid";
import Image from "./Image";
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
            <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <div className={styles.text}>
                        <Typography variant="eyebrow">Der Verein</Typography>
                        <Typography variant="h2" size="display">
                            Gemeinsam gegründet.<br />
                            <em>Für Tiere da.</em>
                        </Typography>
                        <Typography variant="body1" color="muted">
                            So haben wir in einer generationsübergreifenden
                            Gründungsgruppe – der Jüngste 18 Jahre, die Älteste 74 Jahre –
                            den Verein ins Leben gerufen. Künftig möchten wir noch mehr
                            verwaisten Tieren ein sicheres Heim bieten können.
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
                <Grid size={{ xs: 12, md: 6 }}>
                    <Image
                        src="/images/home/kaninchen-beim-fressen.webp"
                        alt="Kaninchen fressen gemeinsam Gemüse im Außengehege"
                        loading="eager"
                        displayHeight="430px"
                        mobileHeight="300px"
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

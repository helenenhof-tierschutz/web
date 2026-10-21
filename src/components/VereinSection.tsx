import Grid from "./Grid";
import Image from "./Image";
import Section from "./Section";
import Typography from "./Typography";

export default function VereinSection() {
    return (
        <Section surface="none">
            <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <div>
                        <Typography variant="eyebrow">Tierschutz in der Nordeifel</Typography>
                        <Typography variant="h1">
                            Unser <em>Verein.</em>
                        </Typography>
                        <Typography variant="subtitle1" color="main">
                            Der Helenenhof liegt im schönen Dorf Steckenborn auf den
                            Höhen über dem Rursee in der Nordeifel. Dort, wo die Welt
                            noch ein wenig heiler ist.
                        </Typography>
                        <Typography variant="body1" color="muted">
                            Wir arbeiten mit Ruhe, Geduld und Verantwortung. Nicht die
                            schnelle Aufnahme möglichst vieler Tiere steht im
                            Mittelpunkt, sondern eine gute, langfristig tragfähige
                            Versorgung jedes einzelnen Tieres.
                        </Typography>
                        <Typography variant="body1" color="muted">
                            Ins Leben gerufen wurde unser Verein am 24. Mai 2026 in
                            Aachen, unter den Gründungsmitgliedern ein Student, ein
                            Theologe und eine pensionierte Buchhalterin. Alle motiviert
                            durch den Wunsch, den Blick auf Lebewesen zu lenken, denen
                            oft übel mitgespielt wird.
                        </Typography>
                    </div>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Image
                        src="/images/8244ED9C-F66E-4908-BE66-2032255CF58A.jpeg"
                        alt="Das malerische Außengelände des Helenenhofes"
                        loading="lazy"
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

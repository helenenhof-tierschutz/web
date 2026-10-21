import Grid from "./Grid";
import Image from "./Image";
import Section from "./Section";
import Typography from "./Typography";

export default function AboutSection() {
    return (
        <Section
            surface="none"
            id="ueber-uns"
        >
            <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="eyebrow">Wer wir sind</Typography>

                    <Typography variant="h2" size="display">
                        Klein anfangen.{" "}
                        <br />
                        <em>Großes bewirken.</em>
                    </Typography>

                    <Typography component="p" variant="subtitle1" color="main">
                        Ursprünglich war das eine Aachener Privatinitiative, die wir nun auf eine breitere Basis gestellt haben, um künftig noch mehr verwaisten Tieren ein sicheres Heim bieten zu können.
                    </Typography>

                    <Typography variant="body1" color="muted">
                        So haben wir in einer generationsübergreifenden Gründungsgruppe, der Jüngste 18 Jahre, die Älteste 74 Jahre, den Verein ins Leben gerufen.
                    </Typography>

                    <Typography variant="body1" color="muted">
                        Wir möchten bewusst klein anfangen und verantwortungsvoll wachsen.
                        Jeder neue Bereich und jedes neu aufgenommene Tier soll langfristig gut versorgt sein.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Image
                        src="/images/home/kaninchen-vor-stall.webp"
                        alt="Braunes Schlappohrkaninchen vor einem Holzstall"
                        loading="lazy"
                        objectPosition="center 57%"
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

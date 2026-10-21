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
            <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="eyebrow">Wer wir sind</Typography>

                    <Typography variant="h2" size="display">
                        Klein anfangen.
                        <br />
                        <em>Großes bewirken.</em>
                    </Typography>

                    <Typography variant="subtitle1" color="main">
                        Ursprünglich war das eine Aachener Privatinitiative, die wir nun auf eine breitere Basis gestellt haben, um künftig noch mehr verwaisten Tieren ein sicheres Heim bieten zu können.
                    </Typography>

                    <Typography variant="body1" color="muted">
                        So haben wir in einer generationsübergreifenden Gründungsgruppe – der Jüngste 18 Jahre, die Älteste 74 Jahre – den Verein ins Leben gerufen.
                        Im Sommer 2027 werden alle Tiere auf den Helenenhof in Simmerath-Steckenborn ziehen.
                        Dort erwartet sie ein weitläufiges Grundstück, ein mardersicheres Außengehege und für die Katzen Zugang ins Haus – für alle Vierbeiner ist selbstverständlich eine solide Rund-um-Versorgung garantiert.
                    </Typography>

                    <Typography variant="body1" color="muted">
                        Aktuell wird in der Nordeifel ein Stallgebäude erweitert, da der Verein künftig Esel aus schlechter Haltung aufnehmen oder vom Schlachthof freikaufen wird.
                        Der Aufbau einer kleinen Herde ist in Planung, Weidefläche steht zur Verfügung.
                    </Typography>

                    <Typography variant="body1" color="muted">
                        Wir möchten bewusst klein anfangen und verantwortungsvoll wachsen.
                        Jeder neue Bereich und jedes neu aufgenommene Tier soll langfristig gut versorgt sein.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Image
                        src="/images/801DAC93-93AC-4488-81A0-3A63CFB4CE7B.jpeg"
                        alt="Ein Kaninchen sitzt auf dem Dach eines Stalls"
                        loading="lazy"
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

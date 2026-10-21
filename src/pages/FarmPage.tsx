import { css } from "@emotion/css";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Image from "../components/Image";
import LocationMap from "../components/LocationMap";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Page from "./Page";

const styles = {
    copy: css`
        max-width: 590px;
        p { color: var(--color-text-light); line-height: 1.8; }
    `,
};

export default function FarmPage() {
    return (
        <Page>
            <Section surface="none">
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.copy}>
                            <Typography variant="eyebrow">Ein Ort für Tiere</Typography>
                            <Typography variant="h1" size="display">
                                Der <em>Helenenhof.</em>
                            </Typography>
                            <Typography variant="subtitle1" color="main">
                                Der Hof liegt im schönen Dorf Steckenborn auf den Höhen
                                über dem Rursee in der Nordeifel.
                            </Typography>
                            <Typography variant="body1">
                                Dort, wo die Welt noch ein wenig heiler ist. Im Sommer
                                2027 werden alle Tiere auf den Helenenhof in
                                Simmerath-Steckenborn ziehen.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src="/images/home/hof-wohnhaus.webp"
                            alt="Wohnhaus hinter einem Baum und einer Hecke auf dem Hofgelände"
                            loading="eager"
                            objectPosition="center 57%"
                        />
                    </Grid>
                </Grid>
            </Section>

            <Section surface="soft">
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src="/images/home/hof-gartenteich.webp"
                            alt="Gartenteich mit Farnen und Bäumen auf dem Hofgelände"
                            loading="lazy"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.copy}>
                            <Typography variant="eyebrow">Platz für ein gutes Leben</Typography>
                            <Typography variant="h2" size="display">
                                Was auf dem Hof <em>entsteht.</em>
                            </Typography>
                            <Typography variant="body1">
                                Dort erwartet die Tiere ein weitläufiges Grundstück,
                                ein mardersicheres Außengehege und für die Katzen Zugang
                                ins Haus. Für alle Vierbeiner ist eine solide
                                Rund-um-Versorgung vorgesehen.
                            </Typography>
                            <Typography variant="body1">
                                Aktuell wird in der Nordeifel ein Stallgebäude erweitert,
                                da der Verein künftig Esel aus schlechter Haltung
                                aufnehmen oder vom Schlachthof freikaufen wird. Der
                                Aufbau einer kleinen Herde ist in Planung, Weidefläche
                                steht zur Verfügung.
                            </Typography>
                            <Button href="/ueber-uns">Den Verein kennenlernen</Button>
                        </div>
                    </Grid>
                </Grid>
            </Section>

            <LocationMap />
        </Page>
    );
}

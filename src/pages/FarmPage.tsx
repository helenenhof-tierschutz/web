import { css } from "@emotion/css";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Image from "../components/Image";
import LocationMap from "../components/LocationMap";
import PageBanner from "../components/PageBanner";
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
            <PageBanner
                src="/images/banners/waldpfad-mit-sonnenstrahlen.jpg"
                alt="Waldpfad mit Sonnenstrahlen"
                eyebrow="Unser Hof"
                title={<><span>Ein Ort zum Ankommen.</span><br /><em>Und zum Bleiben.</em></>}
                lead="Der Hof liegt im schönen Dorf Steckenborn auf den Höhen über dem Rursee in der Nordeifel – dort, wo die Welt noch ein wenig heiler ist."
                objectPosition="center 58%"
            />
            <Section surface="none">
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.copy}>
                            <Typography variant="eyebrow">Der neue Standort</Typography>
                            <Typography variant="h2" size="display">
                                Ein Zuhause mit Zukunft.<br />
                                <em>Für jedes Tier.</em>
                            </Typography>
                            <Typography variant="body1">
                                Im Sommer 2027 werden alle Tiere auf den Helenenhof in
                                Simmerath-Steckenborn ziehen. Dort erwartet sie ein
                                weitläufiges Grundstück, ein mardersicheres Außengehege
                                und für die Katzen Zugang ins Haus – für alle Vierbeiner
                                ist selbstverständlich eine solide Rund-um-Versorgung garantiert.
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
                            <Typography variant="eyebrow">Ein Blick in die Zukunft</Typography>
                            <Typography variant="h2" size="display">
                                Neue Möglichkeiten.<br />
                                <em>Für weitere Schützlinge.</em>
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

            <Section surface="none">
                <Grid container spacing={{ xs: 2, md: 6 }}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="eyebrow">Den Helenenhof erleben</Typography>
                        <Typography variant="h2" size="display">
                            Leise. Langsam.<br />
                            <em>Liebevoll.</em>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <div className={styles.copy}>
                            <Typography variant="body1">
                                Besuche auf dem Hof sind derzeit noch nicht möglich.
                                Hoffeste sind geplant. Ebenso kurzweilige Nachmittage
                                mit Kindern, Senioren oder anderen Interessierten,
                                denen wir vor Ort zeigen möchten, wie bereichernd der
                                Kontakt zu Tieren sein kann.
                            </Typography>
                            <Typography variant="body1">
                                Gemäß dem Motto – „leise, langsam, liebevoll“.
                            </Typography>
                            <Button href="/kontakt">Kontakt aufnehmen</Button>
                        </div>
                    </Grid>
                </Grid>
            </Section>

            <LocationMap />
        </Page>
    );
}

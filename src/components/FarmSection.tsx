import { css } from "@emotion/css";
import Button from "./Button";
import Grid from "./Grid";
import Image from "./Image";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    copy: css`
        max-width: 585px;
        h2 { margin-bottom: 30px; }
        p { color: var(--color-text-light); line-height: 1.8; }
    `,
    lead: css`
        color: var(--color-main) !important;
        font-family: var(--font-serif);
        font-size: 1.35rem;
        line-height: 1.65 !important;
    `,
};

export default function FarmSection() {
    return (
        <Section surface="none" id="unser-hof">
            <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <div className={styles.copy}>
                        <Typography variant="eyebrow">Unser Hof</Typography>
                        <Typography variant="h2" size="display">
                            Ein neuer Ort.{" "}<br /><em>Für ein gutes Leben.</em>
                        </Typography>
                        <Typography variant="body1" className={styles.lead}>
                            Im Sommer 2027 werden alle Tiere auf den Helenenhof in Simmerath-Steckenborn ziehen.
                        </Typography>
                        <Typography variant="body1">
                            Dort erwartet sie ein weitläufiges Grundstück, ein mardersicheres Außengehege und für die Katzen Zugang ins Haus – für alle Vierbeiner ist selbstverständlich eine solide Rund-um-Versorgung garantiert.
                        </Typography>
                        <Typography variant="body1">
                            Aktuell wird in der Nordeifel ein Stallgebäude erweitert, da der Verein künftig Esel aus schlechter Haltung aufnehmen oder vom Schlachthof freikaufen wird. Der Aufbau einer kleinen Herde ist in Planung, Weidefläche steht zur Verfügung.
                        </Typography>
                        <Button href="/ueber-uns">Mehr über den Hof</Button>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Image
                        src="/images/home/hof-wohnhaus.webp"
                        alt="Wohnhaus hinter einem Baum und einer Hecke auf dem Hofgelände"
                        loading="lazy"
                        objectPosition="center 57%"
                    />
                </Grid>
            </Grid>
        </Section>
    );
}

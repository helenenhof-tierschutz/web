import { css } from "@emotion/css";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Image from "../components/Image";
import Section from "../components/Section";
import Typography from "../components/Typography";
import VorstandSection from "../components/VorstandSection";
import VereinSection from "../components/VereinSection";
import Page from "./Page";

const copy = css`
    max-width: 590px;
    p { color: var(--color-text-light); line-height: 1.8; }
`;

export default function AboutPage() {
    return (
        <Page>
            <VereinSection />

            <Section surface="none">
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={copy}>
                            <Typography variant="eyebrow">Was uns wichtig ist</Typography>
                            <Typography variant="h2" size="display">
                                Bewusst klein anfangen.<br />
                                <em>Verantwortungsvoll wachsen.</em>
                            </Typography>
                            <Typography component="p" variant="subtitle1" color="main">
                                Wir möchten bewusst klein anfangen und verantwortungsvoll wachsen.
                            </Typography>
                            <Typography variant="body1">
                                Jeder neue Bereich und jedes neu aufgenommene Tier soll
                                langfristig gut versorgt sein. Nicht die schnelle
                                Aufnahme möglichst vieler Tiere steht im Mittelpunkt,
                                sondern eine gute, langfristig tragfähige Versorgung
                                jedes einzelnen Tieres.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src="/images/home/kaninchen-auf-wiese.webp"
                            alt="Drei Kaninchen auf einer Wiese"
                            loading="lazy"
                        />
                    </Grid>
                </Grid>
            </Section>

            <VorstandSection />

            <Section surface="none">
                <Grid container spacing={{ xs: 2, md: 6 }}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="eyebrow">Unser Vereinsgedanke</Typography>
                        <Typography variant="h2" size="display">
                            Zusammenarbeiten.<br />
                            <em>Verantwortung tragen.</em>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <div className={copy}>
                            <Typography variant="body1">
                                Wir bauen derzeit die Zusammenarbeit mit Tierärzten,
                                anderen Tierschutzorganisationen und Pflegestellen aus.
                                Tiere vermitteln wir grundsätzlich auch in geeignete und
                                verantwortungsvolle Haltungen – aber nur dann, wenn es
                                im Einzelfall dem Tierwohl entspricht.
                            </Typography>
                            <Typography variant="body1">
                                Wir informieren über artgerechte Tierhaltung und
                                Tierschutz, machen die Bedürfnisse der Tiere sichtbar
                                und bemühen uns, Wissen über einen anständigen Umgang
                                mit Lebewesen zu vermitteln.
                            </Typography>
                            <Button href="/helenenhof">Den Helenenhof ansehen</Button>
                        </div>
                    </Grid>
                </Grid>
            </Section>
        </Page>
    );
}

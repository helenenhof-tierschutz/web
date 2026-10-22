import { css } from "@emotion/css";
import Grid from "../components/Grid";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Page from "./Page";

const styles = {
    content: css`
        max-width: 580px;
        p, address { color: var(--color-text-light); line-height: 1.85; }
        address { font-style: normal; }
        a { color: var(--color-main); text-decoration: underline; text-underline-offset: 4px; }
        a:hover { color: var(--color-accent); }
    `,
};

export default function ContactPage() {
    return (
        <Page>
            <Section surface="soft">
                <Grid container spacing={{ xs: 2, md: 6 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="eyebrow">Kontakt</Typography>
                        <Typography variant="h1" size="display">
                            Wir freuen uns.<br />
                            <em>Von Ihnen zu hören.</em>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.content}>
                            <Typography component="p" variant="subtitle1" color="main">
                                Schreiben Sie uns, wenn Sie Fragen zum Verein, zu den
                                Tieren oder zu einer Unterstützung haben.
                            </Typography>
                            <address>
                                Helenenhof – Tierschutzverein Nordeifel e. V.<br />
                                In Steckenborn 35<br />
                                52152 Simmerath
                            </address>
                            <Typography variant="body1">
                                E-Mail: <a href="mailto:info@helenenhof-tierschutz.de">info@helenenhof-tierschutz.de</a>
                            </Typography>
                            <Typography variant="body1">
                                Hofbesuche sind derzeit noch nicht möglich. Bitte nehmen
                                Sie bei Fragen zunächst per E-Mail Kontakt mit uns auf.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Section>
        </Page>
    );
}

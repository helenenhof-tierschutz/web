import Page from "./Page";
import Section from "../components/Section";
import Typography from "../components/Typography";
import { css } from "@emotion/css";

const styles = {
    content: css`
        h2 { margin: 36px 0 12px; }
        h2:first-child { margin-top: 0; }
        p, address, li { color: var(--color-text-light); font-size: 0.96rem; line-height: 1.85; }
        address { font-style: normal; }
        ul { padding-left: 1.25rem; }
        a { color: var(--color-main); text-decoration: underline; text-underline-offset: 3px; }
        a:hover { color: var(--color-accent); }
    `,
};

export default function ImpressumPage() {
    return (
        <Page>
                <Section surface="soft" width="narrow" spacing="intro" textAlign="center">
                <Typography variant="eyebrow">Informationen</Typography>
                <Typography variant="h1" id="impressum-title">Impressum</Typography>
            </Section>
                <Section as="article" surface="none" width="narrow" spacing="reading" contentClassName={styles.content}>
                <Typography variant="h2">Angaben gemäß § 5 DDG</Typography>
                <address>
                    Helenenhof – Tierschutzverein Nordeifel e.V.
                    <br />
                    In Steckenborn 35
                    <br />
                    52152 Simmerath
                    <br />
                    Deutschland
                </address>

                <Typography variant="h2">Vertreten durch den Vorstand gemäß § 26 BGB</Typography>
                <Typography variant="body1">
                    Dr. Ursula Kals, Vorsitzende
                    <br />
                    Dr. med. Claus M. Wolf, stellvertretender Vorsitzender
                    <br />
                    Constantin Kals, Schatzmeister
                </Typography>
                <Typography variant="body1">Der Verein wird durch zwei Vorstandsmitglieder gemeinschaftlich vertreten.</Typography>

                <Typography variant="h2">Kontakt</Typography>
                <Typography variant="body1">
                    E-Mail: <a href="mailto:info@helenenhof-tierschutz.de">info@helenenhof-tierschutz.de</a>
                    <br />
                    Internet: <a href="https://helenenhof-tierschutz.de/">helenenhof-tierschutz.de</a>
                </Typography>

                <Typography variant="h2">Registereintrag</Typography>
                <Typography variant="body1">
                    Eingetragen im Vereinsregister des Amtsgerichts Aachen, Registernummer VR 6753.
                    Sitz des Vereins ist Simmerath.
                </Typography>

                <Typography variant="h2">Hinweis zur Gemeinnützigkeit</Typography>
                <Typography variant="body1">
                    Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke,
                    insbesondere die Förderung des Tierschutzes.
                </Typography>

                <Typography variant="h2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</Typography>
                <address>
                    Ursula Kals
                    <br />
                    Kreuzstraße 56
                    <br />
                    52080 Aachen
                    <br />
                    Deutschland
                </address>

                <Typography variant="h2">Haftung für Inhalte</Typography>
                <Typography variant="body1">
                    Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
                    Für deren Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine
                    Gewähr übernommen werden. Bei Bekanntwerden konkreter Rechtsverletzungen
                    werden betroffene Inhalte unverzüglich geprüft und gegebenenfalls entfernt.
                </Typography>

                <Typography variant="h2">Haftung für externe Links</Typography>
                <Typography variant="body1">
                    Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren
                    Inhalte haben wir keinen Einfluss; verantwortlich ist jeweils der Anbieter
                    oder Betreiber der verlinkten Seiten. Bei Bekanntwerden von
                    Rechtsverletzungen werden betroffene Links entfernt.
                </Typography>

                <Typography variant="h2">Urheberrecht</Typography>
                <Typography variant="body1">
                    Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
                    deutschen Urheberrecht. Jede Verwertung außerhalb der gesetzlichen Grenzen
                    bedarf der vorherigen Zustimmung der jeweiligen Rechteinhaber.
                </Typography>
            </Section>
        </Page>
    );
}
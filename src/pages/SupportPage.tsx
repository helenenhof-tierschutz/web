import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Image from "../components/Image";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Page from "./Page";
import { css } from "@emotion/css";

const bankDetails = {
    recipient: "Helenenhof Tierschutzverein",
    iban: "DE19 8306 5408 0007 0281 30",
    bank: "Deutsche Skatbank, Zweigniederlassung der VR-Bank Altenburger Land eG",
};

const supportOptions = [
    {
        title: "Spenden",
        label: "Direkt helfen",
        text: "Mit einer einmaligen oder regelmäßigen Spende finanzieren Sie Futter, Tierarztkosten und die tägliche Versorgung.",
        href: "#spenden",
        action: "Bankverbindung ansehen",
    },
    {
        title: "Patenschaften",
        label: "Langfristig begleiten",
        text: "Eine Patenschaft unterstützt die Versorgung eines Tieres. Die Einzelheiten stimmen wir persönlich mit Ihnen ab.",
        href: "mailto:info@helenenhof-tierschutz.de?subject=Tierpatenschaft%20anfragen",
        action: "Patenschaft anfragen",
        id: "patenschaft",
    },
    {
        title: "Mitglied werden",
        label: "Gemeinsam tragen",
        text: "Mit Ihrer Mitgliedschaft geben Sie dem Verein Planungssicherheit. Der Antrag wird ausgefüllt und eingereicht.",
        href: "/beitritterklaerung-2026.pdf",
        action: "Antrag herunterladen",
    },
    {
        title: "Ehrenamt",
        label: "Zeit schenken",
        text: "Ob Tierpflege, Fahrdienste, Reparaturen oder Veranstaltungen: Wir finden gemeinsam heraus, wo Ihre Hilfe passt.",
        href: "mailto:info@helenenhof-tierschutz.de?subject=Ehrenamt%20anfragen",
        action: "Ehrenamt anfragen",
    },
];

const styles = {
    introCopy: css`
        h1 { max-width: 760px; }
        p { max-width: 620px; color: var(--color-text-light); font-size: 1.08rem; line-height: 1.8; }
    `,
    sectionHeading: css`
        max-width: 700px;
        margin-bottom: 36px;
        h2 { margin: 0 0 12px; }
        p { color: var(--color-text-light); line-height: 1.75; }
    `,
    optionContent: css`
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        h3 { margin: 0 0 12px; }
        p { color: var(--color-text-light); line-height: 1.7; }
        a { margin-top: auto; padding-top: 16px; color: var(--color-accent); font-weight: 700; }
        a:hover { text-decoration: underline; text-underline-offset: 4px; }
    `,
    bankPanel: css`
        padding: 28px;
        border: 1px solid color-mix(in srgb, var(--color-white) 18%, transparent);
        border-radius: var(--border-radius);
        background: color-mix(in srgb, var(--color-white) 7%, transparent);
        dl { margin: 20px 0 0; }
        dt { color: color-mix(in srgb, var(--color-on-main) 68%, transparent); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
        dd { margin: 5px 0 18px; overflow-wrap: anywhere; font-size: 1rem; }
    `,
    copyButton: css`
        display: inline-flex;
        min-height: 40px;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid color-mix(in srgb, var(--color-on-main) 35%, transparent);
        border-radius: var(--border-radius);
        background: transparent;
        color: var(--color-on-main);
        font: inherit;
        font-size: 0.85rem;
        font-weight: 700;
        cursor: pointer;
        &:hover { background: color-mix(in srgb, var(--color-on-main) 10%, transparent); }
        &:focus-visible { outline: 3px solid var(--color-accent-light); outline-offset: 3px; }
    `,
    fees: css`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-block: 20px;
        span { display: inline-flex; flex-direction: column; gap: 3px; min-width: 150px; padding: 12px 16px; border-radius: var(--border-radius); background: var(--color-cream); }
        strong { font-family: var(--font-serif); font-size: 1.4rem; font-weight: 500; }
        small { color: var(--color-text-light); }
    `,
};

export default function SupportPage() {
    const [copyMessage, setCopyMessage] = useState("");

    async function copyIban() {
        try {
            await navigator.clipboard.writeText(bankDetails.iban.replaceAll(" ", ""));
            setCopyMessage("IBAN kopiert");
        } catch {
            setCopyMessage("Kopieren nicht verfügbar. Bitte markieren Sie die IBAN.");
        }
    }

    return (
        <Page>
            <Section surface="soft" spacing="intro">
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <div className={styles.introCopy}>
                            <Typography variant="eyebrow">Jetzt unterstützen</Typography>
                            <Typography variant="h1">Ihre Hilfe schenkt Tieren ein gutes Leben.</Typography>
                            <Typography variant="body1">
                                Ob mit einer Spende, einer Patenschaft, als Vereinsmitglied oder mit Ihrer Zeit: Jede Form der Unterstützung hilft unserem kleinen Verein, verlässlich für die Tiere da zu sein.
                            </Typography>
                            <div>
                                <Button href="#wege">Wege zu helfen</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Image
                            src="/images/917FC02F-D7F5-44BC-8FBC-F51CD53B3C92.jpeg"
                            alt="Der Helenenhof"
                            loading="lazy"
                            displayHeight="420px"
                            mobileHeight="clamp(280px, 75vw, 420px)"
                        />
                    </Grid>
                </Grid>
            </Section>

            <Section surface="none" id="wege">
                <div className={styles.sectionHeading}>
                    <Typography variant="eyebrow">So können Sie helfen</Typography>
                    <Typography variant="h2">Was zu Ihnen passt, hilft uns weiter.</Typography>
                    <Typography variant="body1">
                        Manchmal ist es ein regelmäßiger Beitrag, manchmal ein freier Nachmittag. Entscheidend ist, dass aus Mitgefühl konkrete Hilfe wird.
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    {supportOptions.map((option) => (
                        <Grid key={option.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                            <Card surface="paper" hoverable sx={{ height: "100%" }} id={option.id}>
                                <div className={styles.optionContent}>
                                    <Typography variant="eyebrow">{option.label}</Typography>
                                    <Typography variant="h3">{option.title}</Typography>
                                    <Typography variant="body1">{option.text}</Typography>
                                    <a href={option.href}>
                                        {option.action} <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            <Section surface="strong" id="spenden">
                <Grid container spacing={5} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="eyebrow">Geld spenden</Typography>
                        <Typography variant="h2">Direkt helfen. Ohne Umwege.</Typography>
                        <Typography variant="body1">
                            Mit Ihrer Spende tragen Sie dazu bei, dass die Tiere am Helenenhof zuverlässig versorgt werden können. Überweisen Sie Ihren Wunschbetrag direkt auf das Vereinskonto.
                        </Typography>
                        <p>
                            Als Verwendungszweck eignet sich „Freie Spende“ oder „Spende“ mit dem Namen eines Projekts.
                        </p>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <div className={styles.bankPanel}>
                            <Typography variant="eyebrow">Spendenkonto</Typography>
                            <Typography variant="h3">Bankverbindung</Typography>
                            <dl>
                                <dt>Empfänger</dt>
                                <dd>{bankDetails.recipient}</dd>
                                <dt>Kreditinstitut</dt>
                                <dd>{bankDetails.bank}</dd>
                                <dt>IBAN</dt>
                                <dd>{bankDetails.iban}</dd>
                            </dl>
                            <button type="button" className={styles.copyButton} onClick={copyIban}>
                                {copyMessage || "IBAN kopieren"}
                            </button>
                            <span className="sr-only" aria-live="polite">{copyMessage}</span>
                        </div>
                    </Grid>
                </Grid>
            </Section>

            <Section surface="soft" id="mitgliedschaft">
                <Grid container spacing={5} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="eyebrow">Mitglied werden</Typography>
                        <Typography variant="h2">Dauerhaft an unserer Seite.</Typography>
                        <Typography variant="body1">
                            Als Mitglied geben Sie dem Verein Planungssicherheit und tragen die Arbeit für die Tiere langfristig mit.
                        </Typography>
                        <div className={styles.fees}>
                            <span><strong>24 €</strong><small>regulärer Jahresbeitrag</small></span>
                            <span><strong>12 €</strong><small>ermäßigter Jahresbeitrag</small></span>
                        </div>
                        <Typography variant="body2" color="muted">
                            Ermäßigung für Schüler, Auszubildende, Studierende, Senioren, Arbeitslose und Menschen mit Schwerbehinderung ab GdB 50.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Card surface="paper" sx={{ padding: 28 }}>
                            <Typography variant="h3">Jetzt beitreten</Typography>
                            <Typography variant="body1">
                                Laden Sie die Beitrittserklärung herunter, füllen Sie sie aus und senden Sie sie per Post oder eingescannt per E-Mail an den Verein.
                            </Typography>
                            <p>Helenenhof – Tierschutzverein Nordeifel e.V.<br />In Steckenborn 35<br />52152 Simmerath</p>
                            <Button href="/beitritterklaerung-2026.pdf" download>
                                Beitrittserklärung herunterladen
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Section>

            <Section surface="none" id="ehrenamt">
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="eyebrow">Ehrenamtlich helfen</Typography>
                        <Typography variant="h2">Ihre Zeit ist ein Geschenk.</Typography>
                        <Typography variant="body1">
                            Auf einem Hof gibt es immer etwas zu tun. Wenn Sie regelmäßig oder punktuell helfen möchten, melden Sie sich gern. Gemeinsam finden wir eine Aufgabe, die zu Ihren Möglichkeiten und Erfahrungen passt.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Card surface="soft" sx={{ padding: 28 }}>
                            <Typography variant="h3">Wo Hilfe gebraucht wird</Typography>
                            <Typography variant="body1">Tierpflege, Bauen und Reparieren, Fahrdienste und Veranstaltungen.</Typography>
                            <Button href="mailto:info@helenenhof-tierschutz.de?subject=Ehrenamt%20anfragen">
                                Ehrenamt anfragen
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Section>
        </Page>
    );
}

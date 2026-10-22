import { useState } from "react";
import { css } from "@emotion/css";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Image from "../components/Image";
import PageBanner from "../components/PageBanner";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Page from "./Page";

const bankDetails = {
    recipient: "Helenenhof – Tierschutzverein",
    iban: "DE19 8306 5408 0007 0281 30",
    bank: "Deutsche Skatbank, Zweigniederlassung der VR-Bank Altenburger Land eG",
};

const styles = {
    copy: css`max-width: 620px; p { line-height: 1.8; }`,
    bankPanel: css`
        padding: clamp(24px, 4vw, 42px);
        border: 1px solid color-mix(in srgb, var(--color-white) 28%, transparent);
        background: color-mix(in srgb, var(--color-white) 8%, transparent);
        dl { margin: 24px 0 0; }
        dt { margin-top: 16px; color: color-mix(in srgb, var(--color-on-main) 74%, transparent); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        dd { margin: 5px 0 0; overflow-wrap: anywhere; line-height: 1.6; }
    `,
    copyButton: css`
        min-height: 44px;
        margin-top: 22px;
        padding: 9px 15px;
        border: 1px solid var(--color-on-main);
        background: transparent;
        color: var(--color-on-main);
        font: inherit;
        font-size: 0.85rem;
        font-weight: 700;
        cursor: pointer;
        &:hover { background: color-mix(in srgb, var(--color-on-main) 12%, transparent); }
        &:focus-visible { outline: 3px solid var(--color-accent-light); outline-offset: 3px; }
    `,
    fees: css`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-block: 28px;
        @media (max-width: 520px) { grid-template-columns: 1fr; }
    `,
    fee: css`
        padding: 20px;
        background: var(--color-cream);
        strong { display: block; color: var(--color-main); font-family: var(--font-serif); font-size: 2rem; font-weight: 500; }
        span { color: var(--color-text-light); font-size: 0.87rem; line-height: 1.5; }
    `,
    note: css`color: var(--color-text-light); font-size: 0.85rem; line-height: 1.7;`,
    application: css`
        max-width: 480px;
        padding: clamp(24px, 4vw, 36px);
        border: 1px solid var(--color-border);
        background: var(--color-bg-light);
        p { color: var(--color-text-light); line-height: 1.8; }
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
            <PageBanner
                src="/images/banners/wiese-mit-herbstlichem-wald.jpg"
                alt="Wiese vor einem herbstlichen Wald"
                eyebrow="Helfen Sie mit"
                title={<><span>Gemeinsam helfen.</span><br /><em>Mit Ihrer Unterstützung.</em></>}
                lead="Über Unterstützung für die Tiere freuen wir uns."
                action={{ href: "#spenden", label: "Möglichkeiten ansehen" }}
                objectPosition="center 53%"
            />
            <Section surface="strong" id="spenden">
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.copy}>
                            <Typography variant="eyebrow">Spenden</Typography>
                            <Typography variant="h2" size="display">
                                Jeder Euro hilft.<br />
                                <em>Ganz unmittelbar.</em>
                            </Typography>
                            <Typography variant="body1">
                                Der einfachste Weg, uns zu unterstützen, ist eine
                                Überweisung an die folgende Bankverbindung. Jeder Euro
                                hilft. Etwas Sinnvolles zu tun, kann so einfach sein …
                            </Typography>
                            <Typography variant="body1">
                                Wenn Sie eine Zuwendungsbestätigung benötigen, schreiben
                                Sie uns bitte an <a href="mailto:info@helenenhof-tierschutz.de">info@helenenhof-tierschutz.de</a>.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.bankPanel}>
                            <Typography variant="eyebrow">Vereinskonto</Typography>
                            <Typography variant="h3">Bankverbindung</Typography>
                            <dl>
                                <dt>Kontoinhaber</dt>
                                <dd>{bankDetails.recipient}</dd>
                                <dt>IBAN</dt>
                                <dd>{bankDetails.iban}</dd>
                                <dt>Bank</dt>
                                <dd>{bankDetails.bank}</dd>
                                <dt>Verwendungszweck</dt>
                                <dd>z. B. „Freie Spende“ oder „Spende [Projektname]“</dd>
                            </dl>
                            <button type="button" className={styles.copyButton} onClick={copyIban}>
                                IBAN kopieren
                            </button>
                            <span className="sr-only" role="status" aria-live="polite">{copyMessage}</span>
                        </div>
                    </Grid>
                </Grid>
            </Section>

            <Section surface="none" id="mitgliedschaft">
                <Grid container spacing={{ xs: 2, md: 6 }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <div className={styles.copy}>
                            <Typography variant="eyebrow">Mitglied werden</Typography>
                            <Typography variant="h2" size="display">
                                Teil unserer Gemeinschaft.<br />
                                <em>Teil unserer Hilfe.</em>
                            </Typography>
                            <Typography component="p" variant="subtitle1" color="main">
                                Keine Frage, dass wir uns über neue Mitglieder freuen.
                            </Typography>
                            <Typography variant="body1" color="muted">
                                Der reguläre Jahresbeitrag beträgt 24,00 Euro. Also zwei
                                Euro im Monat, dafür gibt es kaum mehr einen Cappuccino –
                                aber ein unbeschwertes Leben für Blacky & Co.
                            </Typography>
                            <div className={styles.fees}>
                                <div className={styles.fee}><strong>24 €</strong><span>regulär pro Jahr</span></div>
                                <div className={styles.fee}><strong>12 €</strong><span>ermäßigt pro Jahr</span></div>
                                <div className={styles.fee}><strong>40 €</strong><span>Familien pro Jahr</span></div>
                                <div className={styles.fee}><strong>180 €</strong><span>juristische Personen pro Jahr</span></div>
                            </div>
                            <p className={styles.note}>
                                Laut Beitrittserklärung gilt die Ermäßigung für Schüler,
                                Auszubildende, Studierende, Senioren, Arbeitslose und
                                Menschen mit Schwerbehinderung ab GdB 50. Ein formloser
                                Nachweis genügt.
                            </p>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <div className={styles.application}>
                            <Typography variant="eyebrow">Mitgliedsantrag</Typography>
                            <Typography variant="h3">Beitrittserklärung</Typography>
                            <Typography variant="body1">
                                Die offizielle Beitrittserklärung kann am Bildschirm oder
                                in Druckbuchstaben ausgefüllt werden. Bitte senden Sie
                                sie unterschrieben per Post oder E-Mail an den Verein.
                            </Typography>
                            <Button href="/documents/beitritterklaerung-2026.pdf" target="_blank" rel="noopener noreferrer">
                                Antrag öffnen
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Section>

            <Section surface="soft" id="patenschaften">
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src="/images/home/tierpatenschaft-kaninchen.png"
                            alt="Eine Person füttert ein braunes Schlappohrkaninchen mit Löwenzahn"
                            loading="lazy"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.copy}>
                            <Typography variant="eyebrow">Tierpatenschaften</Typography>
                            <Typography variant="h2" size="display">
                                Ein Tier unterstützen.<br />
                                <em>Ganz persönlich.</em>
                            </Typography>
                            <Typography component="p" variant="subtitle1" color="main">
                                Nach individueller Absprache bieten wir zusätzlich
                                Tierpatenschaften an.
                            </Typography>
                            <Typography variant="body1" color="muted">
                                Mit einer solchen Tierpatenschaft übernehmen Sie einen
                                Teil der Kosten für Futter, Pflege und tierärztliche
                                Versorgung eines bestimmten Tieres. Die Einzelheiten
                                stimmen wir persönlich mit Ihnen ab.
                            </Typography>
                            <Button href="mailto:info@helenenhof-tierschutz.de?subject=Anfrage%20zur%20Tierpatenschaft">
                                Patenschaft anfragen
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Section>
        </Page>
    );
}

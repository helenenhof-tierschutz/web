import Page from "./Page";
import Section from "../components/Section";
import Typography from "../components/Typography";

export default function DatenschutzPage() {
    return (
        <Page>
            <Section surface="soft" width="narrow" spacing="intro" textAlign="center">
                <Typography variant="eyebrow">Informationen</Typography>
                <Typography variant="h1" id="privacy-title">Datenschutzerklärung</Typography>
            </Section>
            <Section as="article" surface="none" width="narrow" spacing="reading">
                <Typography variant="body1">
                    Hier informieren wir Sie darüber, welche personenbezogenen Daten beim
                    Besuch dieser Website verarbeitet werden und welche Rechte Ihnen zustehen.
                </Typography>

                <Typography variant="h2">1. Verantwortlicher</Typography>
                <Typography variant="body1">
                    Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
                    Website ist:
                </Typography>
                <address>
                    Helenenhof – Tierschutzverein Nordeifel e.V.
                    <br />
                    In Steckenborn 35
                    <br />
                    52152 Simmerath
                    <br />
                    E-Mail: <a href="mailto:info@helenenhof-tierschutz.de">info@helenenhof-tierschutz.de</a>
                </address>

                <Typography variant="h2">2. Aufruf der Website und Server-Logdaten</Typography>
                <Typography variant="body1">
                    Beim Aufruf einer Website werden durch den Hosting-Anbieter technisch
                    erforderliche Verbindungsdaten verarbeitet. Dazu können insbesondere
                    IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
                    Referrer-URL, Browser- und Betriebssysteminformationen sowie der
                    Übertragungsstatus gehören. Diese Verarbeitung ist erforderlich, um die
                    Website auszuliefern und die Sicherheit sowie den stabilen Betrieb zu
                    gewährleisten.
                </Typography>
                <Typography variant="body1">
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
                    liegt im sicheren und zuverlässigen Betrieb der Website. Die Daten werden
                    nur so lange gespeichert, wie dies für diese Zwecke erforderlich ist;
                    maßgeblich sind dabei die technischen und vertraglichen Vorgaben des
                    Hosting-Anbieters.
                </Typography>

                <Typography variant="h2">3. Cookies und Reichweitenmessung</Typography>
                <Typography variant="body1">
                    Diese Website verwendet nach aktuellem Stand keine Analyse- oder
                    Werbedienste. Die Website selbst setzt keine Cookies zur Reichweitenmessung
                    oder zu Werbezwecken.
                </Typography>

                <Typography variant="h2">4. Kontaktaufnahme</Typography>
                <Typography variant="body1">
                    Wenn Sie die angegebene E-Mail-Adresse verwenden, verarbeiten wir Ihre
                    Nachricht und die darin enthaltenen Kontaktdaten, um Ihre Anfrage zu
                    beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; bei
                    vorvertraglichen oder vertraglichen Anliegen zusätzlich Art. 6 Abs. 1 lit.
                    b DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend
                    bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </Typography>

                <Typography variant="h2">5. Ihre Rechte</Typography>
                <Typography variant="body1">
                    Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft,
                    Berichtigung, Löschung, Einschränkung der Verarbeitung,
                    Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer Daten.
                    Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.
                    Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte
                    Kontaktadresse.
                </Typography>

                <Typography variant="h2">6. Widerspruch</Typography>
                <Typography variant="body1">
                    Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten,
                    können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                    Widerspruch einlegen. Wir verarbeiten die betreffenden Daten dann nicht
                    weiter, es sei denn, es liegen zwingende schutzwürdige Gründe vor oder die
                    Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen.
                </Typography>
            </Section>
        </Page>
    );
}

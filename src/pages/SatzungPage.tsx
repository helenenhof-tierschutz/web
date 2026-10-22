
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

export default function SatzungPage() {
    return (
        <Page>
            <Section surface="soft" width="narrow" spacing="intro" textAlign="center">
                <Typography variant="eyebrow">Informationen</Typography>
                <Typography variant="h1" id="impressum-title">Satzung</Typography>
            </Section>
            <Section as="article" surface="none" width="narrow" spacing="reading" contentClassName={styles.content}>
                <Typography variant="h2">
                    § 1 Name und Sitz
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Der Verein führt den Namen „Helenenhof – Tierschutzverein Nordeifel“.</li>
                        <li value="2">Er soll in das Vereinsregister eingetragen werden und führt nach der Eintragung den Zusatz „e.V.“.</li>
                        <li value="3">Der Verein hat seinen Sitz in 52152 Simmerath.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 2 Geschäftsjahr
                </Typography>
                <Typography component="div">
                    Das Geschäftsjahr ist das Kalenderjahr.
                </Typography>
                <Typography variant="h2">
                    § 3 Zweck des Vereins, Gemeinnützigkeit
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Zweck des Vereins ist die Förderung des Tierschutzes.</li>
                        <li value="2">Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der Abgabenordnung.</li>
                        <li value="3">Der Satzungszweck wird verwirklicht in der Unterstützung des Tierschutzhofes mit der Adresse In Steckenborn 35, 52152 Simmerath durch:
                            <ul>
                                <li>die Aufnahme, Pflege, Versorgung und artgerechte Unterbringung hilfsbedürftiger, ausgesetzter oder vernachlässigter Tiere,</li>
                                <li>Tierpatenschaften und sonstige finanzielle Fördermöglichkeiten zur Unterstützung der Tierschutzarbeit,</li>
                                <li>tierärztliche Versorgung, Kastrations -, Pflege - und Schutzmaßnahmen,</li>
                                <li>Zusammenarbeit mit Tierärzten, Behörden, anderen Tierschutzorganisationen sowie Pflegestellen,</li>
                                <li>Vermittlung von Tieren in geeignete und verantwortungsvolle Haltungen, soweit dies im Einzelfall dem Tierwohl entspricht,</li>
                                <li>Aufklärung der Öffentlichkeit über artgerechte Tierhaltung und Tierschutz.</li>
                            </ul>
                        </li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 4 Selbstlosigkeit
                </Typography>
                <Typography component="div">
                    Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.
                </Typography>
                <Typography variant="h2">
                    § 5 Mittelverwendung
                </Typography>
                <Typography component="div">
                    Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.
                </Typography>
                <Typography variant="h2">
                    § 6 Verbot von Vergünstigungen
                </Typography>
                <Typography component="div">
                    Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.
                </Typography>
                <Typography variant="h2">
                    § 7 Erwerb der Mitgliedschaft
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Vereinsmitglieder können natürliche oder juristische Personen werden.</li>
                        <li value="2">Der Aufnahmeantrag ist in Textform zu stellen.</li>
                        <li value="3">Über die Aufnahme entscheidet der Vorstand.</li>
                        <li value="4">Gegen die Ablehnung, die keiner Begründung bedarf, steht dem / der Bewerber/in die Berufung an die Mitgliederversammlung zu, welche dann endgültig entscheidet.</li>
                        <li value="5">Minderjährige benötigen die Zustimmung ihrer gesetzlichen Vertreter.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 8 Beendigung der Mitgliedschaft
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Die Mitgliedschaft endet durch Austritt, Ausschluss, Tod oder Auflösung der juristischen Person.</li>
                        <li value="2">Der Austritt erfolgt durch Erklärung in Textform gegenüber einem vertretungsberechtigten Vorstandsmitglied. Die Austrittserklärung in Textform muss mit einer Frist von einem Monat jeweils zum Ende des Geschäftsjahres gegenüber dem Vorstand erklärt werden.</li>
                        <li value="3">Ein Ausschluss kann nur aus wichtigem Grund erfolgen. Wichtige Gründe sind insbesondere ein die Vereinsziele schädigendes Verhalten, die Verletzung satzungsmäßiger Pflichten oder Beitragsrückstände von mindestens einem Jahr.</li>
                        <li value="4">Über den Ausschluss entscheidet der Vorstand. Gegen den Ausschluss steht dem Mitglied die Berufung an die Mitgliederversammlung zu, die schriftlich binnen eines Monats an den Vorstand zu richten ist. Die Mitgliederversammlung entscheidet im Rahmen des Vereins endgültig. Dem Mitglied bleibt die Überprüfung der Maßnahme durch Anrufung der ordentlichen Gerichte vorbehalten. Die Anrufung eines ordentlichen Gerichts hat aufschiebende Wirkung bis zur Rechtskraft der gerichtlichen Entscheidung.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 9 Beiträge
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Von den Mitgliedern werden Jahresbeiträge erhoben.</li>
                        <li value="2">Art, Höhe und Fälligkeit der Beiträge bestimmt die Mitgliederversammlung in einer Beitragsordnung.</li>
                        <li value="3">Der Vorstand kann in begründeten Einzelfällen Beiträge ganz oder teilweise erlassen oder stunden.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 10 Organe des Vereins
                </Typography>
                <Typography component="div">
                    Organe des Vereins sind:
                    <ul>
                        <li>die Mitgliederversammlung,</li>
                        <li>der Vorstand.</li>
                    </ul>
                    Weitere Vereinsorgane, Beiräte oder Arbeitsgruppen können durch Beschluss der Mitgliederversammlung oder durch eine Vereinsordnung geschaffen werden, soweit die Satzung nichts anderes bestimmt.
                </Typography>
                <Typography variant="h2">
                    § 11 Mitgliederversammlung
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Die Mitgliederversammlung ist das oberste Vereinsorgan.</li>
                        <li value="2">Sie ist insbesondere zuständig für:
                            <ul>
                                <li>die Wahl und Abberufung des Vorstands,</li>
                                <li>die Entgegennahme des Jahresberichts,</li>
                                <li>die Entlastung des Vorstands,</li>
                                <li>die Wahl der Kassenprüfer,</li>
                                <li>die Festsetzung von Beiträgen und deren Fälligkeit,</li>
                                <li>den Beschluss über Satzungsänderungen,</li>
                                <li>den Beschluss über die Auflösung des Vereins,</li>
                                <li>Entscheidungen über Aufnahme und Ausschluss von Mitgliedern in Berufungsfällen.</li>
                            </ul>
                        </li>
                        <li value="3">Einmal jährlich in jedem Geschäftsjahr findet eine ordentliche Mitgliederversammlung statt.</li>
                        <li value="4">Der Vorstand ist zur Einberufung einer außerordentlichen Mitgliederversammlung verpflichtet, wenn mindestens ein Drittel der Mitglieder dies schriftlich unter Angabe von Gründen verlangt.</li>
                        <li value="5">Die Mitgliederversammlung wird vom Vorstand unter Einhaltung einer Frist von zwei Wochen in Textform unter Angabe der Tagesordnung einberufen. Die Frist beginnt mit dem auf die Absendung des Einladungsschreibens folgenden Tag. Das Einladungsschreiben gilt als den Mitgliedern zugegangen, wenn es an die letzten dem Verein bekannt gegebenen Kontaktdaten gerichtet war.</li>
                        <li value="6">Die Tagesordnung ist zu ergänzen, wenn dies ein Mitglied in Textform beantragt. Die Ergänzung ist zu Beginn der Versammlung bekanntzumachen.</li>
                        <li value="7">Anträge über die Änderung der Satzung und über die Auflösung des Vereins, die nicht bereits mit der Einladung angekündigt wurden, können erst auf der nächsten Mitgliederversammlung beschlossen werden.</li>
                        <li value="8">Die Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.</li>
                        <li value="9">Die Mitgliederversammlung wird von einem Vorstandsmitglied geleitet. Zu Beginn der Mitgliederversammlung ist ein Schriftführer zu wählen.</li>
                        <li value="10">Jedes volljährige Mitglied hat eine Stimme. Das Stimmrecht kann nur persönlich oder für ein Mitglied unter Vorlage einer schriftlichen Vollmacht ausgeübt werden. Ein Mitglied kann höchstens ein anderes Mitglied aufgrund schriftlicher Vollmacht vertreten.</li>
                        <li value="11">Bei Abstimmungen entscheidet die einfache Mehrheit der abgegebenen Stimmen.</li>
                        <li value="12">Satzungsänderungen und die Auflösung des Vereins können nur mit einer Mehrheit von drei Vierteln der abgegebenen gültigen Stimmen beschlossen werden.</li>
                        <li value="13">Stimmenthaltungen und ungültige Stimmen bleiben außer Betracht.</li>
                        <li value="14">Über die Beschlüsse der Mitgliederversammlung ist ein Protokoll anzufertigen, das vom Versammlungsleiter und dem Schriftführer zu unterzeichnen ist.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 12 Vorstand
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Der Vorstand im Sinne des § 26 BGB besteht aus:
                            <ul>
                                <li>der oder dem Vorsitzenden,</li>
                                <li>der oder dem stellvertretenden Vorsitzenden,</li>
                                <li>der Schatzmeisterin oder dem Schatzmeister.</li>
                            </ul>
                        </li>
                        <li value="2">Der Verein wird gerichtlich und außergerichtlich durch zwei Vorstandsmitglieder gemeinschaftlich vertreten.</li>
                        <li value="3">Der Vorstand wird von der Mitgliederversammlung auf die Dauer von zwei Jahren gewählt.</li>
                        <li value="4">Nur Mitglieder des Vereins können Vorstandsmitglieder werden.</li>
                        <li value="5">Wiederwahl ist zulässig.</li>
                        <li value="6">Der Vorstand bleibt so lange im Amt, bis ein neuer Vorstand gewählt ist.</li>
                        <li value="7">Bei Beendigung der Mitgliedschaft im Verein endet auch das Amt als Vorstandsmitglied.</li>
                        <li value="8">Vorstandssitzungen werden von der oder dem Vorsitzenden, bei Verhinderung von der oder dem stellvertretenden Vorsitzenden, einberufen. Die Einberufung soll in Textform unter Einhaltung einer Frist von mindestens einer Woche erfolgen. In dringenden Fällen kann die Frist angemessen verkürzt werden.</li>
                        <li value="9">Der Vorstand ist beschlussfähig, wenn mindestens zwei seiner drei Mitglieder an der Vorstandssitzung teilnehmen.</li>
                        <li value="10">Der Vorstand fasst seine Beschlüsse mit einfacher Mehrheit der abgegebenen gültigen Stimmen. Jedes Vorstandsmitglied hat eine Stimme. Bei Stimmengleichheit gilt ein Antrag als abgelehnt.</li>
                        <li value="11">Die Sitzungen des Vorstands werden von der oder dem Vorsitzenden, bei Verhinderung von der oder dem stellvertretenden Vorsitzenden, geleitet.</li>
                        <li value="12">Über jede Vorstandssitzung ist ein Protokoll anzufertigen, das mindestens Ort und Zeit der Sitzung, die Namen der teilnehmenden Vorstandsmitglieder, die gefassten Beschlüsse und die Abstimmungsergebnisse enthält. Das Protokoll ist von der Sitzungsleitung und der protokollführenden Person zu unterzeichnen.</li>
                        <li value="13">Ein Vorstandsbeschluss kann auch außerhalb einer Sitzung in Textform gefasst werden, wenn alle Vorstandsmitglieder an der Beschlussfassung beteiligt werden und kein Vorstandsmitglied diesem Verfahren widerspricht.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 13 Aufgaben des Vorstands
                </Typography>
                <Typography component="div">
                    Der Vorstand führt die laufenden Geschäfte des Vereins. Zu seinen Aufgaben gehören insbesondere:
                    <ul>
                        <li>Umsetzung des Vereinszwecks,</li>
                        <li>Verwaltung des Vereinsvermögens,</li>
                        <li>ordnungsgemäße Buchführung und Dokumentation von Spenden,</li>
                        <li>Vorbereitung und Einberufung der Mitgliederversammlung,</li>
                        <li>Ausführung der Beschlüsse der Mitgliederversammlung,</li>
                        <li>Anfertigung des Jahresberichts,</li>
                        <li>Entscheidung über die Aufnahme und den Ausschluss von Mitgliedern.</li>
                    </ul>
                </Typography>
                <Typography variant="h2">
                    § 14 Kassenprüfung
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Die Mitgliederversammlung wählt für die Dauer von zwei Jahren zwei Kassenprüfer.</li>
                        <li value="2">Die Kassenprüfer dürfen nicht dem Vorstand angehören.</li>
                        <li value="3">Wiederwahl ist zulässig.</li>
                        <li value="4">Die Kassenprüfung erfolgt mindestens einmal jährlich. Über das Ergebnis ist der Mitgliederversammlung Bericht zu erstatten.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 15 Spenden
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Der Verein ist berechtigt, Spenden, Zuwendungen und sonstige Unterstützungsleistungen entgegenzunehmen.</li>
                        <li value="2">Spenden, die für einen bestimmten Zweck gegeben werden, sind nach Möglichkeit entsprechend dieser Zweckbestimmung zu verwenden.</li>
                        <li value="3">Die Ausstellung von Zuwendungsbestätigungen erfolgt nur, soweit die gesetzlichen und steuerlichen Voraussetzungen vorliegen.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 16 Ehrenamtlichkeit und Vergütungen
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Die Vereinsämter werden grundsätzlich ehrenamtlich ausgeübt.</li>
                        <li value="2">Die Mitgliederversammlung kann abweichend hiervon beschließen, dass für bestimmte Tätigkeiten im Rahmen der gesetzlichen Möglichkeiten angemessene Vergütungen oder Aufwandsentschädigungen gezahlt werden, soweit dies mit Gemeinnützigkeitsrecht und Haushaltslage vereinbar ist.</li>
                        <li value="3">Tatsächlich entstandene und nachgewiesene Auslagen können erstattet werden, soweit dies eine Finanzordnung vorsieht.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 17 Datenschutz
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Der Verein verarbeitet personenbezogene Daten seiner Mitglieder und Unterstützer nur, soweit dies zur Erfüllung des Satzungszwecks und zur Vereinsverwaltung erforderlich ist.</li>
                        <li value="2">Näheres kann in einer von der Mitgliederversammlung beschlossenen Datenschutzordnung geregelt werden.</li>
                    </ol>
                </Typography>
                <Typography variant="h2">
                    § 18 Auflösung des Vereins
                </Typography>
                <Typography component="div">
                    <ol>
                        <li value="1">Die Auflösung kann nur in einer eigens zu diesem Zweck mit einer Frist von einem Monat einzuberufenden außerordentlichen Mitgliederversammlung beschlossen werden.</li>
                        <li value="2">Für den Auflösungsbeschluss ist eine Mehrheit von drei Vierteln der abgegebenen gültigen Stimmen erforderlich.</li>
                        <li value="3">Bei Auflösung oder Aufhebung oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an eine juristische Person des öffentlichen Rechts oder eine andere steuerbegünstigte Körperschaft, die es ausschließlich und unmittelbar zur Förderung des Tierschutzes zu verwenden hat.</li>
                    </ol>
                </Typography>
            </Section>
        </Page >
    );
}

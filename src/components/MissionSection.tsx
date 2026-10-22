import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    heading: css`
        max-width: 670px;
        margin: 0 auto 56px;
        text-align: center;
        h2 { margin: 0; }
        @media (max-width: 760px) { margin-bottom: 36px; }
    `,
    missions: css`
        display: grid;
        grid-template-columns: 1fr;
        gap: 54px 36px;

        @media (min-width: 600px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 62px 44px;
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 66px 44px;
        }
    `,
    mission: css`
        padding: 0 14px;
        text-align: center;

        @media (min-width: 600px) {
            &:last-child {
                grid-column: 1 / -1;
                width: min(100%, 420px);
                justify-self: center;
            }
        }

        @media (min-width: 1200px) {
            grid-column: span 2;

            &:nth-child(4) { grid-column: 2 / span 2; }
            &:last-child {
                grid-column: 4 / span 2;
                width: auto;
            }
        }

        .mission-icon {
            display: block;
            width: 76px;
            height: 76px;
            margin: 0 auto 20px;
            object-fit: contain;
            filter: brightness(0) saturate(100%) invert(19%) sepia(19%) saturate(1388%) hue-rotate(99deg) brightness(92%) contrast(90%);
        }
        h3 { margin: 0 auto 16px; }
        p {
            max-width: 360px;
            margin: 0 auto 13px;
            line-height: 1.75;
        }
        p:last-child { margin-bottom: 0; }

        @media (max-width: 599px) {
            padding: 0;
            .mission-icon { width: 68px; height: 68px; }
        }
    `,
};

const missions = [
    {
        title: "Aufnahme und artgerechte Unterbringung",
        icon: "/images/icons/tierschutz-pfote-in-hand.png",
        paragraphs: [
            "Wir nehmen hilfsbedürftige, ausgesetzte oder vernachlässigte Tiere auf, pflegen und versorgen sie und bringen sie artgerecht unter.",
            "Nach Jahren der Vernachlässigung legen wir Wert darauf, den Tieren ordentliches, frisches Futter und ein dauerhaftes Heim zu bieten.",
        ],
    },
    {
        title: "Tierärztliche Versorgung",
        icon: "/images/icons/tiergesundheit-stethoskop-und-pfote.png",
        paragraphs: [
            "Tierärztliche Untersuchungen, Behandlungen, Impfungen, Medikamente und notwendige Pflegemaßnahmen gehören zu den wichtigsten, aber auch kostenintensivsten Teilen unserer Arbeit.",
            "Viele Tiere kommen in schlechtem Zustand zu uns und benötigen eine umfassende medizinische Versorgung.",
        ],
    },
    {
        title: "Zusammenarbeit und Vermittlung im Netzwerk",
        icon: "/images/icons/partnerschaft-haendedruck-mit-haken.png",
        paragraphs: [
            "Wir bauen derzeit die Zusammenarbeit mit Tierärzten, anderen Tierschutzorganisationen und Pflegestellen aus.",
            "Tiere vermitteln wir grundsätzlich auch in geeignete und verantwortungsvolle Haltungen – aber nur dann, wenn es im Einzelfall dem Tierwohl entspricht.",
        ],
    },
    {
        title: "Tierpatenschaften und Förderung",
        icon: "/images/icons/spenden-herz-und-geldbeutel.png",
        paragraphs: [
            "Über Unterstützung für die Tiere freuen wir uns. Tierpatenschaften und andere finanzielle Fördermöglichkeiten machen die Versorgung planbar und dauerhaft möglich.",
        ],
    },
    {
        title: "Aufklärung der Öffentlichkeit",
        icon: "/images/icons/wissen-offenes-buch-mit-sonne.png",
        paragraphs: [
            "Wir informieren über artgerechte Tierhaltung und Tierschutz, machen die Bedürfnisse der Tiere sichtbar und bemühen uns, Wissen über einen anständigen Umgang mit Lebewesen zu vermitteln.",
            "Besuche auf dem Hof sind derzeit noch nicht möglich. Für später sind Hoffeste und Nachmittage mit Kindern, Senioren oder anderen Interessierten geplant. Dann möchten wir vor Ort zeigen, wie bereichernd der Kontakt zu Tieren sein kann.",
            "Gemäß dem Motto – „leise, langsam, liebevoll“.",
        ],
    },
];

export default function MissionSection() {
    return (
        <Section surface="soft" id="unsere-arbeit">
            <div className={styles.heading}>
                <Typography variant="eyebrow">Was wir tun</Typography>
                <Typography variant="h2" size="display">
                    Mit Herz und Verstand.{" "}<br /><em>Für jedes Tier.</em>
                </Typography>
            </div>
            <div className={styles.missions}>
                {missions.map((mission) => (
                    <article className={styles.mission} key={mission.title}>
                        <img className="mission-icon" src={mission.icon} alt="" />
                        <Typography variant="h3">{mission.title}</Typography>
                        {mission.paragraphs.map((paragraph) => (
                            <Typography variant="body2" color="muted" key={paragraph}>{paragraph}</Typography>
                        ))}
                    </article>
                ))}
            </div>
        </Section>
    );
}

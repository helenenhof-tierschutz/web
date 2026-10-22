import { css } from "@emotion/css";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Section from "../components/Section";
import Typography from "../components/Typography";
import Page from "./Page";

const styles = {
    intro: css`max-width: 820px; p { color: var(--color-text-light); line-height: 1.8; }`,
    copy: css`max-width: 620px; p { color: var(--color-text-light); line-height: 1.8; }`,
    gallery: css`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 22px;
        margin-top: 42px;
        @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (max-width: 560px) { grid-template-columns: 1fr; }
    `,
    animal: css`
        margin: 0;
        background: var(--color-cream);
        img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
        figcaption { padding: 18px 20px 22px; }
        h3 { margin: 0; color: var(--color-main); font-family: var(--font-serif); font-size: 1.35rem; font-weight: 500; line-height: 1.35; }
        p { margin: 10px 0 0; color: var(--color-text-light); font-size: 0.9rem; line-height: 1.7; }
    `,
    rabbitPhoto: css`
        width: 100%;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        img { height: 100%; aspect-ratio: auto; }
    `,
    note: css`max-width: 680px; margin-top: 22px; color: var(--color-text-light); font-size: 0.85rem; line-height: 1.7;`,
};

const cats = [
    {
        name: "Miro",
        headline: "Der mutige Mäusejäger Miro",
        image: "/images/animals/orange-getigerte-katze.webp",
        alt: "Rötliche Katze auf einem dunklen Netz",
        description: "Er wuchs an einer Tankstelle auf, bevor er zu uns kam.",
    },
    {
        name: "Stella",
        headline: "Die sanfte Schmusekatze Stella",
        image: "/images/home/graue-katze.webp",
        alt: "Grau getigerte Katze vor einem Gehege",
    },
    {
        name: "Minou",
        headline: "Die muntere Mieze Minou",
        image: "/images/home/orange-weisse-katze.webp",
        alt: "Orange-weiße Katze im Gras",
    },
    {
        name: "Milena",
        headline: "Die muckelige Mini-Milena",
        image: "/images/home/graue-katze.webp",
        alt: "Grau getigerte Katze vor einem Gehege",
    },
    {
        name: "Minzini",
        headline: "Die majestätische Madame Minzini",
        image: "/images/home/orange-weisse-katze.webp",
        alt: "Orange-weiße Katze im Gras",
    },
];

const rabbits = [
    {
        name: "Blacky",
        headline: "Der bestimmende Boss Blacky",
        image: "/images/home/kaninchen-auf-wiese.webp",
        imagePosition: "right center",
        imageZoom: 1.65,
        imageOrigin: "right center",
        alt: "Schwarzes Schlappohrkaninchen rechts auf einer Wiese",
        description: "Blacky kam von Eva zu uns. Der schwarze Schlappohr-Rammler gehört zu den bestimmenden Tieren der Gruppe. Alfi ist allerdings noch dominanter als er.",
    },
    {
        name: "Alfi",
        headline: "Der allmächtige Anführer Alfi",
        image: "/images/home/kaninchen-auf-wiese.webp",
        imagePosition: "left center",
        imageZoom: 1.65,
        imageOrigin: "left center",
        alt: "Weißes Schlappohrkaninchen links auf einer Wiese",
        description: "Alfi ist der weiße Schlappohr-Rammler der Gruppe. Er ist besonders dominant, sogar noch dominanter als Blacky. Er hört nur eingeschränkt; ob er vollständig taub ist, wissen wir nicht sicher.",
    },
    {
        name: "Hasi",
        headline: "Die herzallerliebste Hängeohr-Hasi",
        image: "/images/home/kaninchen-vor-stall.webp",
        imagePosition: "center 57%",
        imageZoom: 1,
        imageOrigin: "center center",
        alt: "Braunes Schlappohrkaninchen mit dunklen Fellpartien vor einem Stall",
        description: "Hasi kam von Eva zu uns. Ihr Fell ist braun mit schwarzen Partien, und ihre Ohren hängen seitlich herunter.",
    },
    {
        name: "Trixi",
        headline: "Die tapfere Tieroma Trixi",
        image: "/images/animals/kaninchen-am-futternapf.webp",
        imagePosition: "right center",
        imageZoom: 1.65,
        imageOrigin: "right center",
        alt: "Schwarzes Kaninchen mit aufrechten Ohren rechts am Futternapf",
        description: "Trixi ist mit deutlichem Abstand das älteste Kaninchen unserer Gruppe. Sie hat schwarzes Fell und aufrecht stehende Ohren.",
    },
    {
        name: "Kuki",
        headline: "Die königliche Kommandantin Kuki",
        image: "/images/animals/kaninchen-am-futternapf.webp",
        imagePosition: "left center",
        imageZoom: 1.65,
        imageOrigin: "left center",
        alt: "Kaninchen mit schwarzem Rücken und weißer Unterseite links am Futternapf",
        description: "Kuki hat einen schwarzen Rücken, eine weiße Unterseite und aufrecht stehende Ohren. Sie gehört zu den dominanten Tieren und nimmt eine hohe Position in der Gruppe ein.",
    },
    {
        name: "Susi",
        headline: "Die sanfte, schüchterne Susi",
        image: "/images/animals/schwarzes-kaninchen-auf-stall.webp",
        imagePosition: "center 34%",
        imageZoom: 1,
        imageOrigin: "center center",
        alt: "Kleines schwarzes Kaninchen mit weißen Stellen und aufrechten Ohren auf einem Stalldach",
        description: "Susi ist sehr klein, überwiegend schwarz und hat ein paar weiße Fellstellen sowie aufrecht stehende Ohren. In der Rangordnung der Gruppe steht sie ganz unten.",
    },
];

export default function AnimalsPage() {
    return (
        <Page>
            <Section surface="soft">
                <div className={styles.intro}>
                    <Typography variant="eyebrow">Unsere Schützlinge</Typography>
                    <Typography variant="h1" size="display">
                        Jedes Tier hat eine Geschichte.<br />
                        <em>Und verdient ein gutes Leben.</em>
                    </Typography>
                    <Typography component="p" variant="subtitle1" color="main">
                        Wir sind ein kleiner Verein, dem das Wohl der Tiere am Herzen liegt.
                    </Typography>
                    <Typography variant="body1">
                        Zurzeit beherbergen wir Kaninchen und Katzen, die vorrangig durch
                        private Vermittlung zu uns gekommen sind, weil sie dringend ein
                        gutes, artgerechtes Zuhause benötigt haben. Darunter klapperdürre
                        Kätzchen aus einem Animal-Hoarding-Messiehaus, ein auf einer
                        Müllhalde ausgesetztes Mutter-Tochter-Katzen-Duo und Kaninchen,
                        eingepfercht auf ihren Exkrementen in einem Drahtverhau,
                        ausgemergelt und jahrelang isoliert.
                    </Typography>
                </div>
            </Section>

            <Section surface="none" id="katzen">
                <div className={styles.copy}>
                    <Typography variant="eyebrow">Unsere Katzen</Typography>
                    <Typography variant="h2" size="display">
                        Ein sicheres Zuhause.<br />
                        <em>Für unsere Samtpfoten.</em>
                    </Typography>
                    <Typography variant="body1">
                        Unsere Katzen stammen meist aus schwierigen Vermittlungs- und
                        Notlagen. Einige Tiere waren stark unterversorgt, andere wurden
                        ausgesetzt und alle brauchten nach belastenden Erfahrungen einen
                        geschützten Neustart.
                    </Typography>
                    <Typography variant="body1">
                        Die Katzen tollen nun durch Garten und über Naturschutzwiesen.
                        Miro, Stella, Minou, Milena und Minzini gehören zu unserer
                        Katzengruppe.
                    </Typography>
                </div>
                <div className={styles.gallery}>
                    {cats.map((cat) => (
                        <figure className={styles.animal} key={cat.name}>
                            <img src={cat.image} alt={cat.alt} loading="lazy" />
                            <figcaption>
                                <h3>{cat.headline ?? cat.name}</h3>
                                {cat.description && <p>{cat.description}</p>}
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <p className={styles.note}>
                    Die Zuordnung der Fotos zu den einzelnen Katzen ist vorläufig.
                    Weitere persönliche Geschichten ergänzen wir nach der Abstimmung mit dem Verein.
                </p>
                <Button href="/unterstuetzen#patenschaften">Tierpatenschaft anfragen</Button>
            </Section>

            <Section surface="soft" id="kaninchen">
                <Grid container spacing={{ xs: 2, md: 6 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="eyebrow">Unsere Kaninchen</Typography>
                        <Typography variant="h2" size="display">
                            Endlich Platz zum Leben.<br />
                            <em>Und Gras unter den Pfoten.</em>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.copy}>
                            <Typography component="p" variant="subtitle1" color="main">
                                Unsere Kaninchen haben oft zum ersten Mal in ihrem Leben
                                ausreichend Platz und frische Luft.
                            </Typography>
                            <Typography variant="body1">
                                Einige Tiere kamen aus Haltungen, in denen sie über lange
                                Zeit isoliert und unzureichend versorgt waren. Heute
                                haben sie das erste Mal Gras unter den Pfoten und leben
                                in einer harmonischen Großgruppe in einem weitläufigen
                                Außengehege.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <div className={styles.gallery}>
                    {rabbits.map((rabbit) => (
                        <figure className={styles.animal} key={rabbit.name}>
                            <div className={styles.rabbitPhoto}>
                                <img
                                    src={rabbit.image}
                                    alt={rabbit.alt}
                                    loading="lazy"
                                    style={{
                                        objectPosition: rabbit.imagePosition,
                                        transform: `scale(${rabbit.imageZoom})`,
                                        transformOrigin: rabbit.imageOrigin,
                                    }}
                                />
                            </div>
                            <figcaption>
                                <h3>{rabbit.headline}</h3>
                                <p>{rabbit.description}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <p className={styles.note}>
                    Die Zuordnung der Fotos zu den einzelnen Kaninchen ist anhand der sichtbaren Merkmale vorläufig und kann noch korrigiert werden.
                </p>
                <Button href="/unterstuetzen#patenschaften">Tierpatenschaft anfragen</Button>
            </Section>

            <Section surface="none">
                <div className={styles.copy}>
                    <Typography variant="eyebrow">Ein Blick in die Zukunft</Typography>
                    <Typography variant="h2" size="display">
                        Platz für Esel.<br />
                        <em>Wenn die Zeit reif ist.</em>
                    </Typography>
                    <Typography variant="body1">
                        Mit dem Ausbau des Hofes möchten wir künftig auch Esel aus
                        Notlagen aufnehmen. Dafür wird ein Stallgebäude erweitert;
                        Weidefläche steht zur Verfügung.
                    </Typography>
                    <Typography variant="body1">
                        Die Aufnahme weiterer Tiere erfolgt schrittweise,
                        verantwortungsvoll und nur dann, wenn Versorgung und Platz bis
                        zum Lebensende gewährleistet sind.
                    </Typography>
                    <Button href="/helenenhof">Mehr über den Hof</Button>
                </div>
            </Section>
        </Page>
    );
}

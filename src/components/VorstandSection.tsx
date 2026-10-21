import { css } from "@emotion/css";
import Box from "./Box";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    heading: css`
        margin-bottom: 42px;
        text-align: center;
        h2 { margin: 0; }
        @media (max-width: 640px) { margin-bottom: 30px; }
    `,
    memberInfo: css`
        padding-top: 18px;
        h3 { margin: 0 0 6px; font-size: 1.3rem; line-height: 1.3; }
        p { margin: 0; color: var(--color-text-light); font-size: 0.9rem; line-height: 1.6; }
        .memberDescription { margin-top: 12px; }
    `,
};

const vorstandMembers = [
    {
        name: "Ursula Kals",
        role: "Vorsitzende",
        description:
            "Als leidenschaftliche Tierfreundin hat Ursula Kals den Helenenhof ins Leben gerufen. Mit viel Herzblut setzt sie sich dafür ein, Tieren in Not ein sicheres Zuhause zu geben.",
        image: "/images/ursula-kals.webp",
    },
    {
        name: "Claus M. Wolf",
        role: "Stellvertretender Vorsitzender",
        description:
            "Claus Wolf ist Katzenliebhaber durch und durch. In seinem Zuhause im schönen Eilendorf dreht sich vieles um seine geliebten Vierbeiner.",
        image: "/images/claus-wolf.jpg",
    },
    {
        name: "Constantin Kals",
        role: "Schatzmeister",
        image: "/images/constantin-kals.jpg",
        description:
            "Constantin Kals kümmert sich um die Finanzen und die Organisation im Hintergrund. Bei Fragen zu Spenden und finanzieller Unterstützung ist er der richtige Ansprechpartner.",
    },
];

export default function VorstandSection() {
    return (
        <Section surface="none">
            <header className={styles.heading}>
                <Typography variant="eyebrow">Helenenhof</Typography>
                <Typography variant="h2" id="vorstand-title">Der Vorstand</Typography>
            </header>

            <Grid container spacing={3}>
                {vorstandMembers.map((member) => (
                    <Grid
                        as="article"
                        size={{ xs: 12, md: 4 }}
                        key={member.name}
                    >
                        <Box
                            as="img"
                            sx={{
                                width: "100%",
                                aspectRatio: { xs: "4 / 3", sm: "4 / 5" },
                                objectFit: "cover",
                                objectPosition: { xs: "center 35%", sm: "center 28%" },
                                backgroundColor: "var(--color-cream-dark)",
                            }}
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                        />
                        <div className={styles.memberInfo}>
                            <Typography variant="h3">{member.name}</Typography>
                            <Typography variant="body1">{member.role}</Typography>
                            <Typography variant="body1">{member.description}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}
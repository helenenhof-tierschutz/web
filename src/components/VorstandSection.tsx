import { css } from "@emotion/css";
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
        height: 100%;
        padding: clamp(24px, 3vw, 36px);
        background: var(--color-cream-dark);
        h3 { margin: 0 0 6px; font-size: 1.3rem; line-height: 1.3; }
        p { margin: 0; color: var(--color-text-light); font-size: 0.9rem; line-height: 1.6; }
        p:last-child { margin-top: 12px; }
    `,
};

const vorstandMembers = [
    {
        name: "Ursula Kals",
        role: "Vorsitzende",
        description:
            "Als leidenschaftliche Tierfreundin hat Ursula Kals den Helenenhof ins Leben gerufen. Mit viel Herzblut setzt sie sich dafür ein, Tieren in Not ein sicheres Zuhause zu geben.",
    },
    {
        name: "Claus M. Wolf",
        role: "Stellvertretender Vorsitzender",
        description:
            "Claus Wolf ist Katzenliebhaber durch und durch. In seinem Zuhause im schönen Eilendorf dreht sich vieles um seine geliebten Vierbeiner.",
    },
    {
        name: "Constantin Kals",
        role: "Schatzmeister",
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

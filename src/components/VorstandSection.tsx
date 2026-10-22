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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        padding: clamp(24px, 3vw, 36px);
        background: var(--color-cream-dark);
        text-align: center;
        h3 { margin: 0 0 6px; font-size: 1.3rem; line-height: 1.3; }
        p { margin: 0; color: var(--color-text-light); font-size: 0.9rem; line-height: 1.6; }
    `,
    portraitCrop: css`
        width: 128px;
        height: 128px;
        margin-bottom: 20px;
        overflow: hidden;
        border-radius: 50%;
    `,
    portrait: css`
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 30%;
    `,
};

const vorstandMembers = [
    {
        name: "Ursula Kals",
        role: "Vorsitzende",
    },
    {
        name: "Claus M. Wolf",
        role: "Stellvertretender Vorsitzender",
        image: "/images/team/claus-michael-wolf.jpg",
    },
    {
        name: "Constantin Kals",
        role: "Schatzmeister",
        image: "/images/team/constantin-kals.webp",
        imageScale: 1.25,
        imageTransformOrigin: "left 30%",
    },
];

export default function VorstandSection() {
    return (
        <Section surface="soft">
            <header className={styles.heading}>
                <Typography variant="eyebrow">Unser Team</Typography>
                <Typography variant="h2" size="display" id="vorstand-title">
                    Menschen, die sich kümmern.<br />
                    <em>Mit Herz und Verantwortung.</em>
                </Typography>
                <Typography variant="body1" color="muted">
                    Der gewählte Vorstand besteht derzeit aus:
                </Typography>
            </header>

            <Grid container spacing={3}>
                {vorstandMembers.map((member) => (
                    <Grid
                        as="article"
                        size={{ xs: 12, md: 4 }}
                        key={member.name}
                    >
                        <div className={styles.memberInfo}>
                            {member.image && (
                                <div className={styles.portraitCrop}>
                                    <img
                                        className={styles.portrait}
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        style={member.imageScale ? {
                                            transform: `scale(${member.imageScale})`,
                                            transformOrigin: member.imageTransformOrigin,
                                        } : undefined}
                                    />
                                </div>
                            )}
                            <Typography variant="h3">{member.name}</Typography>
                            <Typography variant="body1">{member.role}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

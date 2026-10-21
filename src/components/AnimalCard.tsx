import type { Animal } from "../data/animals";
import { css } from "@emotion/css";
import Box from "./Box";
import Card from "./Card";
import Typography from "./Typography";

const styles = {
    card: css`overflow: hidden; &:hover img { transform: scale(1.04); }`,
    imageWrapper: css`
        position: relative;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        background: var(--color-cream);
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 250ms ease;
        }
        @media (prefers-reduced-motion: reduce) {
            img { transition-duration: 0.01ms; }
        }
    `,
    content: css`
        padding: 24px;
        h2 {
            margin-top: 0;
            margin-bottom: 12px;
        }
        p {
            margin-top: 0;
            margin-bottom: 0;
            color: var(--color-text-light);
            font-size: 0.88rem;
            line-height: 1.8;
        }
        @media (max-width: 520px) { padding: 20px; }
    `,
};

type Props = {
    animal: Animal;
};

export default function AnimalCard({ animal }: Props) {
    return (
        <Card className={styles.card}>
            <Box className={styles.imageWrapper}>
                <img
                    src={animal.image}
                    alt={animal.name}
                    loading="lazy"
                />
            </Box>

            <Box className={styles.content}>
                <Typography variant="eyebrow">{animal.species}</Typography>
                <Typography variant="h2">{animal.name}</Typography>
                <Typography variant="body1">{animal.description}</Typography>
            </Box>
        </Card>
    );
}

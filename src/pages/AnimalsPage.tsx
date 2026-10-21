import { useState } from "react";
import Page from "./Page";
import AnimalCard from "../components/AnimalCard";
import Typography from "../components/Typography";
import Grid from "../components/Grid";
import Section from "../components/Section";
import { animals } from "../data/animals";
import { css } from "@emotion/css";

const styles = {
    list: css`min-height: 400px;`,
    introBody: css`max-width: 600px; margin: 0 auto 18px; line-height: 1.9;`,
    filters: css`display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 42px; @media (max-width: 520px) { margin-bottom: 30px; }`,
    filterButton: css`
        padding: 11px 20px;
        border: 1px solid var(--color-border-muted);
        border-radius: 30px;
        background: transparent;
        color: var(--color-main);
        font: inherit;
        font-size: 0.9rem;
        cursor: pointer;
        transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
        &:hover, &[aria-pressed="true"] { border-color: var(--color-main); background: var(--color-main); color: var(--color-on-main); }
        &:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 4px; }
        @media (max-width: 520px) { padding: 10px 17px; }
        @media (prefers-reduced-motion: reduce) { transition-duration: 0.01ms; }
    `,
    emptyState: css`padding: 40px 0; color: var(--color-text-light); text-align: center; line-height: 1.8;`,
};

type Filter = "Alle" | "Hund" | "Katze" | "Kaninchen" | "Esel";

const filters: Filter[] = [
    "Alle",
    "Hund",
    "Katze",
    "Kaninchen",
    "Esel",
];

export default function AnimalsPage() {
    const [filter, setFilter] = useState<Filter>("Alle");

    const visibleAnimals = animals.filter(
        (animal) => filter === "Alle" || animal.species === filter,
    );

    return (
        <Page>
            <Section surface="soft" spacing="intro" textAlign="center">
                <Typography variant="eyebrow">
                    Lernen Sie sie kennen
                </Typography>

                <Typography variant="h1">
                    Unsere <em>Schützlinge.</em>
                </Typography>

                <Typography variant="body1" align="center" color="muted" className={styles.introBody}>
                    Jedes Tier hat seine eigene Geschichte.
                    Hier möchten wir Ihnen die Tiere vorstellen,
                    für die wir uns einsetzen.
                </Typography>
            </Section>

                <Section surface="none" className={styles.list}>
                <div
                    className={styles.filters}
                    role="group"
                >
                    {filters.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={styles.filterButton}
                            onClick={() => setFilter(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {visibleAnimals.length > 0 ? (
                    <Grid container spacing={3}>
                        {visibleAnimals.map((animal) => (
                            <Grid key={animal.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                <AnimalCard animal={animal} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography variant="body1" className={styles.emptyState} role="status">
                        Aktuell sind in dieser Kategorie keine Profile eingetragen.
                    </Typography>
                )}
            </Section>
        </Page>
    );
}

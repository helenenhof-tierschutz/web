import { css } from "@emotion/css";
import Button from "./Button";
import Grid from "./Grid";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    copy: css`
        max-width: 570px;
        p { color: var(--color-text-light); line-height: 1.8; }
        h2 { margin-bottom: 30px; }
    `,
    lead: css`
        color: var(--color-main) !important;
        font-family: var(--font-serif);
        font-size: 1.35rem;
        line-height: 1.65 !important;
    `,
    gallery: css`
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        grid-template-rows: repeat(2, minmax(0, 220px));
        gap: 12px;
        img { width: 100%; height: 100%; object-fit: cover; }
        img:first-child { grid-row: span 2; object-position: 50% 55%; }
        img:nth-child(2) { object-position: 50% 37%; }
        img:nth-child(3) { object-position: 50% 45%; }
        @media (max-width: 760px) {
            grid-template-rows: repeat(2, minmax(0, 170px));
        }
        @media (max-width: 430px) {
            grid-template-rows: repeat(2, minmax(0, 130px));
        }
    `,
};

export default function AnimalsSection() {
    return (
        <Section surface="soft" id="unsere-schuetzlinge">
            <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <div className={styles.gallery}>
                        <img src="/images/home/kaninchen-auf-wiese.webp" alt="Drei Kaninchen sitzen zusammen auf einer grünen Wiese" loading="lazy" />
                        <img src="/images/home/graue-katze.webp" alt="Grau getigerte Katze sitzt vor einem Gehege" loading="lazy" />
                        <img src="/images/home/orange-weisse-katze.webp" alt="Orange-weiße Katze sitzt im Gras vor violetten Blüten" loading="lazy" />
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <div className={styles.copy}>
                        <Typography variant="eyebrow">Unsere Schützlinge</Typography>
                        <Typography variant="h2" size="display">
                            Schwere Schicksale.{" "}<br /><em>Ein neues Zuhause.</em>
                        </Typography>
                        <Typography variant="body1" className={styles.lead}>
                            Zu ihnen gehören klapperdürre Kätzchen aus einem Animal-Hoarding-Messiehaus oder ein Mutter-Tochter-Katzen-Duo, ausgesetzt auf einer Müllhalde, Kaninchen, eingepfercht auf ihren Exkrementen in einem Drahtverhau, ausgemergelt und jahrelang isoliert.
                        </Typography>
                        <Typography variant="body1">
                            Die Katzen tollen nun durch Garten und über Naturschutzwiesen, die Kaninchen haben das erste Mal Gras unter den Pfoten und leben in einer harmonischen Großgruppe in einem weitläufigen Außengehege.
                        </Typography>
                        <Button href="/unsere-schuetzlinge">Unsere Schützlinge ansehen</Button>
                    </div>
                </Grid>
            </Grid>
        </Section>
    );
}

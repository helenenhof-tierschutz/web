import Button from "./Button";
import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
  hero: css`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 650px;
    overflow: hidden;
    isolation: isolate;
    @media (max-width: 760px) {
      min-height: min(720px, calc(100svh - var(--header-height)));
    }
  `,
  image: css`
    position: absolute;
    z-index: -2;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 52%;
  `,
  overlay: css`
    position: absolute;
    z-index: -1;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
      color-mix(in srgb, var(--palette-forest-deep) 94%, transparent) 0%,
      color-mix(in srgb, var(--palette-forest-deep) 82%, transparent) 43%,
      color-mix(in srgb, var(--palette-forest-deep) 10%, transparent) 100%);
    @media (max-width: 760px) {
      background: linear-gradient(90deg,
        color-mix(in srgb, var(--palette-forest-deep) 88%, transparent),
        color-mix(in srgb, var(--palette-forest-deep) 53%, transparent));
    }
  `,
  content: css`
    padding-block: 100px 115px;
    @media (max-width: 760px) { padding-block: 76px 90px; }
  `,
  title: css`
    max-width: 810px;
    margin-bottom: 24px;
  `,
  description: css`
    max-width: 610px;
    margin-bottom: 20px;
    color: var(--color-cream-dark);
    font-size: 1rem;
    line-height: 1.7;
    @media (max-width: 760px) { font-size: 0.94rem; }
  `,
  lead: css`
    max-width: 610px;
    color: var(--color-white);
    font-family: var(--font-serif);
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    line-height: 1.55;
  `,
  actions: css`
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    @media (max-width: 760px) {
      align-items: stretch;
      flex-direction: column;
      max-width: 360px;
      & > a { justify-content: space-between; }
    }
  `,
};

export default function Hero() {
  return (
    <Section surface="strong" width="full" spacing="none" className={styles.hero}>
      <img
        className={styles.image}
        src="/images/home/kaninchen-beim-fressen.webp"
        alt="Mehrere Kaninchen fressen gemeinsam Gemüse von einem Teller"
        fetchPriority="high"
      />

      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <Typography variant="eyebrow">
          Willkommen beim Helenenhof
        </Typography>

        <Typography variant="h1" size="display" className={styles.title}>
          Tierschutz, der{" "}
          <br />
          <em>vor Ort ankommt.</em>
        </Typography>

        <Typography variant="body1" className={styles.lead}>
          Gern möchten wir uns Ihnen und Euch kurz vorstellen.
        </Typography>

        <Typography variant="body1" className={styles.description}>
          Wir sind ein kleiner Verein, dem das Wohl der Tiere am Herzen liegt. Klein sind wir im wortwörtlichsten Sinn: Denn zur Zeit beherbergen wir Kaninchen und Katzen, die vorrangig durch private Vermittlung zu uns gekommen sind, weil sie dringend ein gutes, artgerechtes Zuhause benötigt haben.
        </Typography>

        <div className={styles.actions}>
          <Button href="#unsere-schuetzlinge">
            Unsere Schützlinge kennenlernen
          </Button>
        </div>
      </div>

    </Section>
  );
}

import Button from "./Button";
import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
  hero: css`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 630px;
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
    object-position: center 48%;
  `,
  overlay: css`
    position: absolute;
    z-index: -1;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
      color-mix(in srgb, var(--palette-forest-deep) 90%, transparent) 0%,
      color-mix(in srgb, var(--palette-forest-deep) 72%, transparent) 44%,
      color-mix(in srgb, var(--palette-forest-deep) 14%, transparent) 100%);
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
    max-width: 520px;
    margin-bottom: 32px;
    color: var(--color-cream-dark);
    font-size: 1rem;
    line-height: 1.85;
    @media (max-width: 760px) { font-size: 0.94rem; }
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
        src="/images/8244ED9C-F66E-4908-BE66-2032255CF58A.jpeg"
        alt="Der Helenenhof"
        fetchPriority="high"
      />

      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <Typography variant="eyebrow">
          Tierschutz in der Nordeifel
        </Typography>

        <Typography variant="h1" size="display" className={styles.title}>
          Jedes Tier verdient
          <br />
          ein <em>sicheres Zuhause.</em>
        </Typography>

        <Typography variant="body1" className={styles.description}>
          Wir geben Tieren aus schwierigen Verhältnissen eine neue Chance – mit Zeit, Fürsorge und einem Leben, das ihren Bedürfnissen gerecht wird.
        </Typography>

        <div className={styles.actions}>
          <Button href="#unsere-arbeit">
            Unsere Arbeit kennenlernen
          </Button>

          <Button href="#unterstuetzen" variant="light">
            Wie Sie helfen können
          </Button>
        </div>
      </div>

    </Section>
  );
}

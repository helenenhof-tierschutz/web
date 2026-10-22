import Logo from "./Logo";
import { css } from "@emotion/css";
import Typography from "./Typography";

const styles = {
    footer: css`
        padding-top: 70px;
        background: var(--color-cream-dark);
    `,
    main: css`
        display: grid;
        grid-template-columns: 1.2fr 1fr 0.6fr;
        gap: 50px;
        padding-bottom: 55px;
        @media (max-width: 760px) {
            grid-template-columns: 1fr 1fr;
            gap: 35px 25px;
        }
        @media (max-width: 400px) {
            grid-template-columns: 1fr;
        }
    `,
    brand: css`
        & > p {
            margin-top: 22px;
            color: var(--color-text-light);
            font-family: var(--font-serif);
            font-size: 1.15rem;
            line-height: 1.8;
        }
        @media (max-width: 760px) {
            grid-column: 1 / -1;
        }
        @media (max-width: 400px) {
            grid-column: auto;
        }
    `,
    contact: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        p, a {
            color: var(--color-text-light);
            font-size: 0.84rem;
            line-height: 1.9;
        }
        p { margin: 0; }
        a { transition: color 160ms ease; }
        a:hover { color: var(--color-accent); }
        a:focus-visible {
            outline: 3px solid var(--color-accent);
            outline-offset: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
            a { transition-duration: 0.01ms; }
        }
    `,
    links: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        a {
            color: var(--color-text-light);
            font-size: 0.84rem;
            line-height: 1.9;
            transition: color 160ms ease;
        }
        a:hover { color: var(--color-accent); }
        a:focus-visible {
            outline: 3px solid var(--color-accent);
            outline-offset: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
            a { transition-duration: 0.01ms; }
        }
    `,
    bottom: css`
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding-block: 22px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-light);
        font-size: 0.73rem;
        a {
            flex-shrink: 0;
            transition: color 160ms ease;
        }
        a:hover { color: var(--color-accent); }
        a:focus-visible {
            outline: 3px solid var(--color-accent);
            outline-offset: 4px;
        }
        @media (max-width: 760px) {
            flex-direction: column;
            line-height: 1.7;
        }
        @media (prefers-reduced-motion: reduce) {
            a { transition-duration: 0.01ms; }
        }
    `,
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.brand}>
                        <Logo />

                        <Typography variant="body1">Leise. Langsam. Liebevoll.</Typography>
                    </div>

                    <div className={styles.contact}>
                        <Typography variant="eyebrow">Kontakt</Typography>

                        <Typography variant="body1">
                            Helenenhof – Tierschutzverein Nordeifel e.V.
                            <br />
                            In Steckenborn 35
                            <br />
                            52152 Simmerath
                        </Typography>

                        <a href="mailto:info@helenenhof-tierschutz.de">
                            info@helenenhof-tierschutz.de
                        </a>
                    </div>

                    <nav className={styles.links}>
                        <Typography variant="eyebrow">Informationen</Typography>
                        <a href="/kontakt">Kontakt</a>
                        <a href="/satzung">Satzung</a>
                        <a href="/impressum">Impressum</a>
                        <a href="/datenschutz">Datenschutz</a>
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <span>
                        © {new Date().getFullYear()} Helenenhof –
                        Tierschutzverein Nordeifel e.V.
                    </span>

                    <a
                        href="#top"
                        onClick={(event) => {
                            event.preventDefault();
                            window.scrollTo({ top: 0, behavior: "auto" });
                        }}
                    >
                        Zurück nach oben ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

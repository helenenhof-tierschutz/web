import { useState } from "react";
import Logo from "./Logo";
import { css } from "@emotion/css";

const buttonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-height: 52px;
    padding: 15px 23px;
    border: 1px solid var(--color-accent);
    border-radius: var(--border-radius);
    background: var(--color-accent);
    color: var(--color-on-accent);
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    transition: background var(--transition-fast), transform var(--transition-fast);
    &:hover {
        background: var(--color-accent-hover);
        transform: translateY(-2px);
    }
    @media (prefers-reduced-motion: reduce) {
        transition-duration: 0.01ms;
    }
`;

const styles = {
    header: css`
        position: sticky;
        top: 0;
        z-index: 10;
        width: 100%;
        background: var(--color-cream);
        border-bottom: 1px solid var(--color-border);
    `,
    inner: css`
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        width: min(1320px, calc(100% - 64px));
        min-height: 92px;
        margin-inline: auto;
        @media (max-width: 760px) {
            width: calc(100% - 40px);
            min-height: 78px;
        }
    `,
    brand: css`display: inline-flex; align-items: center; gap: 12px; flex-shrink: 0; color: inherit; text-decoration: none;`,
    menuToggle: css`
        display: none;
        padding: 8px;
        border: 0;
        background: transparent;
        color: var(--color-main);
        font-size: 1.5rem;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        @media (max-width: 760px) { display: block; }
    `,
    nav: css`
        display: flex;
        align-items: center;
        gap: clamp(15px, 2.2vw, 30px);
        & > a:not(.${buttonStyles}) {
            color: var(--color-main-light);
            font-size: 0.83rem;
            text-decoration: none;
            transition: color 160ms ease;
        }
        & > a:not(.${buttonStyles}):hover,
        & > a[aria-current="page"] { color: var(--color-accent); }
        @media (max-width: 1000px) { gap: 15px; }
        @media (max-width: 1000px) {
            & > a:not(.${buttonStyles}) { font-size: 0.77rem; }
        }
        @media (max-width: 760px) {
            position: absolute;
            top: calc(100% - 1px);
            right: 0;
            left: 0;
            display: none;
            align-items: stretch;
            gap: 0;
            padding: 12px 20px 20px;
            border: 1px solid var(--color-border-soft);
            background: var(--color-cream);
            box-shadow: 0 15px 20px color-mix(in srgb, var(--color-main) 8%, transparent);
            & > a:not(.${buttonStyles}) {
                padding: 14px 0;
                border-bottom: 1px solid var(--color-border-softer);
                font-size: 0.92rem;
            }
            & > .${buttonStyles} { margin-top: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
            & > a { transition-duration: 0.01ms; }
        }
    `,
    navOpen: css`
        @media (max-width: 760px) {
            display: flex;
            flex-direction: column;
        }
    `,
    button: buttonStyles,
    buttonSmall: css`min-height: 43px; padding: 11px 17px; font-size: 0.8rem;`,
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header} id="top">
            <div className={styles.inner}>
                <a
                    className={styles.brand}
                    href="/"
                    onClick={closeMenu}
                >
                    <Logo />
                </a>

                <button
                    className={styles.menuToggle}
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                <nav
                    id="main-navigation"
                    className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
                >
                    <a href="/unsere-schuetzlinge">
                        Unsere Schützlinge
                    </a>

                    <a href="/ueber-uns">
                        Über uns
                    </a>
                    <a
                        className={`${styles.button} ${styles.buttonSmall}`}
                        href="/unterstuetzen"
                    >
                        Jetzt unterstützen
                    </a>
                </nav>
            </div>
        </header>
    );
}

import { useState } from "react";
import {
    CircleMarker,
    MapContainer,
    Popup,
    TileLayer,
    ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { css } from "@emotion/css";
import Section from "./Section";
import Typography from "./Typography";

const styles = {
    mapLayout: css`
        display: grid;
        grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.6fr);
        align-items: center;
        gap: clamp(36px, 7vw, 88px);
        @media (max-width: 760px) { grid-template-columns: 1fr; gap: 28px; }
    `,
    mapIntro: css`
        h2 { margin-bottom: 20px; }
        address { color: var(--color-text-light); font-size: 1rem; font-style: normal; line-height: 1.8; }
        & > p { max-width: 460px; margin: 22px 0 0; color: var(--color-text-light); font-size: 0.92rem; line-height: 1.85; }
    `,
    mapFrame: css`height: 420px; min-height: 320px; overflow: hidden; border: 1px solid var(--border-color); background: var(--color-cream-dark); @media (max-width: 760px) { height: 360px; }`,
    map: css`
        width: 100%;
        height: 100%;
        .leaflet-tile-pane { filter: saturate(0.78) sepia(0.1); }
        .leaflet-control-zoom a { border-color: var(--border-color); background: var(--color-cream); color: var(--color-main); }
        .leaflet-control-attribution { background: color-mix(in srgb, var(--color-cream) 88%, transparent); color: var(--color-main); }
        .leaflet-control-attribution a { color: var(--color-main-light); }
        .leaflet-popup-content-wrapper, .leaflet-popup-tip { background: var(--color-cream); color: var(--color-main); }
    `,
    placeholder: css`position: relative; display: grid; place-items: center; width: 100%; height: 100%; overflow: hidden; background: var(--color-map-land);`,
    mapArtwork: css`
        position: absolute;
        inset: 0;
        overflow: hidden;
        background:
            linear-gradient(32deg, transparent 48%, var(--color-map-road) 48.5% 51%, transparent 51.5%),
            linear-gradient(145deg, transparent 42%, var(--color-map-field) 42.5% 57%, transparent 57.5%),
            linear-gradient(78deg, transparent 46%, var(--color-map-road) 46.5% 49%, transparent 49.5%),
            var(--color-map-land);
    `,
    road: css`position: absolute; display: block; height: 8px; background: var(--color-map-road); box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-main) 8%, transparent);`,
    roadOne: css`top: 34%; left: -8%; width: 115%; transform: rotate(-18deg);`,
    roadTwo: css`top: 62%; left: -6%; width: 112%; transform: rotate(21deg);`,
    roadThree: css`top: 40%; left: 35%; width: 75%; transform: rotate(72deg);`,
    marker: css`position: absolute; top: 50%; left: 54%; width: 20px; aspect-ratio: 1; border: 4px solid var(--color-white); border-radius: 50%; background: var(--color-accent); box-shadow: 0 1px 8px color-mix(in srgb, var(--color-main) 30%, transparent); transform: translate(-50%, -50%);`,
    loadPanel: css`position: relative; display: grid; justify-items: center; gap: 12px; width: min(360px, calc(100% - 32px)); padding: 24px; background: var(--color-cream); text-align: center; p { margin: 0; color: var(--color-main); font-family: var(--font-serif); font-size: 1.15rem; }`,
    loadButton: css`min-height: 44px; padding: 0 22px; border: 1px solid var(--color-main); border-radius: var(--border-radius); background: var(--color-main); color: var(--color-cream); cursor: pointer; transition: background var(--transition-fast), color var(--transition-fast); &:hover { background: transparent; color: var(--color-main); }`,
    privacyNote: css`color: var(--color-text-light); font-size: 0.75rem; line-height: 1.5;`,
};

const location: [number, number] = [50.629717, 6.3507246];

export default function LocationMap() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Section surface="medium" contentClassName={styles.mapLayout}>
            <div className={styles.mapIntro}>
                <Typography variant="eyebrow">Hier liegt der Hof</Typography>
                <Typography variant="h2" id="location-title">Der Standort in Steckenborn</Typography>
                <address>
                    In Steckenborn 35
                    <br />
                    52152 Simmerath
                </address>
                <Typography variant="body1">
                    Der Helenenhof liegt in Steckenborn auf den Höhen über dem Rursee in der Nordeifel.
                    Besuche sind derzeit noch nicht möglich.
                </Typography>
            </div>

            <div className={styles.mapFrame}>
                {isLoaded ? (
                    <MapContainer
                        center={location}
                        zoom={15}
                        scrollWheelZoom={false}
                        zoomControl={false}
                        className={styles.map}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ZoomControl position="topright" />
                        <CircleMarker
                            center={location}
                            radius={10}
                            pathOptions={{
                                color: "var(--color-white)",
                                fillColor: "var(--color-accent)",
                                fillOpacity: 1,
                                weight: 3,
                            }}
                        >
                            <Popup>
                                <b>Helenenhof – Tierschutzverein Nordeifel e.V.</b>
                                <br />
                                In Steckenborn 35
                                <br />
                                52152 Simmerath
                            </Popup>
                        </CircleMarker>
                    </MapContainer>
                ) : (
                    <div className={styles.placeholder}>
                        <div className={styles.mapArtwork}>
                            <span className={`${styles.road} ${styles.roadOne}`} />
                            <span className={`${styles.road} ${styles.roadTwo}`} />
                            <span className={`${styles.road} ${styles.roadThree}`} />
                            <span className={styles.marker} />
                        </div>
                        <div className={styles.loadPanel}>
                            <Typography variant="body1">Die Karte ist noch nicht geladen.</Typography>
                            <button
                                className={styles.loadButton}
                                onClick={() => setIsLoaded(true)}
                                type="button"
                            >
                                Karte laden
                            </button>
                            <span className={styles.privacyNote}>
                                Dabei wird eine Verbindung zu OpenStreetMap hergestellt.
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}

import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import SupportSection from "../components/SupportSection";
import Page from "./Page";

export default function HomePage() {
    return (
        <Page>
            <Hero />
            <AboutSection />
            <MissionSection />
            <SupportSection />
        </Page>
    );
}

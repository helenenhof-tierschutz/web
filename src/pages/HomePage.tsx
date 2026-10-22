import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import AnimalsSection from "../components/AnimalsSection";
import FarmSection from "../components/FarmSection";
import SupportSection from "../components/SupportSection";
import Page from "./Page";

export default function HomePage() {
    return (
        <Page>
            <Hero />
            <AboutSection />
            <AnimalsSection />
            <FarmSection />
            <MissionSection />
            <SupportSection />
        </Page>
    );
}

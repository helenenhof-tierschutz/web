import VorstandSection from "../components/VorstandSection";
import VereinSection from "../components/VereinSection";
import LocationMap from "../components/LocationMap";
import Page from "./Page";

export default function AboutPage() {
    return (
        <Page>
            <VereinSection />
            <LocationMap />
            <VorstandSection />
        </Page>
    );
}

import VorstandSection from "../components/VorstandSection";
import VereinSection from "../components/VereinSection";
import Page from "./Page";

export default function AboutPage() {
    return (
        <Page>
            <VereinSection />
            <VorstandSection />
        </Page>
    );
}

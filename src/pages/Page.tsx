import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type PageProps = {
    children: ReactNode;
};

export default function Page({ children }: PageProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
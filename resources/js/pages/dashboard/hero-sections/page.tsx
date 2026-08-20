import { Head } from "@inertiajs/react";
import DashboardLayout from "@/pages/layouts/dashboard-layout";
import type { HeroSection } from "@/types/general";
import HeroSectionManagement from "./_components/hero-section-management";

type Props = {
    hero_sections: {
        current_page: number;
        per_page: number;
        data: HeroSection[];
        total: number;
    };
};

export default function Page(props: Props) {
    return (
        <>
            <Head title="Hero Sections" />
            <h1 className="text-2xl font-semibold">Hero Sections</h1>
            <HeroSectionManagement props={props.hero_sections} />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

import { Head } from "@inertiajs/react";
import DashboardLayout from "@/pages/layouts/dashboard-layout";
import type { Service } from "@/types/general";
import ServiceManagement from "./_components/service-management";

type Props = {
    news: {
        current_page: number;
        per_page: number;
        data: Service[];
        total: number;
    };
};

export default function Page(props: Props) {
    return (
        <>
            <Head title="Services" />
            <h1 className="text-2xl font-semibold">Services</h1>
            <ServiceManagement props={props.news} />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

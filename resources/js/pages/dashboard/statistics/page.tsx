import { Head } from "@inertiajs/react";
import DashboardLayout from "@/pages/layouts/dashboard-layout";
import type { Statistic } from "@/types/general";
import StatisticManagement from "./_components/statistic-management";

type Props = {
    statistics: {
        current_page: number;
        per_page: number;
        data: Statistic[];
        total: number;
    };
};

export default function Page(props: Props) {
    return (
        <>
            <Head title="Statistics" />
            <h1 className="text-2xl font-semibold">Services</h1>
            <StatisticManagement props={props.statistics} />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

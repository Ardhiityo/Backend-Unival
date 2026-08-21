import { Head } from "@inertiajs/react";
import type { News } from "@/types/general";
import DashboardLayout from "../layouts/dashboard-layout"
import DashboardManagement from "./_components/dashboard-management";

type Props = {
    total_news_on_this_month_formatted: number
    news_of_all_time_formatted: number
    services_of_all_time_formatted: number
    average_news_on_this_month_formatted: number,
    news: News[],
    current_week: string,
    last_week: string
}

export default function Page(props: Props) {
    const {
        total_news_on_this_month_formatted,
        news_of_all_time_formatted,
        services_of_all_time_formatted,
        average_news_on_this_month_formatted,
        news,
        last_week,
        current_week
    } = props;

    return (
        <>
            <Head title="Dashboard" />
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <DashboardManagement
                total_news_on_this_month_formatted={total_news_on_this_month_formatted}
                news_of_all_time_formatted={news_of_all_time_formatted}
                services_of_all_time_formatted={services_of_all_time_formatted}
                average_news_on_this_month_formatted={average_news_on_this_month_formatted}
                news={news}
                last_week={last_week}
                current_week={current_week}
            />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
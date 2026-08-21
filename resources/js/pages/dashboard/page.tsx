import { Head } from "@inertiajs/react";
import DashboardLayout from "../layouts/dashboard-layout"
import DashboardManagement from "./_components/DashboardManagement";

type Props = {
    total_news_on_this_month_formatted: number
    news_of_all_time_formatted: number
    services_of_all_time_formatted: number
    average_news_on_this_month_formatted: number
}

export default function Page(props: Props) {
    const {
        total_news_on_this_month_formatted,
        news_of_all_time_formatted,
        services_of_all_time_formatted,
        average_news_on_this_month_formatted
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
            />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
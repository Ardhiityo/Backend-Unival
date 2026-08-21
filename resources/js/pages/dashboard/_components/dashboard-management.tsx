import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { News } from "@/types/general";
import LineCharts from "./line-chart";

type Props = {
    total_news_on_this_month_formatted: number
    news_of_all_time_formatted: number
    services_of_all_time_formatted: number
    average_news_on_this_month_formatted: number,
    last_week: string,
    current_week: string,
    news: News[]
}

export default function DashboardManagement(props: Props) {
    const {
        total_news_on_this_month_formatted,
        news_of_all_time_formatted,
        services_of_all_time_formatted,
        average_news_on_this_month_formatted,
        last_week,
        current_week,
        news
    } = props;

    return (
        <main className="flex flex-col gap-5">
            <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold">Total News</CardTitle>
                        <CardDescription>News this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">{total_news_on_this_month_formatted}</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold">Average News</CardTitle>
                        <CardDescription>Average per-day.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">{average_news_on_this_month_formatted}</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold">Total News</CardTitle>
                        <CardDescription>News of all time.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">{news_of_all_time_formatted}</h1>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold">Total Services</CardTitle>
                        <CardDescription>Services of all time.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl font-bold">{services_of_all_time_formatted}</h1>
                    </CardContent>
                </Card>
            </section>
            <Card>
                <CardHeader>
                    <CardTitle className="font-semibold">
                        News statistic per-week
                    </CardTitle>
                    <CardDescription>
                        All news have requested statistical data for the period from{" "}
                        {last_week} to{" "}
                        {current_week}.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LineCharts news={news} />
                </CardContent>
            </Card>
        </main>
    )
}
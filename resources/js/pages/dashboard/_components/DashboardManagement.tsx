import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
    total_news_on_this_month_formatted: number
    news_of_all_time_formatted: number
    services_of_all_time_formatted: number
    average_news_on_this_month_formatted: number
}

export default function DashboardManagement(props: Props) {
    const {
        total_news_on_this_month_formatted,
        news_of_all_time_formatted,
        services_of_all_time_formatted,
        average_news_on_this_month_formatted
    } = props;

    return (
        <section className="grid grid-cols-4 gap-5">
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
    )
}
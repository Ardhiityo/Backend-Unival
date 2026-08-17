import DashboardLayout from "@/pages/layouts/DashboardLayout";
import NewsManagement from "./_components/news-management";
import { News } from "@/types/general";

type Props = {
    news: {
        current_page: number;
        per_page: number;
        data: News[];
        total: number;
    };
};

export default function Page(props: Props) {

    return (
        <>
            <h1 className="text-2xl font-semibold">News</h1>
            <NewsManagement props={props.news} />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

import DashboardLayout from "@/pages/layouts/DashboardLayout";
import NewsManagement from "./_components/news-management";

export default function Page() {
    return (
        <>
            <h1 className="text-2xl font-semibold">News</h1>
            <NewsManagement />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

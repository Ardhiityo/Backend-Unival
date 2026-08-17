import DashboardLayout from "../layouts/DashboardLayout"

export default function Page() {
    return (
        <h1 className="text-2xl font-semibold">Dashboard</h1>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
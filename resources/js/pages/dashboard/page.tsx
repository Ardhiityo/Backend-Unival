import DashboardLayout from "../layouts/dashboard-layout"

export default function Page() {
    return (
        <h1 className="text-2xl font-semibold">Dashboard</h1>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
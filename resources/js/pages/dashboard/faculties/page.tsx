import { Head } from "@inertiajs/react";
import DashboardLayout from "@/pages/layouts/dashboard-layout";
import type { Faculty } from "@/types/general";
import FacultyManagement from "./_components/faculty-management";

type Props = {
    faculties: {
        current_page: number;
        per_page: number;
        data: Faculty[];
        total: number;
    };
};

export default function Page(props: Props) {
    return (
        <>
            <Head title="Faculties" />
            <h1 className="text-2xl font-semibold">Faculties</h1>
            <FacultyManagement props={props.faculties} />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

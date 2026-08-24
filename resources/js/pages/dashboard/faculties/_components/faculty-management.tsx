import { router } from "@inertiajs/react";
import { useMemo, useState } from "react";
import ActionLabel from "@/components/common/action-label";
import DataTable from "@/components/common/data-table";
import DropwdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { HEADER_TABLE_FACULTIES } from "@/constants/faculty-constant";
import { useDataTable } from "@/hooks/use-data-table";
import type { Faculty, FacultyManagementState } from "@/types/general";
import DialogCreateFaculty from "./dialog-create-faculty";
import DialogDeleteFaculty from "./dialog-delete-faculty";
import DialogUpdateFaculty from "./dialog-update-faculty";

type Props = {
    current_page: number;
    per_page: number;
    data: Faculty[];
    total: number;
};

export default function FacultyManagement({ props }: { props: Props }) {
    const [selectedAction, setSelectedAction] = useState<FacultyManagementState>(null)

    const faculties = props.data;
    const total = props.total;

    const {
        currentPage,
        currentLimit,
        handleSetLimit,
        setCurrentPage
    } = useDataTable();

    const totalPage = useMemo(() => Math.ceil(total / currentLimit),
        [total, currentLimit],
    );

    const data = useMemo(() => {
        return faculties.map((item, index) => {
            return [
                currentLimit * (currentPage - 1) + index + 1,
                <span className="text-wrap">{item.title}</span>,
                <span className="text-wrap">{item.description}</span>,
                <DropwdownAction
                    menus={[
                        {
                            label: <ActionLabel type="edit" />,
                            variant: "default",
                            type: "button",
                            action: () => setSelectedAction({ "action": "edit", faculty: item })
                        },
                        {
                            label: <ActionLabel type="delete" />,
                            variant: "destructive",
                            type: "button",
                            action: () => setSelectedAction({ "action": "delete", faculty: item })
                        }
                    ]}
                />
            ]
        })
    }, [faculties, currentLimit, currentPage])

    const onLimitChange = (limit: number) => {
        handleSetLimit(limit);
        router.get(
            '/faculties',
            {
                page: 1,
                limit,
            },
            {
                preserveState: true,
            },
        );
    };

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        router.get(
            '/faculties',
            {
                page: page,
                limit: currentLimit,
            },
            {
                preserveState: true,
            },
        );
    };

    return (
        <>
            <Button
                className="w-fit self-end"
                onClick={() => setSelectedAction({ action: "create" })}
            >
                Add Faculty
            </Button>
            <DataTable
                headers={HEADER_TABLE_FACULTIES}
                data={data}
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={onPageChange}
                setCurrentLimit={onLimitChange}
            />
            {selectedAction?.action === "create" &&
                <DialogCreateFaculty
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                />
            }
            {selectedAction?.action === "edit" && selectedAction.faculty &&
                <DialogUpdateFaculty
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    faculty={selectedAction.faculty}
                />
            }
            {selectedAction?.action === "delete" && selectedAction.faculty &&
                <DialogDeleteFaculty
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    faculty={selectedAction.faculty}
                />
            }
        </>
    );
}
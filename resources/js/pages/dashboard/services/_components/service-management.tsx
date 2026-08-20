import { router } from "@inertiajs/react";
import { useMemo, useState } from "react";
import ActionLabel from "@/components/common/action-label";
import DataTable from "@/components/common/data-table";
import DropwdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { HEADER_TABLE_SERVICES } from "@/constants/service-constant";
import { useDataTable } from "@/hooks/use-data-table";
import type { Service, ServiceManagementState } from "@/types/general";
import DialogCreateService from "./dialog-create-service";
import DialogDeleteService from "./dialog-delete-service";
import DialogUpdateService from "./dialog-update-service";

type Props = {
    current_page: number;
    per_page: number;
    data: Service[];
    total: number;
};

export default function ServiceManagement({ props }: { props: Props }) {
    const [selectedAction, setSelectedAction] = useState<ServiceManagementState>(null)

    const services = props.data;
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
        return services.map((item, index) => {
            return [
                currentLimit * (currentPage - 1) + index + 1,
                item.title,
                item.description,
                <DropwdownAction
                    menus={[
                        {
                            label: <ActionLabel type="edit" />,
                            variant: "default",
                            type: "button",
                            action: () => setSelectedAction({ "action": "edit", service: item })
                        },
                        {
                            label: <ActionLabel type="delete" />,
                            variant: "destructive",
                            type: "button",
                            action: () => setSelectedAction({ "action": "delete", service: item })
                        }
                    ]}
                />
            ]
        })
    }, [services, currentLimit, currentPage])

    const onLimitChange = (limit: number) => {
        handleSetLimit(limit);
        router.get(
            '/services',
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
            '/services',
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
                Add Service
            </Button>
            <DataTable
                headers={HEADER_TABLE_SERVICES}
                data={data}
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={onPageChange}
                setCurrentLimit={onLimitChange}
            />
            {selectedAction?.action === "create" &&
                <DialogCreateService
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                />
            }
            {selectedAction?.action === "edit" && selectedAction.service &&
                <DialogUpdateService
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    service={selectedAction.service}
                />
            }
            {selectedAction?.action === "delete" && selectedAction.service &&
                <DialogDeleteService
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    service={selectedAction.service}
                />
            }
        </>
    );
}
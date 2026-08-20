import { router } from "@inertiajs/react";
import { useMemo, useState } from "react";
import ActionLabel from "@/components/common/action-label";
import DataTable from "@/components/common/data-table";
import DropwdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { HEADER_TABLE_STATISTICS } from "@/constants/statistic-constant";
import { useDataTable } from "@/hooks/use-data-table";
import type { Statistic, StatisticManagementState } from "@/types/general";
import DialogCreateStatistic from "./dialog-create-statistic";
import DialogDeleteStatistic from "./dialog-delete-statistic";
import DialogUpdateStatistic from "./dialog-update-statistic";

type Props = {
    current_page: number;
    per_page: number;
    data: Statistic[];
    total: number;
};

export default function StatisticManagement({ props }: { props: Props }) {
    const [selectedAction, setSelectedAction] = useState<StatisticManagementState>(null)

    const statistics = props.data;
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
        return statistics.map((item, index) => {
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
                            action: () => setSelectedAction({ "action": "edit", statistic: item })
                        },
                        {
                            label: <ActionLabel type="delete" />,
                            variant: "destructive",
                            type: "button",
                            action: () => setSelectedAction({ "action": "delete", statistic: item })
                        }
                    ]}
                />
            ]
        })
    }, [statistics, currentLimit, currentPage])

    const onLimitChange = (limit: number) => {
        handleSetLimit(limit);
        router.get(
            '/statistics',
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
            '/statistics',
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
            {total < 3 && <Button
                className="w-fit self-end"
                onClick={() => setSelectedAction({ action: "create" })}
            >
                Add Statistic
            </Button>}
            <DataTable
                headers={HEADER_TABLE_STATISTICS}
                data={data}
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={onPageChange}
                setCurrentLimit={onLimitChange}
            />
            {selectedAction?.action === "create" &&
                <DialogCreateStatistic
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                />
            }
            {selectedAction?.action === "edit" && selectedAction.statistic &&
                <DialogUpdateStatistic
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    statistic={selectedAction.statistic}
                />
            }
            {selectedAction?.action === "delete" && selectedAction.statistic &&
                <DialogDeleteStatistic
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    statistic={selectedAction.statistic}
                />
            }
        </>
    );
}
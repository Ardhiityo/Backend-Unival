import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { useMemo, useState } from "react";
import ActionLabel from "@/components/common/action-label";
import DataTable from "@/components/common/data-table";
import DropwdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { HEADER_TABLE_NEWS } from "@/constants/news-constant";
import type { News, NewsManagementState } from "@/types/general";

type Props = {
    current_page: number;
    per_page: number;
    data: News[];
    total: number;
};

export default function NewsManagement({ props }: { props: Props }) {
    const [selectedAction, setSelectedAction] = useState<NewsManagementState>(null)

    const news = props.data;
    const total = props.total;
    const perPage = props.per_page;
    const currentPage = props.current_page;

    // const {
    //     currentRowsPerPage,
    //     handleSetRowsPerPage,
    //     currentPages,
    //     setCurrentPages,
    // } = useDataTable();

    const data = useMemo(() => {
        return news.map((item, index) => {
            return [
                perPage * (currentPage - 1) + index + 1,
                format(item.date, "Y-M-d"),
                item.title,
                <DropwdownAction
                    menus={[
                        {
                            label: <ActionLabel type="edit" />,
                            variant: "default",
                            type: "button",
                            action: () => {
                                // 
                            }
                        },
                        {
                            label: <ActionLabel type="delete" />,
                            variant: "destructive",
                            type: "button",
                            action: () => {
                                // 
                            }
                        }
                    ]}
                />
            ]
        })
    }, [news, perPage, currentPage])

    return (
        <main className="flex flex-col gap-8">
            <Button
                className="w-fit self-end">
                <Link href="/news/create">Add News</Link>
            </Button >
            <DataTable
                headers={HEADER_TABLE_NEWS}
                data={data}
            />
        </main>
    );
}
import { Link, router } from "@inertiajs/react";
import { format } from "date-fns";
import { useMemo, useState } from "react";
import ActionLabel from "@/components/common/action-label";
import DataTable from "@/components/common/data-table";
import DropwdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { HEADER_TABLE_NEWS } from "@/constants/news-constant";
import { useDataTable } from "@/hooks/use-data-table";
import type { News, NewsManagementState } from "@/types/general";
import DialogDeleteNews from "./dialog-delete-news";

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
        return news.map((item, index) => {
            return [
                currentLimit * (currentPage - 1) + index + 1,
                <p className="text-wrap">{item.title}</p>,
                format(item.date, "yyyy-MM-d"),
                <DropwdownAction
                    menus={[
                        {
                            label: <ActionLabel type="edit" />,
                            variant: "default",
                            type: "button",
                            action: () => router.visit(`/news/${item.id}`)
                        },
                        {
                            label: <ActionLabel type="delete" />,
                            variant: "destructive",
                            type: "button",
                            action: () => setSelectedAction({ "action": "delete", news: item })
                        }
                    ]}
                />
            ]
        })
    }, [news, currentLimit, currentPage])

    const onLimitChange = (limit: number) => {
        handleSetLimit(limit);
        router.get(
            '/news',
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
            '/news',
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
                className="w-fit self-end">
                <Link href="/news/create">Add News</Link>
            </Button>
            <DataTable
                headers={HEADER_TABLE_NEWS}
                data={data}
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={onPageChange}
                setCurrentLimit={onLimitChange}
            />
            {selectedAction?.action === "delete" && selectedAction.news && (
                <DialogDeleteNews
                    open={true}
                    news={selectedAction.news}
                    setOpen={(value) => setSelectedAction(value)}
                />
            )}
        </>
    );
}
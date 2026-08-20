import { router } from "@inertiajs/react";
import { useMemo, useState } from "react";
import ActionLabel from "@/components/common/action-label";
import DataTable from "@/components/common/data-table";
import DropwdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { HEADER_TABLE_HERO_SECTION } from "@/constants/hero-section-constant";
import { useDataTable } from "@/hooks/use-data-table";
import type { HeroSection, HeroSectionManagementState } from "@/types/general";
import DialogCreateHeroSection from "./dialog-create-hero-section";
import DialogDeleteStatistic from "./dialog-delete-hero-section";
import DialogUpdateStatistic from "./dialog-update-hero-section";

type Props = {
    current_page: number;
    per_page: number;
    data: HeroSection[];
    total: number;
};

export default function HeroSectionManagement({ props }: { props: Props }) {
    const [selectedAction, setSelectedAction] = useState<HeroSectionManagementState>(null)

    const heroSections = props.data;
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
        return heroSections.map((item, index) => {
            return [
                currentLimit * (currentPage - 1) + index + 1,
                item.accreditation,
                item.total_industry_partner,
                item.total_number_of_graduate,
                <DropwdownAction
                    menus={[
                        {
                            label: <ActionLabel type="edit" />,
                            variant: "default",
                            type: "button",
                            action: () => setSelectedAction({ "action": "edit", heroSection: item })
                        },
                        {
                            label: <ActionLabel type="delete" />,
                            variant: "destructive",
                            type: "button",
                            action: () => setSelectedAction({ "action": "delete", heroSection: item })
                        }
                    ]}
                />
            ]
        })
    }, [heroSections, currentLimit, currentPage])

    const onLimitChange = (limit: number) => {
        handleSetLimit(limit);
        router.get(
            '/hero-sections',
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
            '/hero-sections',
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
            {total < 1 && <Button
                className="w-fit self-end"
                onClick={() => setSelectedAction({ action: "create" })}
            >
                Add Hero Section
            </Button>}
            <DataTable
                headers={HEADER_TABLE_HERO_SECTION}
                data={data}
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={onPageChange}
                setCurrentLimit={onLimitChange}
            />
            {selectedAction?.action === "create" &&
                <DialogCreateHeroSection
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                />
            }
            {selectedAction?.action === "edit" && selectedAction.heroSection &&
                <DialogUpdateStatistic
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    heroSection={selectedAction.heroSection}
                />
            }
            {selectedAction?.action === "delete" && selectedAction.heroSection &&
                <DialogDeleteStatistic
                    open={true}
                    setOpen={(value) => setSelectedAction(value)}
                    heroSection={selectedAction.heroSection}
                />
            }
        </>
    );
}
import { useState } from "react";
import { DEFAULT_TABLE_LIMITS } from "@/constants/data-table";

export function useDataTable() {
    const [currentLimit, setCurrentLimit] = useState(DEFAULT_TABLE_LIMITS);
    const [currentPage, setCurrentPage] = useState(1);

    function handleSetLimit(limit: number) {
        setCurrentLimit(limit)
        setCurrentPage(1)
    }

    return {
        currentPage,
        currentLimit,
        handleSetLimit,
        setCurrentPage
    }
}
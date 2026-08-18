import { Field, FieldLabel } from "@/components/ui/field"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { DEFAULT_TABLE_LIMITS, TABLE_LIMITS } from "@/constants/data-table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    totalPage: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setCurrentLimit: (limit: number) => void
}

export function DataTablePagination(props: Props) {
    const { totalPage, currentPage, setCurrentPage, setCurrentLimit } = props;

    return (
        <div className="flex items-center justify-between gap-4">
            <Field orientation="horizontal" className="w-fit">
                <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
                <Select
                    defaultValue={DEFAULT_TABLE_LIMITS}
                    onValueChange={(value) => value ? setCurrentLimit(value) : null}
                >
                    <SelectTrigger className="w-20" id="select-rows-per-page">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent align="start">
                        <SelectGroup>
                            {TABLE_LIMITS.map(limit => (
                                <SelectItem value={limit}>{limit}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
            <Pagination className="mx-0 w-auto">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() =>
                                currentPage > 1 ? setCurrentPage(currentPage - 1) : null
                            }
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            onClick={() =>
                                currentPage < totalPage ? setCurrentPage(currentPage + 1) : null
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

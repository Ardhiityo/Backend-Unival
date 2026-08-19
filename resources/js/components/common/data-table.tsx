import type { ReactNode } from "react";
import { Card } from "../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { DataTablePagination } from "./data-table-pagination";

type Props = {
    headers: string[],
    data: ReactNode[][],
    totalPage: number,
    currentPage: number,
    setCurrentPage: (page: number) => void,
    setCurrentLimit: (limit: number) => void
}

export default function DataTable(props: Props) {
    const {
        headers,
        data,
        totalPage,
        currentPage,
        setCurrentPage,
        setCurrentLimit
    } = props;

    return (
        <main className="flex flex-col gap-4">
            <Card className="p-0">
                <Table>
                    {/* No data found */}
                    {data.length === 0 && <TableCaption className="py-5">No data found</TableCaption>}
                    <TableHeader className="bg-muted">
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableHead
                                    className="font-semibold py-3 text-center"
                                    key={`${header}-${index}`}
                                >
                                    {header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Data found */}
                        {data.map((rows, rowIndex) => (
                            <TableRow key={`row-index-${rowIndex}`}>
                                {rows.map((item, index) => (
                                    <TableCell
                                        className="font-medium text-center"
                                        key={`data-index-${index}`}
                                    >
                                        {item}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
            <DataTablePagination
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setCurrentLimit={setCurrentLimit}
            />
        </main>
    )
}
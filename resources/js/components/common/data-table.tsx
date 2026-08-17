import type { ReactNode } from "react";
import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
    headers: string[],
    data: ReactNode[][]
}

export default function DataTable(props: Props) {
    const { headers, data } = props;

    return (
        <Card className="p-0">
            <Table>
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
    )
}
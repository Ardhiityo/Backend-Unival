import { Link, usePage } from "@inertiajs/react";
import { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DashboardBreadcrumb() {
    const { url } = usePage();

    const path = url.split("?")[0];
    const pathSplit = path.split("/");
    const pathFormatted = pathSplit.slice(1);

    return (
        <Breadcrumb>
            <BreadcrumbList className="capitalize">
                {pathFormatted.map((path, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {index + 1 === pathFormatted.length ? (
                                <BreadcrumbPage>
                                    <p className="text-wrap">{path}</p>
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink
                                >
                                    <Link className="text-wrap"
                                        href={`/${pathFormatted
                                            .slice(0, index + 1)
                                            .join("/")}`}>
                                        {path}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index + 1 < pathFormatted.length && (
                            <BreadcrumbSeparator />
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
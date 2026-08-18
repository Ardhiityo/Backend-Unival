
import { Head } from "@inertiajs/react"
import type { ReactNode } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { DashboardBreadcrumb } from "../dashboard/_components/dashboard-breadcrumb"

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main className="relative">
            <Head title="Dashboard" />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <DashboardBreadcrumb />
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 px-7 py-10 pt-0">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
            <ModeToggle />
        </main>
    )
}

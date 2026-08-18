import { Head } from "@inertiajs/react";
import type { ReactNode } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head title="Login" />
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 relative">
                <ModeToggle />
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </div>
        </>
    )
}
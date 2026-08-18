import { Head } from "@inertiajs/react";
import { LoginForm } from "@/components/login-form";
import AuthLayout from "../../layouts/auth-layout";

export default function Page() {
    return (
        <>
            <Head title="Login" />
            <LoginForm />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <AuthLayout>{page}</AuthLayout>
);
import { Head } from "@inertiajs/react";
import AuthLayout from "../../layouts/auth-layout";
import { LoginForm } from "./_components/login-form";

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
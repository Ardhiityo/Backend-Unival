import { Head } from "@inertiajs/react";
import AuthLayout from "../../layouts/auth-layout";
import { ResetPassword } from "./_components/reset-password";

type Props = {
    token: string
}

export default function Page(props: Props) {
    const { token } = props;

    return (
        <>
            <Head title="Reset Password" />
            <ResetPassword token={token} />
        </>
    )
}

Page.layout = (page: React.ReactNode) => (
    <AuthLayout>{page}</AuthLayout>
);
import { Head } from "@inertiajs/react";
import AuthLayout from "../../layouts/auth-layout";
import { ResetPasswordLink } from "./_components/reset-password-link";


export default function Page() {
  return (
    <>
      <Head title="Reset Password Link" />
      <ResetPasswordLink />
    </>
  )
}

Page.layout = (page: React.ReactNode) => (
  <AuthLayout>{page}</AuthLayout>
);
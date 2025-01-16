import { LoginForm } from "@/components/login/login-form";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <LoginForm />
    </div>
  );
}

import { Roles } from "~/components/roles";
import { getCurrentUser } from "~/lib/auth";
import { ProfileProvider } from "~/context/ProfileProvider";
import { redirect } from "next/navigation";

export default async function Auth() {
  const user = await getCurrentUser();
  if (user) {
    console.log(user);
    redirect("/dashboard");
  }

  return (
    <ProfileProvider>
      <main className="flex h-screen w-full items-center justify-center bg-indian-100">
        <section className="flex h-2/3 w-4/5 flex-wrap overflow-hidden rounded-xl border-4 border-slate-200 bg-slate-600 shadow-md shadow-slate-500">
          <Roles />
        </section>
      </main>
    </ProfileProvider>
  );
}

import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/auth";
import { Header } from "~/components/header";
import { NavBar } from "~/components/navbar";
import { Path } from "~/components/path";
import { RoleType } from "~/types";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await getCurrentUser()) ?? {
    id: "random-id",
    name: "Siddharth Biswas",
    email: "dawdaw.awdawd",
    role: RoleType.ADMIN,
    image: undefined,
    college: "JGEC",
  };
  if (!user) redirect("/auth");

  return (
    <main className="flex h-screen">
      <NavBar />
      <section className="flex h-full w-4/5 flex-col bg-transparent">
        <Header user={user} />
        <section className="relative h-full px-4 py-2">
          <Path />
          <section className="h-[calc(100%-52px)] pt-2">{children}</section>
        </section>
      </section>
    </main>
  );
}

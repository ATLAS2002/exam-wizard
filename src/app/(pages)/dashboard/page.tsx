import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/auth";
import { Header } from "~/components/header";
import { Path } from "~/components/path";
import { Cards } from "~/components/card";
import { NavBar } from "~/components/navbar";

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) redirect("/auth");

  return (
    <main className="flex h-screen">
      <NavBar />
      <section className="flex h-full w-4/5 flex-col-reverse bg-transparent">
        <section className=" h-[calc(100%-80px)] pt-2">
          <Path />
          <Cards />
        </section>
        <Header user={user} />
      </section>
    </main>
  );
}

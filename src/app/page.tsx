import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await auth();

  return (
    <main className="flex justify-center items-center h-screen gap-6">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}

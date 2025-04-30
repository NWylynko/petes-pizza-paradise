import { __experimental_PricingTable as PricingTable } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await auth();

  const hasProPlan = user.has({ plan: "pro" });
  const hasUltraPlan = user.has({ plan: "ultra" });

  return (
    <main className="flex justify-center items-center h-screen gap-6">
      <div className="w-96">
        <PricingTable
          fallback={
            <div className="h-96 bg-gray-100 rounded-lg animate-pulse" />
          }
        />
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify({ hasProPlan, hasUltraPlan }, null, 2)}</pre>
    </main>
  );
}

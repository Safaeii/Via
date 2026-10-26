
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DestinationsExplorer } from "@/components/destinations/DestinationsExplorer";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-accent"
        >
          <ArrowRight className="h-4 w-4" />
          بازگشت به صفحه اصلی
        </Link>

        <div className="mb-10 text-right">
          <p className="mb-2 text-sm font-semibold text-accent">
            جهان را کشف کنید
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            همه مقصدها
          </h1>

          <p className="mt-3 text-muted-foreground">
            مقصد بعدی سفرت را از میان گزینه‌های زیر انتخاب کن.
          </p>
        </div>

        <DestinationsExplorer />
      </div>
    </main>
  );
}
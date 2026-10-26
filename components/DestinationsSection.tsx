import { ArrowUpLeft } from "lucide-react";
import { destinations, toFa } from "@/lib/data";
import type { Destination } from "@/lib/data";
import Link from "next/link";

export function DestinationsSection() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-wider text-accent">
            جهان را کشف کنید
          </p>

          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            مقاصد پرطرفدار
          </h2>
        </div>

        <Link
          href="/destinations"
          className="hidden items-center gap-1 text-sm font-semibold text-foreground hover:text-accent sm:flex"
        >
          مشاهده همه
          <ArrowUpLeft className="h-4 w-4" />
        </Link>
      </div>

      {/* کارت‌های داینامیک */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}

// کامپوننت کارت مقصد
function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <Link
      href={`/destinations/${destination.id}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
    >
      {/* تصویر مقصد */}
      <img
        src={destination.image}
        alt={destination.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* گرادیانت روی تصویر */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* برچسب مقصد */}
      <div className="absolute right-3 top-3">
        <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground">
          {destination.tag}
        </span>
      </div>

      {/* اطلاعات مقصد */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-xs font-medium text-white/80">
          {destination.country}
        </p>

        <h3 className="text-lg font-semibold leading-tight">
          {destination.name}
        </h3>

        <p className="mt-1 text-xs text-white/70">
          {toFa(destination.stays)} اقامتگاه
        </p>
      </div>
    </Link>
  );
}


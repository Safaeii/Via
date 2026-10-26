import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Hotel } from "lucide-react";
import { destinations, toFa } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DestinationPage({ params }: Props) {
  const { id } = await params;

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* تصویر بزرگ مقصد */}
      <div className="relative h-[65vh] w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-12 right-8 text-white md:right-20">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
            {destination.tag}
          </span>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            {destination.name}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-lg">
            <MapPin size={20} />
            {destination.country}
          </p>
        </div>
      </div>

      {/* اطلاعات مقصد */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <Link
          href="/#destinations"
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
        >
          <ArrowRight size={18} />
          بازگشت به مقاصد
        </Link>

        <div className="mt-12 rounded-3xl border bg-card p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            درباره {destination.name}
          </h2>

          <p className="mt-5 text-muted-foreground">
            مقصد {destination.name} در کشور {destination.country}
            قرار دارد و یکی از مقاصد گردشگری پیشنهادی ماست.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Hotel className="text-accent" />

            <span className="font-semibold">
              {toFa(destination.stays)} اقامتگاه
            </span>
          </div>
        </div>

      </section>
    </main>
  );
}
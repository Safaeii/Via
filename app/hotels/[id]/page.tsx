import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  MapPin,
  Star,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

import { hotels, toFa } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HotelDetailsPage({ params }: Props) {
  const { id } = await params;

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background" dir="rtl">

      {/* تصویر بزرگ هتل */}
      <section className="relative h-[65vh] min-h-[400px] overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* گرادیانت روی تصویر */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* اطلاعات روی تصویر */}
        <div className="absolute bottom-12 right-6 z-10 text-white md:right-20">
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />

            <span className="font-semibold">
              {toFa(hotel.rating)}
            </span>

            <span className="text-sm text-white/80">
              ({toFa(hotel.reviews)} نظر)
            </span>
          </div>

          <h1 className="text-4xl font-bold md:text-6xl">
            {hotel.name}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-lg">
            <MapPin size={20} />
            {hotel.location}
          </p>
        </div>
      </section>

      {/* محتوای اصلی */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* بازگشت */}
        <Link
          href="/#stays"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
        >
          <ArrowRight size={18} />
          بازگشت به اقامتگاه‌ها
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* ستون اطلاعات */}
          <div className="space-y-6 lg:col-span-2">

            {/* معرفی هتل */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                درباره {hotel.name}
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                اقامتگاه {hotel.name} در {hotel.location} قرار دارد.
                این اقامتگاه یکی از گزینه‌های منتخب مجموعه ویا برای
                تجربه سفری آرامش‌بخش و خاطره‌انگیز است.
              </p>

              {/* اطلاعات تکمیلی */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-secondary/50 p-5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-5 w-5 text-amber-500" />
                    امتیاز اقامتگاه
                  </div>

                  <p className="mt-3 text-2xl font-bold">
                    {toFa(hotel.rating)} از ۵
                  </p>
                </div>

                <div className="rounded-xl bg-secondary/50 p-5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-accent" />
                    موقعیت
                  </div>

                  <p className="mt-3 text-lg font-semibold">
                    {hotel.location}
                  </p>
                </div>
              </div>
            </div>

            {/* امکانات هتل */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                امکانات اقامتگاه
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                امکانات و خدمات این اقامتگاه
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {hotel.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-3 rounded-xl bg-secondary/40 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                    <span className="font-medium">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* بخش نظرات */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                نظرات مسافران
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Star className="h-8 w-8 fill-amber-400 text-amber-400" />
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    {toFa(hotel.rating)} / ۵
                  </p>

                  <p className="text-sm text-muted-foreground">
                    بر اساس {toFa(hotel.reviews)} نظر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ستون رزرو */}
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-lg lg:sticky lg:top-24">

            <p className="text-sm text-muted-foreground">
              قیمت هر شب اقامت
            </p>

            <div className="mt-3 flex flex-wrap items-baseline gap-2">
              <span className="text-3xl font-bold">
                {toFa(hotel.price.toLocaleString("en-US"))}
              </span>

              <span className="text-sm text-muted-foreground">
                تومان
              </span>
            </div>

            <div className="mt-6 rounded-xl bg-secondary/40 p-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-accent" />

                <span className="text-sm font-medium">
                  تاریخ اقامت
                </span>
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                برای رزرو، تاریخ ورود و خروج را انتخاب کنید.
              </p>
            </div>

            {/* دکمه رزرو */}
            <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed rounded-xl bg-foreground py-3 font-semibold text-background opacity-60"
            >
              رزرو اقامتگاه
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              قابلیت رزرو آنلاین به‌زودی اضافه می‌شود.
            </p>

          </aside>
        </div>
      </section>
    </main>
  );
}
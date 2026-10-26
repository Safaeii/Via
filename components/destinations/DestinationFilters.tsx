
"use client";

import {
  Search,
  X,
  SlidersHorizontal,
  MapPin,
  Hotel,
  Compass,
  Sparkles,
} from "lucide-react";

type DestinationFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  country: string;
  onCountryChange: (value: string) => void;
  minStays: string;
  onMinStaysChange: (value: string) => void;
  countries: string[];
  resultCount: number;
  onReset: () => void;
};

export function DestinationFilters({
  search,
  onSearchChange,
  country,
  onCountryChange,
  minStays,
  onMinStaysChange,
  countries,
  resultCount,
  onReset,
}: DestinationFiltersProps) {
  const hasActiveFilters =
    search !== "" || country !== "all" || minStays !== "all";

  return (
    <section className="relative mb-12 overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-300 p-5 shadow-2xl shadow-emerald-900/10 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-cyan-400/50 blur-3xl" />

      <div className="relative">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/60 text-emerald-700 shadow-lg backdrop-blur">
              <Compass className="h-7 w-7" />
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wide text-emerald-800">
                <Sparkles className="h-4 w-4" />
                ADVENTURE STARTS HERE
              </p>

              <h2 className="text-xl font-black text-emerald-950 sm:text-2xl">
                مقصد رؤیایی‌ات کجاست؟
              </h2>

              <p className="mt-2 text-sm text-emerald-900/75">
                مقصد بعدی سفرت رو پیدا کن!
              </p>
            </div>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-white hover:shadow-md"
            >
              <X className="h-4 w-4" />
              پاک کردن فیلترها
            </button>
          )}
        </div>

        <div className="space-y-6 rounded-3xl border border-white/80 bg-white/65 p-5 shadow-xl shadow-emerald-900/5 backdrop-blur-xl sm:p-7">
          <div>
            <label
              htmlFor="destination-search"
              className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-950"
            >
              <Search className="h-4 w-4 text-emerald-700" />
              دنبال چه مقصدی می‌گردی؟
            </label>

            <div className="relative">
              <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700" />

              <input
                id="destination-search"
                type="search"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="مثلاً پاریس، ژاپن یا بالی..."
                className="w-full rounded-2xl border-2 border-emerald-300 bg-gradient-to-l from-emerald-100 via-white to-cyan-100 py-4 pl-12 pr-12 text-sm text-emerald-950 shadow-md shadow-emerald-900/5 transition placeholder:text-emerald-800/50 hover:border-teal-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-400/20"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="پاک کردن جست‌وجو"
                  className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition hover:bg-emerald-200"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="destination-country"
                className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-950"
              >
                <MapPin className="h-4 w-4 text-emerald-700" />
                کشور مقصد
              </label>

              <select
                id="destination-country"
                value={country}
                onChange={(event) => onCountryChange(event.target.value)}
                className="w-full cursor-pointer rounded-2xl border-2 border-emerald-200 bg-gradient-to-l from-emerald-50 to-white px-4 py-4 text-sm text-emerald-950 transition hover:border-emerald-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-400/20"
              >
                <option value="all">همه کشورها</option>

                {countries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="destination-stays"
                className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-950"
              >
                <Hotel className="h-4 w-4 text-cyan-800" />
                تعداد اقامتگاه‌ها
              </label>

              <select
                id="destination-stays"
                value={minStays}
                onChange={(event) => onMinStaysChange(event.target.value)}
                className="w-full cursor-pointer rounded-2xl border-2 border-cyan-200 bg-gradient-to-l from-cyan-50 to-white px-4 py-4 text-sm text-emerald-950 transition hover:border-cyan-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-400/20"
              >
                <option value="all">بدون محدودیت</option>
                <option value="100">حداقل ۱۰۰ اقامتگاه</option>
                <option value="150">حداقل ۱۵۰ اقامتگاه</option>
                <option value="200">حداقل ۲۰۰ اقامتگاه</option>
                <option value="300">حداقل ۳۰۰ اقامتگاه</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/20 bg-gradient-to-l from-emerald-700 via-teal-600 to-cyan-600 p-5 text-white shadow-lg shadow-emerald-900/20 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <SlidersHorizontal className="h-6 w-6" />
              </div>

        
<div>
  <p className="text-sm text-white/80">
    نتایج جست‌وجو
  </p>

  <p className="mt-1 text-2xl font-black">
    {resultCount}
    <span className="mr-2 text-sm font-semibold">
      مقصد پیدا شد
    </span>
  </p>

  <p className="mt-2 text-sm leading-7 text-white/90">
    {resultCount > 0
      ? countries
          .filter((item) =>
            country === "all" ? true : item === country
          )
          .filter((item) =>
            search.trim() === ""
              ? true
              : item.toLocaleLowerCase("fa").includes(
                  search.trim().toLocaleLowerCase("fa")
                )
          )
          .join("، ") || "مقصدهای پیدا شده"
      : "شهری مطابق جست‌وجوی شما پیدا نشد"}
  </p>
</div>

            </div>

            <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold">
              {hasActiveFilters ? "فیلتر فعال است" : "همه مقصدها"}
            </span>
          </div>
        </div>

        <p className="mt-5 text-center text-xs font-medium text-emerald-950/70">
          دنیا پر از جاهای دیدنیه؛ سفر بعدی‌ات رو همین‌جا پیدا کن ✦
        </p>
      </div>
    </section>
  );
}

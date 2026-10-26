

import { Badge } from "@/components/ui/badge";
import CloudBackground from "@/components/CloudBackground";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      {/* Animated Background */}
      <CloudBackground />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950/45 via-slate-900/20 to-slate-950/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <Badge className="mb-5 border-white/25 bg-white/10 px-4 py-1.5 text-emerald-100 backdrop-blur-md">
          ویا؛ آغاز تجربه‌های تازه
        </Badge>

        <h1 className="max-w-3xl text-balance font-display text-3xl font-bold leading-relaxed text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
          سفر بعدی‌ات،
          <span className="block text-emerald-200">
            داستانی تازه برای زندگی
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-8 text-white/90 drop-shadow sm:text-base sm:leading-9">
          مقصدهای الهام‌بخش را کشف کن، اقامتگاه دلخواهت را پیدا کن و برای
          تجربه‌ای متفاوت آماده شو. با ویا، هر سفر می‌تواند آغاز یک خاطره
          ماندگار باشد.
        </p>
      </div>
    </section>
  );
}
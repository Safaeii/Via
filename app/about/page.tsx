
import Link from "next/link";
import { Compass, Heart, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import FogBackground from "@/components/FogBackground";
const features = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "کشف مقصدهای جدید",
    description:
      "از شهرهای پرجنب‌وجوش تا طبیعت بکر، مقصد بعدی سفرت را با ویا پیدا کن.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "تجربه‌ای متناسب با تو",
    description:
      "برای هر سلیقه‌ای، از سفرهای ماجراجویانه تا اقامت‌های آرامش‌بخش، ایده‌ای داریم.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "انتخابی آگاهانه",
    description:
      "اطلاعات موردنیازت را یک‌جا ببین و با آگاهی بیشتری برای سفر برنامه‌ریزی کن.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      
    
<section className="relative isolate overflow-hidden px-6 pb-24 pt-36">
  <FogBackground />

  {/* لایه ملایم برای خوانایی متن */}
  <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30" />

  {/* محتوای اصلی */}
  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-lg shadow-black/10 backdrop-blur-md">
      <Compass className="h-7 w-7" />
    </div>

    <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-100">
      درباره ویا
    </p>

    <h1 className="mb-6 text-3xl font-bold leading-relaxed text-white drop-shadow-lg sm:text-4xl md:text-5xl">
      هر سفر، فرصتی برای کشف
      <span className="mt-2 block text-emerald-200">
        دنیایی تازه است
      </span>
    </h1>

    <p className="mx-auto max-w-2xl text-sm leading-8 text-white/90 drop-shadow sm:text-base sm:leading-9">
      در ویا، مقصدهای الهام‌بخش را کشف کن، اقامتگاه دلخواهت را پیدا کن
      و برای ساختن خاطراتی ماندگار آماده شو. ما اینجاییم تا مسیر
      برنامه‌ریزی سفرت را ساده‌تر و لذت‌بخش‌تر کنیم.
    </p>

    <Link
      href="/#destinations"
      className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/90 px-7 py-3.5 font-semibold text-teal-900 shadow-lg shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white"
    >
      کشف مقصدها
      <ArrowRight className="h-4 w-4 rotate-180" />
    </Link>
  </div>
</section>

      {/* معرفی */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold text-emerald-600">
              داستان ما
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-relaxed">
              سفر کردن باید ساده‌تر از همیشه باشد
            </h2>

            <p className="mb-4 leading-9 text-muted-foreground">
              گاهی پیدا کردن یک مقصد جذاب، انتخاب محل اقامت و برنامه‌ریزی
              برای سفر به‌اندازه خود سفر زمان می‌برد. ویا با هدف ساده‌تر
              کردن این مسیر طراحی شده است.
            </p>

            <p className="leading-9 text-muted-foreground">
              ما می‌خواهیم فضایی فراهم کنیم تا بتوانی مقصدها را بررسی کنی،
              گزینه‌های مختلف را بشناسی و با خیال آسوده‌تری برای ماجراجویی
              بعدی خود تصمیم بگیری.
            </p>
          </div>

          <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-10 text-white">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full border border-white/20" />
            <div className="absolute -bottom-16 -right-8 h-64 w-64 rounded-full border border-white/20" />

            <div className="relative text-center">
              <Globe2 className="mx-auto mb-5 h-20 w-20" />
              <h3 className="mb-3 text-3xl font-extrabold">
                دنیا منتظر توست
              </h3>
              <p className="text-sm leading-7 text-white/85">
                مقصدی تازه، تجربه‌ای تازه، خاطره‌ای ماندگار
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ویژگی‌ها */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold text-emerald-600">
              چرا ویا؟
            </p>

            <h2 className="text-3xl font-bold">
              همراه تو در مسیر کشف
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-8 text-muted-foreground">
              ابزارهایی برای اینکه راحت‌تر انتخاب کنی و بیشتر از سفر لذت ببری.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  {feature.icon}
                </div>

                <h3 className="mb-3 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-8 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* دعوت به اقدام */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="mb-5 text-3xl font-extrabold">
            آماده‌ای مقصد بعدی‌ات را پیدا کنی؟
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-8 text-emerald-50">
            نگاهی به مقصدها و اقامتگاه‌های پیشنهادی ویا بینداز و برای سفر
            بعدی خودت الهام بگیر.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#destinations"
              className="rounded-xl bg-white px-6 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50"
            >
              مشاهده مقصدها
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
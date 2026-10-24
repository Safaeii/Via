import { Check, ArrowLeft } from 'lucide-react';
import { stats } from '@/lib/data';

export function PromoSection() {
  const perks = [
    'نرخ‌های ویژه اعضا تا ۲۰٪ تخفیف',
    'ارتقای رایگان اتاق در صورت امکان',
    'پشتیبانی اولویت‌دار از افراد واقعی',
    'لغو انعطاف‌پذیر در اقامتگاه‌های منتخب',
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 sm:p-14">
            <p className="mb-3 text-sm font-semibold tracking-wider text-accent">
              باشگاه ویا
            </p>
            <h2 className="max-w-md font-display text-3xl font-semibold leading-tight sm:text-4xl">
              بیشتر سفر کنید، کمتر هزینه کنید. به باشگاه بپیوندید.
            </h2>
            <p className="mt-4 max-w-md text-background/70">
              اعضا به نرخ‌های انحصاری، ارتقای اتاق و مزایای ویژه در بیش از ۸٬۵۰۰
              اقامتگاه شریک دسترسی دارند. عضویت رایگان است.
            </p>

            <ul className="mt-6 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110">
              عضویت در باشگاه ویا
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>

          <div className="border-t border-white/10 lg:border-r lg:border-t-0">
            <div className="grid grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-l border-white/10 p-8 last:border-l-0 [&:nth-last-child(-n+2)]:border-b-0"
                >
                  <p className="font-display text-4xl font-semibold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-background/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

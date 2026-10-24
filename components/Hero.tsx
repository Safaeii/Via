import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/417351/pexels-photo-417351.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center px-6 pt-28 pb-16">
        <Badge className="mb-5 border-white/30 bg-white/15 text-white backdrop-blur">
          بیش از ۱۲۰ مقصد دست‌چین‌شده برای ۲۰۲۶
        </Badge>

        <h1 className="max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
          جایی را پیدا کنید که همیشه به یادش خواهید ماند.
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          اقامتگاه‌های دست‌چین‌شده و تجربه‌های فراموش‌نشدنی را در زیباترین گوشه‌های
          جهان کشف کنید — همه در یک جستجو.
        </p>
      </div>
    </section>
  );
}

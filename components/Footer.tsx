import { Compass, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const columns = [
    {
      title: 'کاوش کنید',
      links: ['مقاصد', 'اقامتگاه‌ها', 'تجربه‌ها', 'راهنمای سفر'],
    },
    {
      title: 'شرکت',
      links: ['درباره ما', 'فرصت‌های شغلی', 'اخبار', 'پایداری'],
    },
    {
      title: 'پشتیبانی',
      links: ['مرکز راهنما', 'تماس با ما', 'لغو رزرو', 'امنیت و اعتماد'],
    },
  ];

  const socials = [Instagram, Twitter, Facebook, Youtube];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Compass className="h-5 w-5" />
              </span>
              <span className="text-xl font-semibold tracking-tight">ویا</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              اقامتگاه‌ها و تجربه‌های فراموش‌نشدنی را در سراسر جهان کشف و رزرو
              کنید — دست‌چین‌شده توسط کسانی که عاشق سفر هستند.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © ۲۰۲۶ ویا. تمام حقوق محفوظ است.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-accent">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-accent">
              قوانین
            </a>
            <a href="#" className="hover:text-accent">
              کوکی‌ها
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

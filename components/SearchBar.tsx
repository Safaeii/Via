import { Search, MapPin, Calendar, Users, ArrowLeft } from 'lucide-react';

export function SearchBar() {
  const fields = [
    { icon: MapPin, label: 'مقصد', placeholder: 'جستجوی مقاصد' },
    { icon: Calendar, label: 'تاریخ ورود', placeholder: 'تاریخ را انتخاب کنید' },
    { icon: Calendar, label: 'تاریخ خروج', placeholder: 'تاریخ را انتخاب کنید' },
    { icon: Users, label: 'مسافران', placeholder: '۲ بزرگسال' },
  ];

  return (
    <div className="mt-10 w-full rounded-2xl border border-white/40 bg-white/95 p-2 shadow-2xl shadow-black/10 backdrop-blur">
      <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex items-center gap-3 px-4 py-3"
          >
            <field.icon className="h-5 w-5 shrink-0 text-accent" />
            <div className="text-right">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                {field.label}
              </p>
              <p className="text-sm font-medium text-foreground/70">
                {field.placeholder}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-3 px-2 pb-1">
        <p className="hidden pr-2 text-xs text-muted-foreground sm:block">
          برای جستجوی بیش از ۸٬۵۰۰ اقامتگاه در سراسر جهان، کلید Enter را بزنید
        </p>
        <button className="mr-auto flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110">
          <Search className="h-4 w-4" />
          جستجو
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

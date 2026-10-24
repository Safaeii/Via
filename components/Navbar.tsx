import { Compass } from 'lucide-react';

export function Navbar() {
  const links = ['مقاصد', 'اقامتگاه‌ها', 'تجربه‌ها', 'درباره ما'];

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2 text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Compass className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight">ویا</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-lg shadow-black/5 transition-transform hover:scale-105">
          ورود
        </button>
      </nav>
    </header>
  );
}

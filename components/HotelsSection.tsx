import { Star, Heart, MapPin } from 'lucide-react';
import { hotels, toFa } from '@/lib/data';
import type { Hotel } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function HotelsSection() {
  return (
    <section id="stays" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-accent">
            دست‌چین‌شده برای شما
          </p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            اقامتگاه‌های منتخب
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            اقامتگاه‌های بوتیک، اقامتگاه‌های صخره‌ای و پناهگاه‌های شهری — همگی
            توسط کارشناسان سفر ما بررسی و تأیید شده‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-colors hover:text-rose-500">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          {toFa(hotel.rating)}
          <span className="font-normal text-white/70">
            ({toFa(hotel.reviews)})
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {hotel.location}
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-tight">
          {hotel.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {hotel.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-xl font-semibold text-foreground">
              {toFa(hotel.price.toLocaleString('en-US'))}
              <span className="mr-1 text-sm font-normal text-muted-foreground">
                تومان
              </span>
            </p>
            <p className="text-xs text-muted-foreground">برای هر شب</p>
          </div>
          <button className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-accent-foreground">
            مشاهده پیشنهاد
          </button>
        </div>
      </div>
    </article>
  );
}

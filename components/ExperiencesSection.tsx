import {
  Waves,
  Mountain,
  Fish,
  UtensilsCrossed,
  Flower2,
  ArrowLeft,
} from 'lucide-react';
import { experiences } from '@/lib/data';
import type { Experience } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Mountain,
  Fish,
  UtensilsCrossed,
  Flower2,
};

export function ExperiencesSection() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold tracking-wider text-accent">
          فراتر از یک اقامت
        </p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          تجربه‌های دست‌چین‌شده
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            featured={i === 0}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  featured,
}: {
  experience: Experience;
  featured?: boolean;
}) {
  const Icon = iconMap[experience.icon] ?? Waves;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl ${
        featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div
        className={`relative ${featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}`}
      >
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <h3
          className={`font-semibold leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}
        >
          {experience.title}
        </h3>
        <p className="mt-1 max-w-sm text-sm text-white/80">
          {experience.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
          بیشتر بدانید
          <ArrowLeft className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}

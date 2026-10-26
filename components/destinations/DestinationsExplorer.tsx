
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { destinations, toFa } from "@/lib/data";
import { DestinationFilters } from "./DestinationFilters";

export function DestinationsExplorer() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [minStays, setMinStays] = useState("all");

  const countries = useMemo(
    () => [...new Set(destinations.map((item) => item.country))],
    [],
  );

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("fa");

    return destinations.filter((item) => {
      const matchesSearch =
        item.name.toLocaleLowerCase("fa").includes(query) ||
        item.country.toLocaleLowerCase("fa").includes(query);

      const matchesCountry =
        country === "all" || item.country === country;

      const matchesStays =
        minStays === "all" || item.stays >= Number(minStays);

      return matchesSearch && matchesCountry && matchesStays;
    });
  }, [search, country, minStays]);

  function resetFilters() {
    setSearch("");
    setCountry("all");
    setMinStays("all");
  }

  return (
    <div>
      <DestinationFilters
        search={search}
        onSearchChange={setSearch}
        country={country}
        onCountryChange={setCountry}
        minStays={minStays}
        onMinStaysChange={setMinStays}
        countries={countries}
        resultCount={filteredDestinations.length}
        onReset={resetFilters}
      />

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                {destination.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs text-white/80">
                  {destination.country}
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  {destination.name}
                </h2>

                <p className="mt-2 text-xs text-white/80">
                  {toFa(destination.stays)} اقامتگاه
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border px-6 py-12 text-center">
          <p className="text-lg font-semibold">
            مقصدی پیدا نشد!
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            عبارت جست‌وجو یا فیلترها را تغییر بده.
          </p>
        </div>
      )}
    </div>
  );
}

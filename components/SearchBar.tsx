"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  CalendarDays,
  Users,
  ArrowLeft,
  Minus,
  Plus,
} from "lucide-react";

import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

type CalendarType = "persian" | "gregorian";

export function SearchBar() {
  const [destination, setDestination] = useState<string>("");
  const [checkIn, setCheckIn] = useState<DateObject | null>(null);
  const [checkOut, setCheckOut] = useState<DateObject | null>(null);
  const [guests, setGuests] = useState<number>(2);
  const [calendarType, setCalendarType] =
    useState<CalendarType>("persian");

  const calendar = calendarType === "persian" ? persian : gregorian;
  const locale = calendarType === "persian" ? persian_fa : gregorian_en;

  const handleCheckInChange = (date: DateObject | null) => {
    setCheckIn(date);

    if (
      date &&
      checkOut &&
      date.toDate().getTime() > checkOut.toDate().getTime()
    ) {
      setCheckOut(null);
    }
  };

  const handleSearch = () => {
    if (!destination.trim()) {
      alert("لطفاً مقصد موردنظرت را وارد کن");
      return;
    }

    if (!checkIn || !checkOut) {
      alert("لطفاً تاریخ ورود و خروج را انتخاب کن");
      return;
    }

    if (checkOut.toDate().getTime() <= checkIn.toDate().getTime()) {
      alert("تاریخ خروج باید بعد از تاریخ ورود باشد");
      return;
    }

    alert(
      `مقصد: ${destination}\n` +
        `تاریخ ورود: ${checkIn.format("YYYY/MM/DD")}\n` +
        `تاریخ خروج: ${checkOut.format("YYYY/MM/DD")}\n` +
        `تعداد مسافران: ${guests}`
    );
  };

  const datePickerClass =
    "w-full cursor-pointer border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-foreground/70";

  return (
    <div
      dir="rtl"
      className="mt-10 w-full rounded-2xl border border-white/40 bg-white/95 p-3 shadow-2xl shadow-black/10 backdrop-blur"
    >
      {/* فیلدهای جستجو */}
      <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-x-reverse">

        {/* مقصد */}
        <div className="flex min-w-0 items-center gap-3 px-4 py-3">
          <MapPin className="h-5 w-5 shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label
              htmlFor="destination"
              className="mb-1 block text-xs font-semibold text-muted-foreground"
            >
              مقصد
            </label>

            <input
              id="destination"
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="نام شهر یا کشور"
              className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-foreground/70"
            />
          </div>
        </div>

        {/* تاریخ ورود */}
        <div className="flex min-w-0 items-center gap-3 px-4 py-3">
          <CalendarDays className="h-5 w-5 shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label className="mb-2 block text-xs font-semibold text-muted-foreground">
              تاریخ ورود
            </label>

            <DatePicker
              value={checkIn}
              onChange={(date) =>
                handleCheckInChange(
                  date && !Array.isArray(date) ? date : null
                )
              }
              calendar={calendar}
              locale={locale}
              format="YYYY/MM/DD"
              minDate={new DateObject({
                calendar,
                locale,
              })}
              calendarPosition="bottom-right"
              inputClass={datePickerClass}
              placeholder="انتخاب تاریخ ورود"
              editable={false}
            />
          </div>
        </div>

        {/* تاریخ خروج */}
        <div className="flex min-w-0 items-center gap-3 px-4 py-3">
          <CalendarDays className="h-5 w-5 shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <label className="mb-2 block text-xs font-semibold text-muted-foreground">
              تاریخ خروج
            </label>

            <DatePicker
              value={checkOut}
              onChange={(date) =>
                setCheckOut(
                  date && !Array.isArray(date) ? date : null
                )
              }
              calendar={calendar}
              locale={locale}
              format="YYYY/MM/DD"
              minDate={
                checkIn ||
                new DateObject({
                  calendar,
                  locale,
                })
              }
              calendarPosition="bottom-right"
              inputClass={datePickerClass}
              placeholder="انتخاب تاریخ خروج"
              editable={false}
            />
          </div>
        </div>

        {/* تعداد مسافران */}
        <div className="flex min-w-0 items-center gap-3 px-4 py-3">
          <Users className="h-5 w-5 shrink-0 text-accent" />

          <div className="min-w-0 flex-1">
            <p className="mb-2 text-xs font-semibold text-muted-foreground">
              مسافران
            </p>

            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">
                {guests.toLocaleString("fa-IR")} بزرگسال
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="کاهش تعداد مسافران"
                  disabled={guests <= 1}
                  onClick={() => setGuests((current) => current - 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={14} />
                </button>

                <button
                  type="button"
                  aria-label="افزایش تعداد مسافران"
                  disabled={guests >= 20}
                  onClick={() => setGuests((current) => current + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* پایین نوار جستجو */}
      <div className="mt-3 flex flex-col gap-3 border-t border-border pt-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 px-2">
          <span className="text-xs text-muted-foreground">
            نوع تقویم:
          </span>

          <button
            type="button"
            onClick={() => {
              setCalendarType((current) =>
                current === "persian" ? "gregorian" : "persian"
              );
            }}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
          >
            {calendarType === "persian"
              ? "شمسی"
              : "میلادی"}
            {" · تغییر"}
          </button>
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
        >
          <Search className="h-4 w-4" />
          جستجو
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Mail, LockKeyhole } from "lucide-react";
import FogBackground from "@/components/FogBackground";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      alert("لطفاً ایمیل و رمز عبور را وارد کنید");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("لطفاً یک ایمیل معتبر وارد کنید");
      return;
    }

    alert("اعتبارسنجی اطلاعات با موفقیت انجام شد!");
  };

  return (
    <main
      dir="rtl"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-emerald-100 px-4 py-10"
    >
      {/* بک‌گراند متحرک */}
      <FogBackground />

      {/* لایه ملایم روی بک‌گراند */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white/10" />

      {/* فرم ورود */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl md:p-10">

        {/* لوگو */}
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-emerald-600/30">
            V
          </span>

          <span className="text-3xl font-bold text-slate-800">
            ویا
          </span>
        </Link>

        {/* عنوان */}
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-800">
            خوش برگشتی!
          </h1>

          <p className="text-sm leading-7 text-slate-500">
            برای ادامه سفر، وارد حساب کاربری‌ات شو.
          </p>
        </div>

        {/* فرم */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* ایمیل */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              ایمیل
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="email"
                name="email"
                type="email"
                dir="ltr"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@email.com"
                autoComplete="email"
                className="w-full rounded-xl border border-slate-200 bg-white/70 py-3 pl-4 pr-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>
          </div>

          {/* رمز عبور */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              رمز عبور
            </label>

            <div className="relative">
              <LockKeyhole
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="رمز عبور خود را وارد کنید"
                autoComplete="current-password"
                className="w-full rounded-xl border border-slate-200 bg-white/70 py-3 pl-12 pr-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? "مخفی کردن رمز عبور"
                    : "نمایش رمز عبور"
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-emerald-600"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* فراموشی رمز */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-emerald-700 transition hover:text-emerald-500"
            >
              رمز عبور را فراموش کرده‌ام
            </Link>
          </div>

          {/* دکمه ورود */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            ورود به حساب
          </button>
        </form>

        {/* ثبت‌نام */}
        <p className="mt-8 text-center text-sm text-slate-500">
          هنوز حساب کاربری نداری؟

          <Link
            href="/signup"
            className="mr-2 font-bold text-emerald-700 transition hover:text-cyan-600"
          >
            ثبت‌نام کن
          </Link>
        </p>

        {/* بازگشت */}
        <Link
          href="/"
          className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-500 transition hover:text-emerald-700"
        >
          <ArrowRight size={17} />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
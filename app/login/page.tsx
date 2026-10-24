"use client";

import { useState } from "react";
import Link from "next/link";

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
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white bg-white/90 p-8 shadow-xl shadow-blue-900/10">

        {/* لوگو */}
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
            V
          </span>

          <span className="text-2xl font-bold text-slate-800">
            ویا
          </span>
        </Link>

        {/* عنوان */}
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-800">
            خوش برگشتی!
          </h1>

          <p className="text-sm text-slate-500">
            برای ادامه سفر، وارد حساب کاربری‌ات شو.
          </p>
        </div>

        {/* فرم ورود */}
        <form className="space-y-5" onSubmit={handleLogin}>

          {/* ایمیل */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              ایمیل
            </label>

            <input
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
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
              <input
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور خود را وارد کنید"
                autoComplete="current-password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pl-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                aria-label={
                  showPassword
                    ? "مخفی کردن رمز عبور"
                    : "نمایش رمز عبور"
                }
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* فراموشی رمز */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-blue-600 transition hover:text-cyan-600"
            >
              رمز عبور را فراموش کرده‌ام
            </Link>
          </div>

          {/* دکمه ورود */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            ورود به حساب
          </button>
        </form>

        {/* ثبت‌نام */}
        <p className="mt-7 text-center text-sm text-slate-500">
          هنوز حساب کاربری نداری؟

          <Link
            href="/signup"
            className="mr-2 font-bold text-blue-600 transition hover:text-cyan-600"
          >
            ثبت‌نام کن
          </Link>
        </p>

        {/* بازگشت به صفحه اصلی */}
        <Link
          href="/"
          className="mt-6 block text-center text-sm text-slate-400 transition hover:text-blue-600"
        >
          ← بازگشت به صفحه اصلی
        </Link>

      </div>
    </main>
  );
}
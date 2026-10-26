



"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Mail, LockKeyhole } from "lucide-react";
import FogBackground from "@/components/FogBackground";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      alert("لطفاً ایمیل و رمز عبور را وارد کنید");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("لطفاً یک ایمیل معتبر وارد کنید");
      return;
    }

    alert("اعتبارسنجی اطلاعات با موفقیت انجام شد!");
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white/70 py-2 pl-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

  return (
    <main
      dir="rtl"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-emerald-100 px-4 py-3"
    >
      <FogBackground />
      <div className="pointer-events-none absolute inset-0 z-0 bg-white/10" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl md:p-6">
        <Link href="/" className="mb-3 flex items-center justify-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-500 text-xl font-bold text-white shadow-lg shadow-emerald-600/30">
            V
          </span>
          <span className="text-2xl font-bold text-slate-800">ویا</span>
        </Link>

        <div className="mb-4 text-center">
          <h1 className="mb-1 text-2xl font-bold text-slate-800">
            خوش برگشتی!
          </h1>
          <p className="text-sm leading-5 text-slate-500">
            برای ادامه سفر، وارد حساب کاربری‌ات شو.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-2.5">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
              ایمیل
            </label>
            <div className="relative">
              <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                autoComplete="email"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-slate-700">
              رمز عبور
            </label>
            <div className="relative">
              <LockKeyhole size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد کنید"
                autoComplete="current-password"
                className={`${inputClass} pl-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-emerald-600"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-xs font-medium text-emerald-700 transition hover:text-emerald-500">
              رمز عبور را فراموش کرده‌ام
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            ورود به حساب
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          هنوز حساب کاربری نداری؟
          <Link href="/signup" className="mr-2 font-bold text-emerald-700 transition hover:text-cyan-600">
            ثبت‌نام کن
          </Link>
        </p>

        <Link href="/" className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 transition hover:text-emerald-700">
          <ArrowRight size={16} />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
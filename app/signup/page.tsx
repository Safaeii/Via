"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import FogBackground from "@/components/FogBackground";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white/70 py-1.5 pl-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      alert("لطفاً تمام فیلدها را پر کنید");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("لطفاً یک ایمیل معتبر وارد کنید");
      return;
    }

    if (password.length < 8 || !/[0-9]/.test(password)) {
      alert("رمز عبور باید حداقل ۸ کاراکتر و شامل یک عدد باشد");
      return;
    }

    if (password !== confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیستند");
      return;
    }

    alert("اعتبارسنجی با موفقیت انجام شد!");
  };

  return (
    <main
      dir="rtl"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-emerald-100 px-4 py-2"
    >
      <FogBackground />
      <div className="pointer-events-none absolute inset-0 z-0 bg-white/10 " />

      <div className="relative mt-10  z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-4 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl md:p-5">
        <Link href="/" className="mb-2 flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-500 text-lg font-bold text-white">
            V
          </span>
          <span className="text-xl font-bold text-slate-800">ویا</span>
        </Link>

        <div className="mb-3 text-center">
          <h1 className="mb-1 text-xl font-bold text-slate-800">
            به ویا خوش اومدی!
          </h1>
          <p className="text-xs leading-5 text-slate-500">
            حساب کاربری بساز و سفر بعدی‌ات رو شروع کن.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-semibold text-slate-700">
              نام و نام خانوادگی
            </label>
            <div className="relative">
              <User size={17} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="نام خودت رو وارد کن"
                autoComplete="name"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-semibold text-slate-700">
              ایمیل
            </label>
            <div className="relative">
              <Mail size={17} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
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
            <label htmlFor="password" className="mb-1 block text-xs font-semibold text-slate-700">
              رمز عبور
            </label>
            <div className="relative">
              <LockKeyhole size={17} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="حداقل ۸ کاراکتر"
                autoComplete="new-password"
                className={`${inputClass} pl-11`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-1 block text-xs font-semibold text-slate-700">
              تکرار رمز عبور
            </label>
            <div className="relative">
              <LockKeyhole size={17} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="تکرار رمز عبور"
                autoComplete="new-password"
                className={`${inputClass} pl-11`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            ساخت حساب کاربری
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-slate-500">
          قبلاً ثبت‌نام کردی؟
          <Link href="/login" className="mr-2 font-bold text-emerald-700 hover:text-cyan-600">
            وارد شو
          </Link>
        </p>

        <Link href="/" className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500 hover:text-emerald-700">
          <ArrowRight size={15} />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
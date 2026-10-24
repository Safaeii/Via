"use client";
import { useState } from "react";



export default function SignupPage() {




// name
const [name, setName] = useState<string>("");
// email
const [email, SetEmail]=useState<string>("")
// password
const [password, setPassword] = useState<string>("");
// confirmPassword
const [confirmPassword, setConfirmPassword] = useState<string>("");
// showPassword
const [showPassword, setShowPassword] = useState<boolean>(false);
// handleSubmit
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // بررسی خالی نبودن فیلدها
  if (!name || !email || !password || !confirmPassword) {
    alert("لطفاً تمام فیلدها را پر کنید");
    return;
  }

  // بررسی حداقل طول رمز عبور
  if (password.length < 8) {
    alert("رمز عبور باید حداقل ۸ کاراکتر باشد");
    return;
  }

  // بررسی وجود حداقل یک عدد
  if (!/[0-9]/.test(password)) {
    alert("رمز عبور باید حداقل یک عدد داشته باشد");
    return;
  }

  // بررسی یکسان بودن رمزها
  if (password !== confirmPassword) {
    alert("رمز عبور و تکرار آن یکسان نیستند");
    return;
  }

  // ثبت‌نام آزمایشی
  alert("اعتبارسنجی با موفقیت انجام شد!");
};
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white bg-white/90 p-8 shadow-xl shadow-blue-900/10">

        {/* Logo */}
        <a href="/" className="mb-7 flex items-center justify-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
            V
          </span>
          <span className="text-2xl font-bold text-slate-800">
            ویا
          </span>
        </a>

        {/* Title */}
        <div className="mb-7 text-center">
          <h1 className="mb-3 text-3xl font-bold text-slate-800">
            به ویا خوش اومدی!
          </h1>
          <p className="text-sm text-slate-500">
            حساب کاربری بساز و سفر بعدی‌ات رو شروع کن.
          </p>
        </div>

        {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              نام و نام خانوادگی
            </label>
            <input
     onChange={(event) => setName(event.target.value)}
            value={name}
              type="text"
              placeholder="نام خودت رو وارد کن"
               className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              ایمیل
            </label>
            <input
            onChange={(event)=> SetEmail(event.target.value)}
            value={email}
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

{/* Password */}
<div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    رمز عبور
  </label>

  <div className="relative">
    <input
      onChange={(event) => setPassword(event.target.value)}
      value={password}
      type={showPassword ? "text" : "password"}
      placeholder="حداقل ۸ کاراکتر"
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pl-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
      aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  </div>
</div>

{/* Confirm Password */}
<div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    تکرار رمز عبور
  </label>

  <div className="relative">
    <input
      onChange={(event) => setConfirmPassword(event.target.value)}
      value={confirmPassword}
      type={showPassword ? "text" : "password"}
      placeholder="رمز عبورت رو دوباره وارد کن"
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pl-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
      aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  </div>
</div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            ساخت حساب کاربری
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-500">
          قبلاً ثبت‌نام کردی؟
          <a
            href="/login"
            className="mr-2 font-bold text-blue-600 transition hover:text-cyan-600"
          >
            وارد شو
          </a>
        </p>

        {/* Back to Home */}
        <a
          href="/"
          className="mt-5 block text-center text-sm text-slate-400 transition hover:text-blue-600"
        >
          ← بازگشت به صفحه اصلی
        </a>
      </div>
    </main>
  );
}
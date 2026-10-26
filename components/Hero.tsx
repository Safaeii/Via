

// import { Badge } from "@/components/ui/badge";
// import CloudBackground from "@/components/CloudBackground";

// export function Hero() {
//   return (
//     <section className="relative isolate min-h-[92vh] overflow-hidden">
//       {/* Animated Background */}
//       <CloudBackground />

//       {/* Dark Overlay */}
//       <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950/45 via-slate-900/20 to-slate-950/60" />

//       {/* Hero Content */}
//       <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
       
  
// <Badge className="group relative mb-6 overflow-hidden rounded-full border border-white/30 bg-white/[0.08] px-5 py-2 text-emerald-50 shadow-[0_0_25px_rgba(45,212,191,0.2)] backdrop-blur-xl before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-1000 hover:before:translate-x-full">
//   <span className="relative z-10 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text font-semibold text-transparent drop-shadow-[0_0_8px_rgba(94,234,212,0.7)]">
//     ✦ ویا؛ آغاز تجربه‌های تازه
//   </span>
// </Badge>



//         <h1 className="max-w-3xl text-balance font-display text-3xl font-bold leading-relaxed text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
//           سفر بعدی‌ات،
//           <span className="block text-emerald-200">
//             داستانی تازه برای زندگی
//           </span>
//         </h1>

//         <p className="mt-5 max-w-2xl text-sm leading-8 text-white/90 drop-shadow sm:text-base sm:leading-9">
//           مقصدهای الهام‌بخش را کشف کن، اقامتگاه دلخواهت را پیدا کن و برای
//           تجربه‌ای متفاوت آماده شو. با ویا، هر سفر می‌تواند آغاز یک خاطره
//           ماندگار باشد.
//         </p>
//       </div>
//     </section>
//   );
// }



import { Badge } from "@/components/ui/badge";
import CloudBackground from "@/components/CloudBackground";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden sm:min-h-[92vh]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <CloudBackground />
      </div>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-950/45 via-slate-900/20 to-slate-950/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-4xl flex-col items-center justify-center px-4 pb-12 pt-28 text-center sm:min-h-[92vh] sm:px-6 sm:pb-16 sm:pt-28">
        <Badge className="group relative mb-6 overflow-hidden rounded-full border border-white/30 bg-white/[0.08] px-5 py-2 text-emerald-50 shadow-[0_0_25px_rgba(45,212,191,0.2)] backdrop-blur-xl before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-1000 hover:before:translate-x-full">
          <span className="relative z-10 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text font-semibold text-transparent drop-shadow-[0_0_8px_rgba(94,234,212,0.7)]">
            ✦ ویا؛ آغاز تجربه‌های تازه
          </span>
        </Badge>

        <h1 className="max-w-3xl text-balance font-display text-3xl font-bold leading-relaxed text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
          سفر بعدی‌ات،
          <span className="block text-emerald-200">
            داستانی تازه برای زندگی
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-8 text-white/90 drop-shadow sm:text-base sm:leading-9">
          مقصدهای الهام‌بخش را کشف کن، اقامتگاه دلخواهت را پیدا کن و برای
          تجربه‌ای متفاوت آماده شو. با ویا، هر سفر می‌تواند آغاز یک خاطره
          ماندگار باشد.
        </p>
      </div>
    </section>
  );
}

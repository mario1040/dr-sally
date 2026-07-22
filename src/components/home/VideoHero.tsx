"use client";

import React from "react";
import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import {
ArrowRight,
ArrowLeft,
Sparkles,
Star,
ShieldCheck,
HeartPulse,
BadgeCheck,
SunMedium,
MoveUpRight,
} from "lucide-react";

const EditorialHeroSection = () => {
const { t, isRTL } = useLanguage();
const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useTransform(mouseY, [-0.5, 0.5], [9, -9]);
const rotateY = useTransform(mouseX, [-0.5, 0.5], [-9, 9]);

const container: Variants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.12,
delayChildren: 0.1,
},
},
};

const fadeUp: Variants = {
hidden: { opacity: 0, y: 28 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.85,
ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
},
},
};

const smallCards = [
{
title: isRTL ? "دقة طبية" : "Medical Precision",
desc: isRTL ? "تفاصيل محسوبة ونتائج هادئة." : "Measured detail, calm results.",
icon: ShieldCheck,
},
{
title: isRTL ? "جمال طبيعي" : "Natural Beauty",
desc: isRTL ? "لمسة أنيقة بلا مبالغة." : "Elegant, never exaggerated.",
icon: Sparkles,
},
{
title: isRTL ? "رعاية متقدمة" : "Advanced Care",
desc: isRTL ? "خبرة واضحة وثقة حقيقية." : "Clear expertise, real trust.",
icon: HeartPulse,
},
];

const heroImage = "/images/OES02643.jpg"; // غيّر المسار حسب صورة الدكتورة

const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
const rect = e.currentTarget.getBoundingClientRect();
const x = (e.clientX - rect.left) / rect.width - 0.5;
const y = (e.clientY - rect.top) / rect.height - 0.5;
mouseX.set(x);
mouseY.set(y);
};

const resetMove = () => {
mouseX.set(0);
mouseY.set(0);
};

return ( <section className="relative min-h-[100svh] overflow-hidden bg-[#fffaf4] text-slate-900 pt-28 lg:pt-32 ">
{/* Background */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,250,244,1)_35%,rgba(246,237,226,1)_100%)]" /> <div className="absolute -top-28 left-[-9rem] h-[30rem] w-[30rem] rounded-full bg-amber-200/35 blur-3xl" /> <div className="absolute right-[-9rem] top-10 h-[26rem] w-[26rem] rounded-full bg-rose-200/30 blur-3xl" /> <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-white/75 blur-3xl" /> <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

  <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Badge */}
      <motion.div variants={fadeUp} className="mb-8 flex justify-center lg:justify-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-700 shadow-[0_12px_30px_rgba(150,110,60,0.1)] backdrop-blur-md">
          <SunMedium className="h-4 w-4" />
          {isRTL ? "سكشن بصري مختلف" : "A Different Visual Section"}
        </div>
      </motion.div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left editorial text block */}
        <motion.div variants={fadeUp} className="order-2 lg:order-1">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 md:text-6xl lg:text-[5.4rem]">
              {isRTL ? (
                <>
                  سالي
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-amber-500 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                      بطابع فني
                    </span>
                    <span className="absolute bottom-3 left-0 right-0 h-4 rounded-full bg-amber-200/60 blur-md" />
                  </span>
                </>
              ) : (
                <>
                  Dr. Sally
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-amber-500 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                      in an Editorial Mood
                    </span>
                    <span className="absolute bottom-3 left-0 right-0 h-4 rounded-full bg-amber-200/60 blur-md" />
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              {t.hero.description ||
                (isRTL
                  ? "بدل layout تقليدي، الهيرو هنا مبني كقطعة فنية: صورة أكبر، عمق بصري، وطبقات ضوء ناعمة تحافظ على وضوح الوجه وتخلي التصميم أفخم."
                  : "Instead of a standard layout, this hero feels like an art piece: a larger portrait, soft depth, and layered light that keeps the face clear while making the design feel premium.") }
            </p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-amber-800">
                {isRTL ? "جمال طبيعي" : "Natural Beauty"}
              </span>
              <span className="rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-amber-800">
                {isRTL ? "نتائج هادئة" : "Soft Results"}
              </span>
              <span className="rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-amber-800">
                {isRTL ? "رعاية دقيقة" : "Precision Care"}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact-us" className="group inline-flex">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]"
                >
                  {t.hero.cta || (isRTL ? "احجزي الآن" : "Book Now")}
                  <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </motion.div>
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {isRTL ? "تجربة راقية من أول نظرة" : "Elegant from the first glance"}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid gap-3 sm:grid-cols-3">
              {smallCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-[1.4rem] border border-white/80 bg-white/82 p-4 shadow-[0_14px_40px_rgba(120,90,50,0.08)] backdrop-blur-md"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">{card.title}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-600">{card.desc}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Right portrait stage - bigger and clear */}
        <motion.div
          variants={fadeUp}
          className="order-1 lg:order-2"
          onMouseMove={handleMove}
          onMouseLeave={resetMove}
        >
          <div className="relative mx-auto max-w-[720px]">
            {/* Big halo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/75 border-dashed opacity-60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-200/70 border-dashed opacity-55"
            />

            {/* Main portrait card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-[min(100%,520px)] overflow-hidden rounded-[2.9rem] border border-white/90 bg-white shadow-[0_28px_90px_rgba(120,90,50,0.18)]"
            >
              <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(255,255,255,0.18),transparent_25%,transparent_70%,rgba(255,255,255,0.20))]" />
              <div className="absolute inset-x-0 bottom-0 z-10 h-44 bg-[linear-gradient(to_top,rgba(255,246,236,0.95),transparent)]" />

              <img
                src={heroImage}
                alt="Dr. Sally"
                className="h-[720px] w-full object-cover object-top"
              />

              {/* name plate */}
              <div className="absolute bottom-6 left-6 z-20 rounded-full border border-white/80 bg-white/85 px-5 py-3 shadow-[0_10px_30px_rgba(120,90,50,0.08)] backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
                  {isRTL ? "الدكتورة سالي" : "Dr. Sally"}
                </div>
                <div className="mt-1 text-[11px] font-medium tracking-[0.14em] text-slate-600">
                  {isRTL ? "Cosmetic Dermatology" : "Cosmetic Dermatology"}
                </div>
              </div>

              {/* glow edge */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.9rem] border border-white/70" />
            </motion.div>

            {/* Cards placed outside the face area */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="absolute -left-2 top-14 hidden w-[190px] rounded-[1.25rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_50px_rgba(120,90,50,0.1)] backdrop-blur-md xl:block"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {isRTL ? "دقة طبية" : "Medical Precision"}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">
                    {isRTL ? "بعيدًا عن الوجه ومثبتة على الهامش." : "Placed safely off the face area."}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -right-4 top-28 hidden w-[190px] rounded-[1.25rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_50px_rgba(120,90,50,0.1)] backdrop-blur-md xl:block"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {isRTL ? "جمال طبيعي" : "Natural Glow"}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">
                    {isRTL ? "التفاصيل تبقى واضحة والصورة أكبر." : "Bigger portrait, cleaner composition."}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="absolute -bottom-6 left-10 hidden w-[210px] rounded-[1.25rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_50px_rgba(120,90,50,0.1)] backdrop-blur-md xl:block"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {isRTL ? "تجربة موثوقة" : "Trusted Experience"}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">
                    {isRTL ? "كروت جانبية، لا تحجب الوجه." : "Side cards only, no face overlap."}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute -bottom-8 right-10 hidden rounded-full border border-white/80 bg-white/90 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-700 shadow-[0_12px_30px_rgba(120,90,50,0.08)] backdrop-blur-md lg:inline-flex"
            >
              <div className="flex items-center gap-2">
                <MoveUpRight className="h-4 w-4 text-amber-600" />
                {isRTL ? "Visual Storytelling" : "Visual Storytelling"}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom ribbon */}
      <motion.div
        variants={fadeUp}
        className="mt-14 flex flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/78 px-5 py-4 shadow-[0_14px_40px_rgba(120,90,50,0.08)] backdrop-blur-md md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">
              {isRTL ? "Hero مختلف فعلًا" : "A truly different hero"}
            </div>
            <div className="text-xs text-slate-600">
              {isRTL
                ? "أكبر صورة، كروت خارج الوجه، وإحساس مجلات فاخرة."
                : "Bigger portrait, cards away from the face, and an editorial luxury feel."}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-700">
          <div className="flex items-center gap-1 text-amber-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span className="font-medium">
            {isRTL ? "مناسب للواجهة البيضاء" : "Perfect for a light interface"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

);
};

export default EditorialHeroSection;

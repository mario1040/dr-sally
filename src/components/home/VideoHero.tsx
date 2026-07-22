"use client";

import React, { useRef } from "react";
import {
  motion,
  Variants,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
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
} from "lucide-react";

/**
 * ── Design notes ──────────────────────────────────────────────────────────
 * Palette   #FAF6F0 ivory · #211D19 ink · #B8874A gold · #A24B3B clay
 *           #4A2436 plum   · #F0E4D6 porcelain
 * Type      Fraunces (display, editorial serif) / Manrope (body)
 *           / IBM Plex Mono (clinical labels — precision motif)
 * Signature The "light chamber": a true CSS-3D perspective stage where the
 *           portrait sits on a glass plane flanked by two floating panels
 *           at different Z-depths, all swaying together as one object when
 *           the cursor moves — plus a slow light-sweep across the glass.
 * ───────────────────────────────────────────────────────────────────────── */

const EditorialHeroSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const prefersReducedMotion = useReducedMotion();

  // ── global cursor field (drives the 3D chamber + parallax orbs) ──
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.4 });

  const stageRotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const stageRotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const orbShiftX = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const orbShiftY = useTransform(sy, [-0.5, 0.5], [-24, 24]);

  const handleFieldMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetField = () => {
    mx.set(0);
    my.set(0);
  };

  // ── magnetic CTA ──
  const btnRef = useRef<HTMLDivElement>(null);
  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const bxs = useSpring(bx, { stiffness: 220, damping: 18 });
  const bys = useSpring(by, { stiffness: 220, damping: 18 });
  const handleBtnMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    bx.set(((e.clientX - r.left) / r.width - 0.5) * 18);
    by.set(((e.clientY - r.top) / r.height - 0.5) * 18);
  };
  const resetBtn = () => {
    bx.set(0);
    by.set(0);
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };
  const wordIn: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -50 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const headlineTop = isRTL ? "سالي" : "Dr. Sally";
  const headlineBottomWords = isRTL
    ? ["بطابع", "فني", "لا", "يُنسى"]
    : ["Sculpted", "in", "quiet", "light"];

  const specimens = [
    {
      label: isRTL ? "دقة طبية" : "Precision",
      note: isRTL ? "تفاصيل محسوبة" : "Measured detail",
      icon: ShieldCheck,
    },
    {
      label: isRTL ? "جمال طبيعي" : "Beauty",
      note: isRTL ? "بلا مبالغة" : "Never exaggerated",
      icon: Sparkles,
    },
    {
      label: isRTL ? "رعاية" : "Care",
      note: isRTL ? "ثقة حقيقية" : "Real trust",
      icon: HeartPulse,
    },
  ];

  const marqueeWords = isRTL
    ? ["بوتوكس", "فيلر", "تجديد البشرة", "ليزر", "هيدرافيشل", "تقشير كيميائي"]
    : ["BOTOX", "FILLERS", "SKIN RESURFACING", "LASER THERAPY", "HYDRAFACIAL", "CHEMICAL PEELS"];

  const heroImage = "/images/OES02643.jpg";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-[100svh] overflow-hidden bg-[#FAF6F0] text-[#211D19] pt-28 lg:pt-32"
      style={{ fontFamily: "'Manrope', ui-sans-serif, system-ui" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,420;0,9..144,600;0,9..144,700;1,9..144,500&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .eh-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .eh-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        @keyframes eh-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes eh-marquee-rtl { from { transform: translateX(0); } to { transform: translateX(50%); } }
        @keyframes eh-sweep { 0% { transform: translate(-30%, -30%) rotate(18deg); } 100% { transform: translate(30%, 30%) rotate(18deg); } }
        .eh-marquee-track { animation: eh-marquee 26s linear infinite; }
        .eh-marquee-track.rtl { animation-name: eh-marquee-rtl; }
        .eh-sweep { animation: eh-sweep 7s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) {
          .eh-marquee-track, .eh-sweep { animation: none !important; }
        }
      `}</style>

      {/* ── background field ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,#FAF6F0_38%,#F0E4D6_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          clipPath: isRTL
            ? "polygon(0 0, 38% 0, 22% 100%, 0 100%)"
            : "polygon(100% 0, 62% 0, 78% 100%, 100% 100%)",
          background: "linear-gradient(180deg,#211D19,#4A2436)",
        }}
      />
      <motion.div
        style={{ x: orbShiftX, y: orbShiftY }}
        className="absolute -top-24 left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[#B8874A]/25 blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(orbShiftX, (v) => -v), y: useTransform(orbShiftY, (v) => -v) }}
        className="absolute right-[-8rem] top-6 h-[24rem] w-[24rem] rounded-full bg-[#A24B3B]/20 blur-3xl"
      />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(33,29,25,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(33,29,25,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

      {/* ── vertical museum placard ── */}
      <div
        className={`absolute top-1/2 z-20 hidden -translate-y-1/2 lg:block ${isRTL ? "right-4" : "left-4"}`}
      >
        <div
          className="eh-mono whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.4em] text-[#4A2436]/70"
          style={{ writingMode: "vertical-rl", transform: isRTL ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          {isRTL ? "قطعة رقم ٠١ — الدكتورة سالي" : "Specimen No. 01 — Dr. Sally"}
        </div>
      </div>

      {/* ── marquee ticker ── */}
      <div className="absolute left-0 right-0 top-50 z-20 overflow-hidden border-y border-[#211D19]/10 bg-[#211D19] py-2">
        <div className={`eh-marquee-track flex w-max gap-8 ${isRTL ? "rtl" : ""}`}>
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="eh-mono flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F0E4D6]/80"
            >
              {w}
              <span className="text-[#B8874A]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8"
        onMouseMove={handleFieldMove}
        onMouseLeave={resetField}
      >
        <motion.div variants={container} initial="hidden" animate="visible" className="w-full">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* ── left: kinetic editorial text ── */}
            <div className="order-2 lg:order-1">
              <div className="max-w-xl">
                <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
                  <span className="eh-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A24B3B]">
                    {isRTL ? "قسم بصري تحريري" : "Editorial Feature"}
                  </span>
                  <span className="h-px flex-1 bg-[#211D19]/15" />
                </motion.div>

                <h1
                  className="eh-display text-6xl leading-[0.98] tracking-tight text-[#211D19] md:text-7xl lg:text-[6rem]"
                  style={{ perspective: 800 }}
                >
                  <motion.span variants={wordIn} className="block font-semibold">
                    {headlineTop}
                  </motion.span>
                  <span className="mt-1 flex flex-wrap gap-x-4 italic text-[#A24B3B]">
                    {headlineBottomWords.map((w, i) => (
                      <motion.span key={i} variants={wordIn} className="inline-block font-medium">
                        {w}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                <motion.p variants={fadeUp} className="mt-7 text-base leading-8 text-[#211D19]/70 md:text-lg">
                  {t.hero.description ||
                    (isRTL
                      ? "بدل الـ layout التقليدي، الهيرو هنا مبني كقطعة فنية معروضة داخل غرفة ضوء زجاجية: عمق حقيقي، انعكاسات ناعمة، ووجه واضح دايمًا في المنتصف."
                      : "Instead of a standard layout, this hero is staged like an artifact inside a glass light-chamber: real depth, soft reflections, and a face that always stays perfectly clear at the center.")}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                  <div
                    ref={btnRef}
                    onMouseMove={handleBtnMove}
                    onMouseLeave={resetBtn}
                    className="inline-block"
                  >
                    <Link to="/contact-us" className="group inline-flex">
                      <motion.div
                        style={{ x: bxs, y: bys }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-3 rounded-full bg-[#211D19] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#FAF6F0] shadow-[0_18px_50px_rgba(33,29,25,0.28)]"
                      >
                        {t.hero.cta || (isRTL ? "احجزي الآن" : "Book Now")}
                        <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      </motion.div>
                    </Link>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#211D19]/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#211D19]/80 shadow-sm backdrop-blur-md">
                    <Star className="h-4 w-4 fill-[#B8874A] text-[#B8874A]" />
                    {isRTL ? "تجربة راقية من أول نظرة" : "Elegant from the first glance"}
                  </div>
                </motion.div>

                {/* specimen strip — not a numbered sequence, just three facets */}
                <motion.div variants={fadeUp} className="mt-12 flex flex-col divide-y divide-[#211D19]/10 border-y border-[#211D19]/10">
                  {specimens.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="flex items-center gap-4 py-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0E4D6] text-[#A24B3B]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="eh-display text-base font-semibold text-[#211D19]">{s.label}</div>
                        <div className="eh-mono ms-auto text-[11px] uppercase tracking-[0.2em] text-[#211D19]/50">
                          {s.note}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* ── right: the light chamber (true 3D stage) ── */}
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[640px]" style={{ perspective: 1600 }}>
                {/* orbit rings */}
                {!prefersReducedMotion && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B8874A]/40 opacity-70"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                      className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#A24B3B]/30 opacity-60"
                    />
                  </>
                )}

                {/* 3D group: rotates as one object with the cursor */}
                <motion.div
                  style={{
                    rotateX: prefersReducedMotion ? 0 : stageRotateX,
                    rotateY: prefersReducedMotion ? 0 : stageRotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative mx-auto w-[min(100%,480px)]"
                >
                  {/* back glass plate — recedes into the scene */}
                  <div
                    style={{ transform: "translateZ(-90px) translateX(6%) rotateY(14deg)", transformStyle: "preserve-3d" }}
                    className="absolute inset-6 hidden rounded-[2.4rem] border border-white/70 bg-white/40 shadow-[0_30px_80px_rgba(74,36,54,0.15)] backdrop-blur-sm md:block"
                  />
                  {/* mid glass plate */}
                  <div
                    style={{ transform: "translateZ(-40px) translateX(-4%) rotateY(-8deg)", transformStyle: "preserve-3d" }}
                    className="absolute inset-3 hidden rounded-[2.6rem] border border-white/80 bg-[#F0E4D6]/50 shadow-[0_24px_60px_rgba(184,135,74,0.14)] backdrop-blur-sm md:block"
                  />

                  {/* front plane — the portrait itself, forward in Z */}
                  <div
                    style={{ transform: "translateZ(40px)" }}
                    className="relative overflow-hidden rounded-[2.6rem] border border-white/90 bg-white shadow-[0_32px_100px_rgba(33,29,25,0.25)]"
                  >
                    <img
                      src={heroImage}
                      alt={isRTL ? "الدكتورة سالي" : "Dr. Sally"}
                      className="h-[680px] w-full object-cover object-top"
                    />
                    {/* light sweep across the glass */}
                    {!prefersReducedMotion && (
                      <div
                        className="eh-sweep pointer-events-none absolute -inset-1/2 h-[200%] w-[200%] opacity-40"
                        style={{
                          background:
                            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.65) 50%, transparent 60%)",
                        }}
                      />
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(33,29,25,0.55),transparent)]" />

                    {/* nameplate */}
                    <div className="absolute bottom-6 left-6 z-20 rounded-full border border-white/30 bg-white/15 px-5 py-3 backdrop-blur-md">
                      <div className="eh-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F0E4D6]">
                        {isRTL ? "الدكتورة سالي" : "Dr. Sally"}
                      </div>
                      <div className="mt-1 text-[11px] font-medium tracking-[0.1em] text-white/80">
                        {isRTL ? "جلدية تجميلية" : "Cosmetic Dermatology"}
                      </div>
                    </div>
                  </div>

                  {/* floating facet plates — forward of the portrait in Z */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    style={{ transform: "translateZ(90px)" }}
                    className="absolute -left-6 top-16 hidden w-[176px] rounded-[1.2rem] border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(33,29,25,0.16)] backdrop-blur-md xl:block"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E4D6] text-[#A24B3B]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="eh-display mt-2 text-sm font-semibold text-[#211D19]">
                      {isRTL ? "دقة طبية" : "Precision"}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.7 }}
                    style={{ transform: "translateZ(70px)" }}
                    className="absolute -right-8 top-32 hidden w-[176px] rounded-[1.2rem] border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(33,29,25,0.16)] backdrop-blur-md xl:block"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0E4D6] text-[#A24B3B]">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <div className="eh-display mt-2 text-sm font-semibold text-[#211D19]">
                      {isRTL ? "تجربة موثوقة" : "Trusted"}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── bottom ribbon ── */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col gap-4 rounded-[2rem] border border-[#211D19]/10 bg-white/70 px-5 py-4 shadow-[0_14px_40px_rgba(33,29,25,0.08)] backdrop-blur-md md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E4D6] text-[#A24B3B]">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <div className="eh-display text-sm font-semibold text-[#211D19]">
                  {isRTL ? "Hero مختلف فعلًا" : "A hero unlike the rest"}
                </div>
                <div className="text-xs text-[#211D19]/60">
                  {isRTL
                    ? "غرفة ضوء ثلاثية الأبعاد، تحريك حركي، وإحساس مجلات فاخرة."
                    : "A true 3D light chamber, kinetic type, and an editorial-magazine feel."}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#211D19]/70">
              <div className="flex items-center gap-1 text-[#B8874A]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="eh-mono text-[11px] uppercase tracking-[0.2em]">
                {isRTL ? "مناسب للواجهة البيضاء" : "Built for a light interface"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialHeroSection;
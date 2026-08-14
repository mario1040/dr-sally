import React, { useRef, useEffect, useState } from 'react';
import { motion, Variants, useMotionValue, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Eye, Sparkles, Diamond, Heart, Stethoscope } from 'lucide-react';

const AboutUs = () => {
  const { t, isRTL } = useLanguage();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const container: Variants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="bg-gradient-to-b from-[#fdfbf8] via-[#faf3ec] to-[#f6e9df] min-h-screen overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(233,185,196,0.22)_45%,transparent_72%)] pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <PetalParticle key={i} />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a15a]/35 bg-white/70 backdrop-blur-sm text-[#8a5f2c] text-sm font-bold tracking-widest uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-[#c9a15a]" />
                {isRTL ? 'فلسفة التجميل' : 'Aesthetics Philosophy'}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#3d2f2a] mb-8 font-cairo leading-tight"
            >
              {isRTL ? 'كل نتيجة ناجحة' : 'Every Successful Result'} <br />
              <span className="relative inline-block mt-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a97c3f] via-[#c9a15a] to-[#a97c3f] bg-[size:200%] animate-gradient-x">
                  {isRTL ? 'ليها بداية صح' : 'Starts with the Right Beginning'}
                </span>
                <svg viewBox="0 0 300 24" className="absolute -bottom-3 left-0 w-full h-6 overflow-visible" preserveAspectRatio="none">
                  <motion.path
                    d="M4,14 C60,4 110,20 150,10 C190,2 240,18 296,8"
                    fill="none"
                    stroke="#c9a15a"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#7a675d] leading-relaxed font-medium max-w-2xl mb-6">
              {isRTL
                ? 'بالنسبالي التجميل مش هدف في حد ذاته، لكنه وسيلة تخلي كل شخص يحس بثقة أكبر في نفسه، من غير ما يفقد ملامحه الطبيعية.'
                : 'For me, aesthetics is not a goal in itself, but a means to make every person feel more confident in themselves, without losing their natural features.'}
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#7a675d] leading-relaxed font-medium max-w-2xl mb-14">
              {isRTL
                ? 'علشان كده، كل حالة بتبدأ بتقييم دقيق، وفهم للاحتياج الحقيقي، وبعدها بنحدد الخطة الأنسب باستخدام أحدث التقنيات الطبية.'
                : "That's why every case starts with a precise evaluation, understanding the real need, and then determining the most suitable plan using the latest medical technologies."}
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-6 sm:gap-12">
              <Counter target={10} suffix="+" label={isRTL ? 'سنوات من الخبرة' : 'Years of Experience'} />
              <span className="w-px h-12 bg-[#c9a15a]/25" />
              <Counter target={5000} suffix="+" label={isRTL ? 'حالة في مجالات الجلدية والتجميل والليزر' : 'Cases in Dermatology, Aesthetics & Laser'} />
              <span className="w-px h-12 bg-[#c9a15a]/25" />
              <Counter target={98} suffix="%" label={isRTL ? 'رضا العملاء عن تجربتهم' : 'Client Satisfaction Rate'} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ZIGZAG RIBBON 1 ================= */}
      <ZigzagRibbon
        isRTL={isRTL}
        rotate={-1.5}
        items={
          isRTL
            ? ['خبرة عملية', 'تشخيص دقيق', 'نتائج طبيعية', 'تقنيات حديثة', 'رعاية مستمرة']
            : ['Practical Experience', 'Accurate Diagnosis', 'Natural Results', 'Modern Techniques', 'Continuous Care']
        }
      />

      {/* ================= VISION & MISSION ================= */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <TiltCard
                icon={Eye}
                title={isRTL ? 'رؤيتي' : 'My Vision'}
                text={
                  isRTL
                    ? 'أقدم رعاية طبية مبنية على العلم والخبرة، بحيث تكون كل نتيجة مناسبة للحالة وتحافظ على المظهر الطبيعي.'
                    : 'I provide medical care based on science and experience, so that every result is appropriate for the case and preserves the natural appearance.'
                }
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <TiltCard
                icon={Target}
                title={isRTL ? 'رسالتي' : 'My Mission'}
                text={
                  isRTL
                    ? 'أساعد كل حالة لتصل لأفضل نتيجة ممكنة من خلال تشخيص دقيق، وخطة علاج مناسبة، ومتابعة مستمرة في كل خطوة.'
                    : 'I help every case achieve the best possible result through accurate diagnosis, an appropriate treatment plan, and continuous follow-up at every step.'
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ZIGZAG RIBBON 2 ================= */}
      <ZigzagRibbon
        isRTL={isRTL}
        rotate={1.5}
        reverse
        items={
          isRTL
            ? ['تشخيص دقيق', 'خصوصية تامة', 'اهتمام بكل حالة', 'متابعة مستمرة']
            : ['Accurate Diagnosis', 'Complete Privacy', 'Attention to Every Case', 'Continuous Follow-up']
        }
      />

      {/* ================= CORE VALUES / PRINCIPLES ================= */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#c9a15a]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-cairo text-[#3d2f2a]">
              {isRTL ? 'مبادئنا' : 'Our'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a97c3f] to-[#c9a15a]">
                {isRTL ? '' : 'Principles'}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-4 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-[#c9a15a]/25 to-transparent" />
            <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-[#c9a15a]/25 to-transparent" />

            <ValueItem
              icon={Stethoscope}
              title={isRTL ? 'التشخيص قبل أي إجراء' : 'Diagnosis Before Any Procedure'}
              desc={
                isRTL
                  ? 'كل حالة مختلفة، وعشان كده البداية دايماً بتكون بفهم الحالة كويس قبل اختيار أي علاج أو إجراء.'
                  : 'Every case is different, and that\'s why the beginning always starts with understanding the case well before choosing any treatment or procedure.'
              }
              index={0}
            />
            <ValueItem
              icon={Diamond}
              title={isRTL ? 'نتيجة تشبهك' : 'A Result That Resembles You'}
              desc={
                isRTL
                  ? 'هدفي إن النتيجة تكون طبيعية ومتناسقة، وتبرز أفضل ملامحك من غير مبالغة أو تغيير في شخصيتك.'
                  : 'My goal is for the result to be natural and harmonious, highlighting your best features without exaggeration or change in your personality.'
              }
              index={1}
            />
            <ValueItem
              icon={Heart}
              title={isRTL ? 'رعاية مستمرة' : 'Continuous Care'}
              desc={
                isRTL
                  ? 'رحلة العلاج مبتنتهيش بعد الجلسة، والمتابعة جزء أساسي من الوصول لأفضل نتيجة.'
                  : "The treatment journey doesn\'t end after the session, and follow-up is an essential part of reaching the best result."
              }
              index={2}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// ================= ZIGZAG RIBBON =================
const ZigzagRibbon = ({
  items,
  isRTL,
  rotate = -2,
  reverse = false,
}: {
  items: string[];
  isRTL: boolean;
  rotate?: number;
  reverse?: boolean;
}) => {
  const doubled = [...items, ...items];
  const goesLeft = reverse ? !isRTL : isRTL;

  const zigzagMaskTop: React.CSSProperties = {
    background: 'linear-gradient(90deg, #b8894a, #e0bd7a, #c9a15a)',
    WebkitMaskImage:
      'linear-gradient(135deg, transparent 7px, black 7px), linear-gradient(-135deg, transparent 7px, black 7px)',
    maskImage:
      'linear-gradient(135deg, transparent 7px, black 7px), linear-gradient(-135deg, transparent 7px, black 7px)',
    WebkitMaskSize: '14px 14px',
    maskSize: '14px 14px',
    WebkitMaskRepeat: 'repeat-x',
    maskRepeat: 'repeat-x',
  };

  const zigzagMaskBottom: React.CSSProperties = {
    ...zigzagMaskTop,
    WebkitMaskPosition: 'bottom',
    maskPosition: 'bottom',
    WebkitMaskImage:
      'linear-gradient(45deg, transparent 7px, black 7px), linear-gradient(-45deg, transparent 7px, black 7px)',
    maskImage:
      'linear-gradient(45deg, transparent 7px, black 7px), linear-gradient(-45deg, transparent 7px, black 7px)',
  };

  return (
    <div className="relative py-10 my-2">
      <div style={{ transform: `rotate(${rotate}deg)` }} className="relative">
        <div className="h-3 w-[104%] -ml-[2%]" style={zigzagMaskTop} />

        <div className="w-[104%] -ml-[2%] bg-gradient-to-r from-[#b8894a] via-[#e0bd7a] to-[#c9a15a] py-3.5 overflow-hidden shadow-[0_15px_35px_-12px_rgba(201,161,90,0.55)]">
          <motion.div
            className="flex whitespace-nowrap gap-10 w-max"
            animate={{ x: goesLeft ? ['0%', '-50%'] : ['-50%', '0%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {doubled.map((txt, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-white font-bold text-sm sm:text-base tracking-widest uppercase font-cairo"
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                {txt}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="h-3 w-[104%] -ml-[2%]" style={zigzagMaskBottom} />
      </div>
    </div>
  );
};

// ================= TILT CARD =================
const TiltCard = ({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full bg-white/70 backdrop-blur-xl border border-[#c9a15a]/25 p-10 lg:p-12 rounded-[2rem] shadow-xl shadow-[#c9a15a]/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#c9a15a]/20"
      >
        <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#c9a15a]/60 rounded-tl-md" />
        <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#c9a15a]/60 rounded-tr-md" />
        <span className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#c9a15a]/60 rounded-bl-md" />
        <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#c9a15a]/60 rounded-br-md" />

        <div style={{ transform: 'translateZ(40px)' }}>
          <div className="w-16 h-16 rounded-2xl bg-[#c9a15a]/10 border border-[#c9a15a]/25 flex items-center justify-center mb-8">
            <Icon className="w-8 h-8 text-[#a97c3f]" />
          </div>
          <h2 className="text-3xl font-bold text-[#3d2f2a] mb-4 font-cairo">{title}</h2>
          <p className="text-[#7a675d] leading-relaxed font-medium">{text}</p>
        </div>
      </motion.div>
    </div>
  );
};

// ================= VALUE ITEM =================
const ValueItem = ({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    className="group flex flex-col items-center text-center p-6"
  >
    <div className="relative w-16 h-16 mb-6">
      <div className="absolute inset-0 bg-[#c9a15a]/15 rounded-full blur-lg scale-75 group-hover:scale-125 transition-transform duration-700" />
      <div className="relative w-full h-full rounded-full bg-white/70 border border-[#c9a15a]/30 flex items-center justify-center shadow-sm group-hover:border-[#c9a15a] group-hover:-translate-y-1 transition-all duration-500">
        <Icon className="w-6 h-6 text-[#a97c3f] group-hover:rotate-12 transition-transform duration-500" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 font-cairo text-[#3d2f2a]">{title}</h3>
    <p className="text-[#7a675d] text-sm leading-relaxed max-w-[240px]">{desc}</p>
  </motion.div>
);

// ================= COUNTER =================
const Counter = ({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-2xl sm:text-3xl font-bold text-[#3d2f2a] font-cairo">
        {value}
        {suffix}
      </span>
      <span className="text-[11px] sm:text-xs text-[#8a7469] font-medium tracking-wide mt-1 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

// ================= PETAL PARTICLE =================
const PetalParticle = () => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 8;
  const size = Math.random() * 9 + 7;
  const swayDistance = Math.random() * 50 - 25;
  const duration = 16 + Math.random() * 10;

  return (
    <motion.div
      className="absolute bg-gradient-to-br from-[#e9b9c4] to-[#c9a15a]/60 opacity-50"
      style={{
        left: `${randomX}%`,
        width: size,
        height: size * 1.2,
        borderRadius: '0% 100% 0% 100%',
      }}
      initial={{ y: '-10vh', rotate: 0 }}
      animate={{
        y: '110vh',
        x: [0, swayDistance, 0, -swayDistance, 0],
        rotate: [0, 180, 360],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{ duration, repeat: Infinity, delay: randomDelay, ease: 'linear' }}
    />
  );
};

export default AboutUs;
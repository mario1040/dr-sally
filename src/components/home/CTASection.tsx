import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  const petals = Array.from({ length: 14 });

  const bulbCount = 14;
  const bulbs = Array.from({ length: bulbCount }).map((_, i) => {
    const angle = Math.PI * (i / (bulbCount - 1));
    return {
      id: i,
      x: 50 - Math.cos(angle) * 46,
      y: 100 - Math.sin(angle) * 100,
      delay: i * 0.12,
    };
  });

  return (
    <section
      ref={containerRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fdfbf8] via-[#f8ede4] to-[#f2ddd0] py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(233,185,196,0.25)_45%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(120,90,60,0.6)_50%,transparent_60%)] bg-[length:400px_400px]" />

      <div className="absolute inset-0 pointer-events-none z-10">
        {petals.map((_, i) => (
          <PetalParticle key={`petal-${i}`} />
        ))}
      </div>

      <motion.div
        style={{ y: yContent }}
        className="relative z-30 container px-4 flex flex-col items-center text-center"
      >
        <div className="relative w-[280px] sm:w-[360px] h-[140px] sm:h-[180px] mb-2">
          {bulbs.map((b) => (
            <motion.span
              key={b.id}
              className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#fff4de]"
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`,
                boxShadow: '0 0 6px 2px rgba(201,161,90,0.5)',
              }}
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.15, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 16 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-[#c9a15a] blur-xl opacity-30" />
          <div className="relative px-5 py-2 rounded-full border border-[#c9a15a]/35 bg-white/70 backdrop-blur-md flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#a97c3f]" />
            <span className="text-[#8a5f2c] text-xs font-bold tracking-widest uppercase">
              {isRTL ? 'لحظة التحوّل' : 'The Transformation Moment'}
            </span>
          </div>
        </motion.div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-cairo leading-tight tracking-tighter">
          <span className="block text-[#3d2f2a]">{isRTL ? 'جاهز تبدأ؟' : 'Ready to Start?'}</span>
          <span className="relative inline-block mt-6">
            <span className="relative bg-clip-text text-transparent bg-[size:200%] animate-gradient-text bg-gradient-to-r from-[#a97c3f] via-[#c9a15a] to-[#a97c3f]">
              {isRTL ? 'أول خطوة .. استشارة صح' : 'First Step: A Right Consultation'}
            </span>
            <svg viewBox="0 0 300 24" className="absolute -bottom-4 left-0 w-full h-6 overflow-visible" preserveAspectRatio="none">
              <motion.path
                d="M4,14 C60,4 110,20 150,10 C190,2 240,18 296,8"
                fill="none"
                stroke="#c9a15a"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.4, ease: 'easeInOut' }}
              />
            </svg>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-[#7a675d] text-lg md:text-2xl max-w-2xl mb-14 font-light leading-relaxed"
        >
          {isRTL
            ? 'سواء الهدف علاج مشكلة جلدية، تحسين البشرة، الليزر، أو أي إجراء تجميلي، البداية دايمًا بتكون بتقييم دقيق وخطة مناسبة للحالة.'
            : 'Whether your goal is treating a skin condition, improving your skin, laser procedures, or any cosmetic treatment, it always starts with an accurate assessment and a tailored plan.'}
        </motion.p>

        <div className="relative group">
          <a
            href="tel:01551820062"
            className="relative flex items-center justify-center gap-4 px-10 py-5 rounded-full overflow-hidden border border-[#c9a15a]/40 bg-white/70 backdrop-blur-md shadow-[0_18px_45px_-20px_rgba(201,161,90,0.55)] group-hover:shadow-[0_18px_55px_-12px_rgba(201,161,90,0.7)] transition-shadow duration-500"
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c9a15a] to-[#e0bd7a] origin-center"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <Phone className="relative z-10 w-5 h-5 text-[#a97c3f] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
            <span className="relative z-10 text-[#3d2f2a] group-hover:text-white font-bold text-lg tracking-wide transition-colors duration-300">
              {isRTL ? 'احجز موعد' : 'Book Appointment'}
            </span>
            <ArrowRight
              className={`relative z-10 w-5 h-5 text-[#a97c3f] group-hover:text-white transition-all duration-300 ${
                isRTL ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'
              }`}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const PetalParticle = () => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 8;
  const size = Math.random() * 10 + 8;
  const swayDistance = Math.random() * 60 - 30;
  const duration = 14 + Math.random() * 10;

  return (
    <motion.div
      className="absolute bg-gradient-to-br from-[#e9b9c4] to-[#c9a15a]/60 opacity-60"
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
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay: randomDelay,
        ease: 'linear',
      }}
    />
  );
};

export default CTASection;
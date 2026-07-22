import { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Zap, Syringe, Sun, Target, Waves, ArrowDown, Phone } from 'lucide-react';

const DermatologyLaser = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // نغماته ثلاث تتناوب على البطاقات لتعطي إيقاعاً بصرياً بدل التكرار الرتيب
  const tints = [
    { soft: 'from-[#c9a15a]/25 to-[#c9a15a]/5', ring: '#c9a15a', dot: 'bg-[#c9a15a]' },
    { soft: 'from-[#e9b9c4]/30 to-[#e9b9c4]/5', ring: '#c98a97', dot: 'bg-[#c98a97]' },
    { soft: 'from-[#8a7469]/20 to-[#8a7469]/5', ring: '#8a7469', dot: 'bg-[#8a7469]' },
  ];

  const services = [
    {
      icon: Sparkles,
      title: language === 'ar' ? 'علاج البشرة' : 'Skin Treatment',
      description:
        language === 'ar'
          ? 'علاجات متقدمة لحب الشباب والتصبغات والندبات'
          : 'Advanced treatments for acne, pigmentation, and scars',
      image: '/images/64b91e60ee991bc3355749ae_laser.jpeg',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'إزالة الشعر بالليزر' : 'Laser Hair Removal',
      description:
        language === 'ar'
          ? 'تقنية Motus Pro للإزالة الآمنة والدائمة'
          : 'Motus Pro technology for safe, permanent removal',
      image: 'https://placehold.co/700x560/faf3ec/c98a97?text=+',
    },
    {
      icon: Syringe,
      title: language === 'ar' ? 'البوتوكس والفيلر' : 'Botox & Fillers',
      description:
        language === 'ar' ? 'حقن تجميلية لتجديد شباب الوجه' : 'Aesthetic injectables for facial rejuvenation',
      image: 'https://placehold.co/700x560/faf3ec/8a7469?text=+',
    },
    {
      icon: Sun,
      title: language === 'ar' ? 'علاج التصبغات' : 'Pigmentation Treatment',
      description:
        language === 'ar' ? 'تقنيات متطورة لتوحيد لون البشرة' : 'Advanced techniques for even skin tone',
      image: 'https://placehold.co/700x560/faf3ec/c9a15a?text=+',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'علاج حب الشباب' : 'Acne Treatment',
      description:
        language === 'ar' ? 'برامج علاجية شاملة للحصول على بشرة صافية' : 'Comprehensive programs for clear skin',
      image: 'https://placehold.co/700x560/faf3ec/c98a97?text=+',
    },
    {
      icon: Waves,
      title: language === 'ar' ? 'شد البشرة' : 'Skin Tightening',
      description:
        language === 'ar' ? 'تقنيات RF لشد البشرة بدون جراحة' : 'RF techniques for non-surgical skin tightening',
      image: 'https://placehold.co/700x560/faf3ec/8a7469?text=+',
    },
  ];

  return (
    <>
      {/* ================= HERO: غرفة المسح الضوئي (Scan Chamber) ================= */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-[#fdfbf8] via-[#faf3ec] to-[#f6e9df]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(201,161,90,0.18)_45%,transparent_72%)] pointer-events-none" />

        {/* خط الليزر الماسح - يتحرك أفقياً عبر الهيرو باستمرار */}
        <div className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none opacity-70">
          <motion.div
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#c9a15a] to-transparent blur-[1px]"
            style={{ boxShadow: '0 0 20px 4px rgba(201,161,90,0.5)' }}
            animate={{ left: ['-5%', '105%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
          />
        </div>

        {/* أيقونات عائمة بعمق ثلاثي الأبعاد */}
        <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ perspective: 800 }}>
          <FloatingIcon icon={Sparkles} top="18%" left="12%" delay={0} />
          <FloatingIcon icon={Zap} top="28%" left="85%" delay={0.8} />
          <FloatingIcon icon={Waves} top="72%" left="10%" delay={1.6} />
          <FloatingIcon icon={Sun} top="68%" left="88%" delay={2.4} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a15a]/35 bg-white/70 backdrop-blur-sm text-[#8a5f2c] text-sm font-bold tracking-widest uppercase shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#c9a15a]" />
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3d2f2a] mb-6 font-cairo leading-tight">
              {language === 'ar' ? 'الجلدية و' : 'Dermatology &'}{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a97c3f] via-[#c9a15a] to-[#a97c3f] bg-[size:200%] animate-gradient-x">
                  {language === 'ar' ? 'الليزر' : 'Laser'}
                </span>
                <svg viewBox="0 0 200 20" className="absolute -bottom-2 left-0 w-full h-5 overflow-visible" preserveAspectRatio="none">
                  <motion.path
                    d="M3,12 C40,3 80,17 100,9 C130,1 165,15 197,7"
                    fill="none"
                    stroke="#c9a15a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-[#7a675d] leading-relaxed font-medium mb-10">
              {language === 'ar'
                ? 'علاجات متقدمة للبشرة تقدمها أيدي أطباء متخصصين باستخدام أحدث التقنيات.'
                : 'Advanced skin treatments delivered by specialist doctors using the latest technologies.'}
            </p>

            <motion.a
              href="#services-grid"
              whileHover={{ y: 4 }}
              className="flex flex-col items-center gap-2 text-[#a97c3f] text-xs font-bold tracking-widest uppercase"
            >
              {language === 'ar' ? 'استكشفي الخدمات' : 'Explore Treatments'}
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ================= شبكة بطاقات "الكبسولة الضوئية" (3D + Laser Scan) ================= */}
      <section id="services-grid" className="section-padding relative bg-[#fdfbf8]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCapsule key={index} service={service} index={index} tint={tints[index % tints.length]} isRTL={isRTL} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= شريط ختامي ================= */}
      <section className="relative py-20 bg-gradient-to-b from-[#fdfbf8] to-[#f6e9df] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#c9a15a]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3d2f2a] mb-6 font-cairo">
            {language === 'ar' ? 'مستعدة تبدئي رحلة بشرتك؟' : 'Ready to start your skin journey?'}
          </h3>
          <div className="relative inline-block group">
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c9a15a] to-[#e0bd7a] origin-center"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <a
              href="tel:0572260062"
              className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-full border border-[#c9a15a]/40 bg-white/70 backdrop-blur-md text-[#3d2f2a] group-hover:text-white font-bold transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {language === 'ar' ? 'احجزي استشارتك المجانية' : 'Book a Free Consultation'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// ================= بطاقة خدمة "كبسولة ضوئية" بميلان ثلاثي الأبعاد ومسح ليزر =================
const ServiceCapsule = ({
  service,
  index,
  tint,
  isRTL,
}: {
  service: { icon: React.ElementType; title: string; description: string; image: string };
  index: number;
  tint: { soft: string; ring: string; dot: string };
  isRTL: boolean;
}) => {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(py * -8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative bg-white rounded-[1.75rem] border border-black/5 shadow-lg shadow-black/[0.04] overflow-hidden transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10"
      >
        {/* نافذة الصورة (يفضّل استبدالها بصورة حقيقية للعلاج) */}
        <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${tint.soft}`}>
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-110"
          />
          {/* أيقونة العلاج بحجم كبير كخلفية زخرفية */}
          <Icon className="absolute -bottom-4 -right-4 w-28 h-28 opacity-10" style={{ color: tint.ring }} />

          {/* خط المسح الليزري يعبر الصورة عند التحويم */}
          <motion.div
            className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{ boxShadow: `0 0 20px 6px ${tint.ring}55` }}
            initial={{ top: '-10%' }}
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* شارة الأيقونة العائمة - عمق بصري عبر preserve-3d */}
        <div
          className="relative -mt-8 mb-2 flex px-7"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div
            className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border-2"
            style={{ borderColor: `${tint.ring}55` }}
          >
            <Icon className="w-7 h-7" style={{ color: tint.ring }} />
          </div>
        </div>

        <div className="relative px-7 pb-8" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="text-lg font-bold text-[#3d2f2a] mb-2 font-cairo">{service.title}</h3>
          <p className="text-sm text-[#7a675d] leading-relaxed">{service.description}</p>

          <div className={`mt-5 h-[3px] w-10 rounded-full ${tint.dot} transition-all duration-500 group-hover:w-full`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

// ================= أيقونة عائمة بعمق ثلاثي الأبعاد في الهيرو =================
const FloatingIcon = ({
  icon: Icon,
  top,
  left,
  delay,
}: {
  icon: React.ElementType;
  top: string;
  left: string;
  delay: number;
}) => (
  <motion.div
    className="absolute w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-md border border-[#c9a15a]/25 shadow-lg flex items-center justify-center"
    style={{ top, left }}
    animate={{ y: [0, -16, 0], rotateY: [0, 20, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    <Icon className="w-6 h-6 text-[#c9a15a]" />
  </motion.div>
);

export default DermatologyLaser;
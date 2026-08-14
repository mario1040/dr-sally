import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Percent, Gift, Star, Clock, Copy, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. تعريف واجهة لنوع البيانات (Offer Interface)
interface Offer {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  code: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

// 2. تعريف واجهة لخصائص الكارت (Props Interface)
interface CouponCardProps {
  offer: Offer;
  isRTL: boolean;
  index: number;
}

const Offers = () => {
  const { language, isRTL } = useLanguage();

  const offers: Offer[] = [
    {
      icon: Percent,
      title: language === 'ar' ? 'خصم الليزر' : 'Laser Discount',
      value: '20%',
      description: language === 'ar'
        ? 'خصم فوري عند حجز باقة الليزر للجسم بالكامل - 6 جلسات'
        : 'Instant discount when booking a full body laser package - 6 sessions',
      code: 'LASER20',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600',
      borderColor: 'border-rose-100'
    },
    {
      icon: Gift,
      title: language === 'ar' ? 'جلسة هيدرافيشل هدية' : 'Free HydraFacial Session',
      value: 'FREE',
      description: language === 'ar'
        ? 'احصل على جلسة Hydrafacial مجانًا عند الحصول على خدمات بقيمة 3000 جنيه'
        : 'Get a free HydraFacial session when you purchase services worth 3000 EGP',
      code: 'HYDRA-GIFT',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    {
      icon: Star,
      title: language === 'ar' ? 'باكدچ العروسة' : 'Bridal Package',
      value: 'VIP',
      description: language === 'ar'
        ? 'تجهيز متكامل للبشرة والجسم قبل الزفاف'
        : 'Complete skin and body preparation before the wedding',
      code: 'BRIDE2026',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-100'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'استشارة مجانية' : 'Free Consultation',
      value: '0 EGP',
      description: language === 'ar'
        ? 'استشارة أولية مجانًا للأعضاء الجدد لفترة محدودة'
        : 'Free initial consultation for new members for a limited time',
      code: 'CONSULT',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      borderColor: 'border-emerald-100'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pt-32 pb-20">

      {/* ================= HEADER ================= */}
      <div className="container px-4 mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
        >
           <Sparkles className="w-4 h-4 text-yellow-500" />
           <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
             {language === 'ar' ? 'عروض محدودة' : 'Limited Time Offers'}
           </span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-cairo">
           {language === 'ar' ? 'عروض تستاهلها' : 'Offers You Deserve'}
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
           {language === 'ar' 
             ? 'باقات وعروض مختارة على مجموعة من الخدمات، لفترة محدودة.'
             : 'Selected packages and offers on a range of services, for a limited time.'}
        </p>
      </div>

      {/* ================= COUPONS GRID ================= */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
           {offers.map((offer, index) => (
              <CouponCard key={index} offer={offer} isRTL={isRTL} index={index} />
           ))}
        </div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <div className="container px-4 mx-auto mt-20 text-center">
         <p className="text-slate-400 text-sm mb-6">
            {language === 'ar' ? '* تُطبق الشروط والأحكام على جميع العروض' : '* Terms and conditions apply to all offers'}
         </p>
         <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 transition-all hover:-translate-y-1">
            {language === 'ar' ? 'احجز موعدك الآن' : 'Book Appointment Now'}
         </Button>
      </div>

    </div>
  );
};

// ================= COUPON CARD COMPONENT =================
// 3. استخدام الواجهة (Interface) هنا بدلاً من any
const CouponCard = ({ offer, isRTL, index }: CouponCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-48"
    >
       {/* Left Side (Visual / Value) */}
       <div className={`sm:w-32 p-6 flex flex-col items-center justify-center gap-2 ${offer.bgColor} transition-colors`}>
          <div className={`p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm`}>
             <offer.icon className={`w-6 h-6 ${offer.textColor}`} />
          </div>
          <span className={`text-2xl font-black ${offer.textColor}`}>
             {offer.value}
          </span>
       </div>

       {/* Middle (Content) */}
       <div className="flex-1 p-6 flex flex-col justify-center relative">
          {/* Dashed line on mobile */}
          <div className="absolute top-0 left-6 right-6 h-px border-t-2 border-dashed border-slate-100 sm:hidden" />
          {/* Dashed line on desktop */}
          <div className={`absolute top-6 bottom-6 w-px border-l-2 border-dashed border-slate-100 hidden sm:block ${isRTL ? 'right-0' : 'left-0'}`} />

          <h3 className="text-xl font-bold text-slate-900 mb-2 font-cairo">
             {offer.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
             {offer.description}
          </p>

          {/* Code Section */}
          <div 
             onClick={handleCopy}
             className="flex items-center justify-between bg-slate-50 border border-slate-100 border-dashed rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-100 transition-colors group/code"
          >
             <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                   {isRTL ? 'كود الخصم' : 'Promo Code'}
                </span>
                <span className="font-mono font-bold text-slate-800 tracking-wider">
                   {offer.code}
                </span>
             </div>

             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-400 group-hover/code:text-slate-900 transition-colors">
                <AnimatePresence mode='wait'>
                   {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                      >
                         <Check className="w-4 h-4 text-emerald-500" />
                      </motion.div>
                   ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                      >
                         <Copy className="w-4 h-4" />
                      </motion.div>
                   )}
                </AnimatePresence>
             </div>
          </div>
       </div>
    </motion.div>
  );
};

export default Offers;
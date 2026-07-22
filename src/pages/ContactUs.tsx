import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [sent, setSent] = useState(false);

  const branches = [
    {
      name: t.footer.damietta,
      address: language === 'ar' ? 'مول صفوة، الدور الثاني' : 'Safwa Mall, 2nd Floor',
      phone: '0572260062',
      mapUrl: 'https://maps.google.com',
    },
    {
      name: t.footer.newDamietta,
      address: language === 'ar' ? 'المنطقة المركزية' : 'Central Zone',
      phone: '0572260063',
      mapUrl: 'https://maps.google.com',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 4200);
  };

  const zigzagMask: React.CSSProperties = {
    WebkitMaskImage:
      'linear-gradient(135deg, transparent 7px, black 7px), linear-gradient(-135deg, transparent 7px, black 7px)',
    maskImage:
      'linear-gradient(135deg, transparent 7px, black 7px), linear-gradient(-135deg, transparent 7px, black 7px)',
    WebkitMaskSize: '14px 14px',
    maskSize: '14px 14px',
    WebkitMaskRepeat: 'repeat-x',
    maskRepeat: 'repeat-x',
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fdfbf8] via-[#faf3ec] to-[#f6e9df]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-3xl bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(233,185,196,0.2)_45%,transparent_72%)] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <PetalParticle key={i} />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#3d2f2a] mb-6 font-cairo relative inline-block">
              {t.contact.title}
              <svg viewBox="0 0 220 20" className="absolute -bottom-3 left-0 w-full h-5 overflow-visible" preserveAspectRatio="none">
                <motion.path
                  d="M3,12 C45,3 90,17 115,9 C145,1 180,15 217,7"
                  fill="none"
                  stroke="#c9a15a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                />
              </svg>
            </h1>
            <p className="text-lg text-[#7a675d] font-medium mt-4">{t.contact.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#fdfbf8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* ================= رسالتكِ إلينا (بطاقة الرسالة والختم الشمعي) ================= */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pt-6"
            >
              {/* حافة الورق الممزقة أعلى البطاقة */}
              <div
                className="h-3.5 w-full bg-gradient-to-r from-[#b8894a] via-[#e0bd7a] to-[#c9a15a]"
                style={zigzagMask}
              />

              <div className="relative bg-white border border-[#c9a15a]/15 border-t-0 rounded-b-[1.75rem] shadow-xl shadow-[#c9a15a]/10 px-8 sm:px-10 pt-14 pb-10">
                {/* ختم شمعي علوي متداخل مع الحافة */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full bg-[#c9a15a]/25 blur-md" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a15a] to-[#a97c3f] shadow-lg flex items-center justify-center border-2 border-white">
                      <span className="text-white font-cairo font-bold text-sm tracking-wider">SF</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[#3d2f2a] mb-1 font-cairo text-center">
                  {language === 'ar' ? 'اكتبي لنا رسالتكِ' : 'Write Us a Letter'}
                </h2>
                <p className="text-xs text-[#8a7469] text-center mb-8 tracking-wide">
                  {language === 'ar' ? 'سنرد عليكِ خلال 24 ساعة' : "We'll reply within 24 hours"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <LetterField>
                    <Input
                      placeholder={t.contact.name}
                      className="bg-transparent border-0 border-b-2 border-[#c9a15a]/25 rounded-none px-1 py-3 text-[#3d2f2a] placeholder:text-[#a3928a] focus-visible:ring-0 focus-visible:border-[#c9a15a] transition-colors"
                    />
                  </LetterField>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
                    <LetterField>
                      <Input
                        type="email"
                        placeholder={t.contact.email}
                        className="bg-transparent border-0 border-b-2 border-[#c9a15a]/25 rounded-none px-1 py-3 text-[#3d2f2a] placeholder:text-[#a3928a] focus-visible:ring-0 focus-visible:border-[#c9a15a] transition-colors"
                      />
                    </LetterField>
                    <LetterField>
                      <Input
                        type="tel"
                        placeholder={t.contact.phone}
                        className="bg-transparent border-0 border-b-2 border-[#c9a15a]/25 rounded-none px-1 py-3 text-[#3d2f2a] placeholder:text-[#a3928a] focus-visible:ring-0 focus-visible:border-[#c9a15a] transition-colors"
                      />
                    </LetterField>
                  </div>

                  <LetterField>
                    <Textarea
                      placeholder={t.contact.message}
                      className="bg-transparent border-0 border-b-2 border-[#c9a15a]/25 rounded-none px-1 py-3 min-h-[120px] text-[#3d2f2a] placeholder:text-[#a3928a] focus-visible:ring-0 focus-visible:border-[#c9a15a] transition-colors resize-none"
                    />
                  </LetterField>

                  <div className="relative pt-4">
                    <Button
                      type="submit"
                      className="w-full rounded-full py-6 bg-gradient-to-r from-[#c9a15a] to-[#a97c3f] hover:from-[#a97c3f] hover:to-[#8a5f2c] text-white font-bold tracking-wide shadow-[0_12px_30px_-10px_rgba(201,161,90,0.6)]"
                    >
                      <motion.span
                        className="inline-flex items-center gap-2"
                        animate={sent ? { scale: [1, 0.9, 1] } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        <Send className="w-4 h-4" />
                        {t.contact.send}
                      </motion.span>
                    </Button>

                    {/* انفجار لمعان + رسالة تأكيد عند الإرسال */}
                    <AnimatePresence>
                      {sent && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full flex items-center gap-2 px-4 py-2 rounded-full bg-[#3d2f2a] text-[#f6e9df] text-xs font-bold whitespace-nowrap shadow-lg"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#c9a15a]" />
                            {language === 'ar' ? 'تم إرسال رسالتكِ بنجاح' : 'Your letter has been sent'}
                          </motion.div>
                          {Array.from({ length: 6 }).map((_, i) => (
                            <motion.span
                              key={i}
                              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-[#c9a15a]"
                              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                              animate={{
                                x: Math.cos((i / 6) * Math.PI * 2) * 70,
                                y: Math.sin((i / 6) * Math.PI * 2) * 70,
                                opacity: 0,
                                scale: 0,
                              }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* ================= الفروع (تذاكر بوتيك) ================= */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-[#3d2f2a] mb-2 font-cairo">{t.footer.branches}</h2>

              {branches.map((branch, index) => (
                <BranchTicket key={index} branch={branch} directionsLabel={t.common.directions} />
              ))}

              {/* بطاقة بريدية: ساعات العمل + الإيميل بختم دوّار */}
              <div className="relative bg-white border border-[#c9a15a]/15 rounded-[1.5rem] shadow-md shadow-[#c9a15a]/5 p-7 overflow-hidden">
                <motion.div
                  className="absolute top-4 end-4 w-16 h-16 opacity-70"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path id="stampPath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text fontSize="7.5" fill="#c9a15a" letterSpacing="2">
                      <textPath href="#stampPath">
                        {(language === 'ar' ? '• ساعات العمل • تواصلي معنا ' : '• OPENING HOURS • GET IN TOUCH ').repeat(2)}
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                <div className="flex gap-3 mb-5">
                  <Clock className="w-5 h-5 text-[#a97c3f] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#3d2f2a] mb-1">{t.footer.workingHours}</p>
                    <span className="text-[#7a675d] text-sm">{t.footer.hours}</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-[#c9a15a]/10">
                  <Mail className="w-5 h-5 text-[#a97c3f] flex-shrink-0" />
                  <a href="mailto:info@sftouch.com" className="text-[#7a675d] text-sm hover:text-[#a97c3f] transition-colors">
                    info@sftouch.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// ================= حقل داخل الرسالة =================
const LetterField = ({ children }: { children: React.ReactNode }) => <div className="relative">{children}</div>;

// ================= بطاقة فرع على شكل تذكرة بوتيك =================
const BranchTicket = ({
  branch,
  directionsLabel,
}: {
  branch: { name: string; address: string; phone: string; mapUrl: string };
  directionsLabel: string;
}) => {
  return (
    <div className="relative bg-white border border-[#c9a15a]/15 rounded-[1.5rem] shadow-md shadow-[#c9a15a]/5 overflow-hidden">
      <div className="p-7 pb-5">
        <h3 className="text-lg font-bold text-[#3d2f2a] mb-4 font-cairo">{branch.name}</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-[#a97c3f] flex-shrink-0" />
            <span className="text-[#7a675d] text-sm">{branch.address}</span>
          </div>
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-[#a97c3f] flex-shrink-0" />
            <a href={`tel:${branch.phone}`} className="text-[#7a675d] text-sm hover:text-[#a97c3f] transition-colors">
              {branch.phone}
            </a>
          </div>
        </div>
      </div>

      {/* خط تمزق التذكرة مع فتحتين على الطرفين */}
      <div className="relative flex items-center px-1">
        <span className="absolute -left-3 w-6 h-6 rounded-full bg-[#fdfbf8]" />
        <span className="absolute -right-3 w-6 h-6 rounded-full bg-[#fdfbf8]" />
        <div className="w-full border-t-2 border-dashed border-[#c9a15a]/25" />
      </div>

      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-[#a97c3f] font-bold text-sm hover:bg-[#faf3ec] transition-colors"
      >
        <MapPin className="w-4 h-4" />
        {directionsLabel}
      </a>
    </div>
  );
};

// ================= بتلة وردة عائمة =================
const PetalParticle = () => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 8;
  const size = Math.random() * 8 + 6;
  const swayDistance = Math.random() * 40 - 20;
  const duration = 16 + Math.random() * 8;

  return (
    <motion.div
      className="absolute bg-gradient-to-br from-[#e9b9c4] to-[#c9a15a]/60 opacity-40"
      style={{ left: `${randomX}%`, width: size, height: size * 1.2, borderRadius: '0% 100% 0% 100%' }}
      initial={{ y: '-10vh', rotate: 0 }}
      animate={{ y: '110vh', x: [0, swayDistance, 0, -swayDistance, 0], rotate: [0, 180, 360], opacity: [0, 0.5, 0.5, 0] }}
      transition={{ duration, repeat: Infinity, delay: randomDelay, ease: 'linear' }}
    />
  );
};

export default ContactUs;
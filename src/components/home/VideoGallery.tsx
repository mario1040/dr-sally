import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Play, X, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  quoteEn: string;
  quoteAr: string;
  thumbnail: string;
  videoId: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Dermatology & Aesthetics",
    roleAr: "جلدية وتجميل",
    quoteEn: "Tooth decay in children is one of the most common problems that parents encounter. In this video, we will talk about this topic.",
    quoteAr: "تسوّس الأسنان عند الأطفال من أكتر المشاكل اللي بتقابل الأهالي وفي الفيديو ده، هنتكلم عن الموضوع ده.",
    thumbnail: "images/OES02481.jpg",
    videoId: "KceQnTS_GgQ",
  },
  {
    id: "2",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Dermatology & Aesthetics",
    roleAr: "جلدية وتجميل",
    quoteEn: "Do you feel that your gums are very clear when you laugh? In this video, we will talk about the gummy smile problem!",
    quoteAr: "بتحس إن اللثة باينة جدًا وأنت بتضحك؟ في الفيديو ده هنتكلم عن مشكلة الضحكة اللثوية واللي بتسبب إحراج!",
    thumbnail: "images/OES02547.jpg",
    videoId: "VhaQ6pvLDyc",
  },
  {
    id: "3",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Plastic Surgeon",
    roleAr: "جراحة تجميل",
    quoteEn: "Are you looking for a natural treatment that will restore freshness to your skin? Plasma (PRP) sessions are the most powerful solution.",
    quoteAr: "هل بتدوري على علاج طبيعي يعيد لبشرتك النضارة؟ جلسات البلازما (PRP) تعتبر من أقوى الحلول لتجديد الخلايا.",
    thumbnail: "images/OES02633.jpg",
    videoId: "8tdDCVsS5fE",
  },
  {
    id: "4",
    nameEn: "Dr. Sally El Adawy",
    nameAr: "د. سالي العدوي",
    roleEn: "Dermatology & Aesthetics",
    roleAr: "جلدية وتجميل",
    quoteEn: "How can you get rid of local fat without surgery? We will talk about mesolipolysis, the famous fat-breaking technique.",
    quoteAr: "إزاي تتخلص من الدهون الموضعية من غير جراحة؟ هنتكلم عن تقنية الميزو ليبوليسيس، لتفتيت الدهون بالحقن.",
    thumbnail: "images/OES02707.jpg",
    videoId: "uNoNlfUV1PA",
  },
];

 const VideoGallery = () => {
  const { language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground tracking-tight mb-4">
              {language === "en" ? "Video Gallery" : "معرض الفيديوهات"}
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-primary mx-auto rounded-full mb-6"
            />
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
              {language === "en"
                ? "Insights, expertise, and real stories from Dr. Sally El Adawy."
                : "اسمع المعلومة من مصدرها. فيديوهات بتشرح أشهر مشاكل البشرة، وتجاوب على الأسئلة اللي ناس كتير بتسألها."}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {testimonials.map((testimonial, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ${
                  isEven ? "lg:mt-12" : ""
                }`}
                onClick={() => setSelectedVideo(testimonial)}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={language === "en" ? testimonial.nameEn : testimonial.nameAr}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1.5" fill="currentColor" />
                  </motion.div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary scale-0 opacity-0 group-hover:animate-ping" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full z-10 transform translate-y-[85px] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="mb-4">
                    <h3 className="text-white font-serif font-bold text-xl mb-1 drop-shadow-md">
                      {language === "en" ? testimonial.nameEn : testimonial.nameAr}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-100 text-xs font-medium">
                      {language === "en" ? testimonial.roleEn : testimonial.roleAr}
                    </span>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/10 rotate-180" />
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3 relative z-10 pl-2">
                      {language === "en" ? testimonial.quoteEn : testimonial.quoteAr}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-5xl p-0 bg-black border-none rounded-2xl overflow-hidden shadow-2xl">
              <DialogTitle className="sr-only">
                {language === "en" ? selectedVideo.nameEn : selectedVideo.nameAr}
              </DialogTitle>

              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Video testimonial"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300 z-50 border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
/**
 * Design: Light section with review image slider
 * Auto-sliding every 3-4 seconds + "전체 후기 보기" button
 */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";

export default function ReviewSection() {
  const reviewImages = [
    { src: "/manus-storage/review1_4f49d350.jpg", alt: "고객 후기 1" },
    { src: "/manus-storage/review2_e53d3369.jpg", alt: "고객 후기 2" },
    { src: "/manus-storage/review3_300e10e4.jpg", alt: "고객 후기 3" },
    { src: "/manus-storage/review4_f4f0c31f.jpg", alt: "고객 후기 4" },
    { src: "/manus-storage/review5_eedebb00.jpg", alt: "고객 후기 5" },
    { src: "/manus-storage/review6_d6cd630d.jpg", alt: "고객 후기 6" },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviewImages.length);
  }, [reviewImages.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
  }, [reviewImages.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section id="reviews" className="section-light py-20 md:py-28">
      <div className="container">
        <div className="fade-in-up text-center mb-12">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Real Reviews</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-2"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            Real Moments. Real Reviews.
          </h2>
          <p className="text-[#2c1810]/50 text-sm mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            INUSMUSIC Classical Performance Archive
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* Image Slider */}
        <div
          className="fade-in-up relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden border border-[#c9a96e]/15">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviewImages.map((img, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain bg-white"
                  />
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white border border-[#c9a96e]/20 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-[#2c1810]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white border border-[#c9a96e]/20 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-[#2c1810]" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviewImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#c9a96e] w-6" : "bg-[#c9a96e]/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rating + CTA */}
        <div className="fade-in-up text-center mt-10 space-y-5" style={{ transitionDelay: "200ms" }}>
          <div className="inline-flex items-center gap-2 text-[#c9a96e]">
            <Star className="w-4 h-4 fill-[#c9a96e]" />
            <span className="text-sm font-medium">웨딩 연주 평점 5.0</span>
          </div>
          <div>
            <a
              href="http://musicin.godohosting.com/bbs/board.php?bo_table=forum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white transition-all duration-500 text-sm tracking-wider"
            >
              실제 고객 후기 전체보기
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

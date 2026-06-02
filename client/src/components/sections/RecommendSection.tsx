/**
 * Design: Light champagne section with recommendation info
 * Based on screenshot #4
 */
import { Church, Building2, Hotel, Gem } from "lucide-react";

export default function RecommendSection() {
  const venues = [
    { icon: Church, label: "채플홀" },
    { icon: Building2, label: "일반 웨딩홀" },
    { icon: Hotel, label: "호텔 예식" },
    { icon: Gem, label: "하우스 웨딩" },
  ];

  return (
    <section className="section-light py-20 md:py-24">
      <div className="container max-w-3xl mx-auto text-center">
        <div className="fade-in-up">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Recommendation</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이런 분들께 추천드립니다
          </h2>
          <div className="gold-divider w-16 mx-auto mb-10" />
        </div>

        {/* Venue icons */}
        <div className="fade-in-up grid grid-cols-4 gap-4 mb-10" style={{ transitionDelay: "100ms" }}>
          {venues.map((venue, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-[#c9a96e]/30 flex items-center justify-center">
                <venue.icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.5} />
              </div>
              <span className="text-[#2c1810]/70 text-xs">{venue.label}</span>
            </div>
          ))}
        </div>

        <div className="fade-in-up bg-white border border-[#c9a96e]/15 p-8 md:p-12" style={{ transitionDelay: "200ms" }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rotate-45 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-wider uppercase">Chapel & Wedding Hall</span>
            <div className="w-2 h-2 rotate-45 bg-[#c9a96e]" />
          </div>
          <p
            className="text-[#2c1810] text-lg md:text-xl leading-relaxed mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            채플홀·일반 웨딩홀 등<br />
            예식의 격식과 안정적인 분위기를<br />
            중요하게 생각하신다면
          </p>
          <p className="text-[#2c1810]/60 text-sm leading-relaxed">
            클래식 연주를 가장 많이 선택하시는 구성이며,<br />
            실제 만족도가 높은 연출 방식입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

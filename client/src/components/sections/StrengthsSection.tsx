/**
 * Design: Light champagne section with 3 strength cards
 * Glass-morphism cards with gold accents
 * 수정: 카드 타이틀 줄바꿈 적용
 */
import { TrendingDown, Shield, Music } from "lucide-react";

export default function StrengthsSection() {
  const strengths = [
    {
      icon: TrendingDown,
      number: "01",
      title: <>합리적인 가격<br />검증된 완성도</>,
      description: "시장 평균 대비 효율적인 비용으로 4만 쌍 이상의 데이터로 검증된 완성도를 제공합니다.",
      detail: "시장 평균 대비 합리적인 가격",
    },
    {
      icon: Shield,
      number: "02",
      title: "운영 시스템 기반의 안정성",
      description: "체계적인 운영 시스템과 전문 인력 운영으로 예식 당일, 완벽한 진행을 약속드립니다.",
      detail: "사전 미팅 이중 체크 · 당일 현장 이중 체크",
    },
    {
      icon: Music,
      number: "03",
      title: <>클래스가 다른<br />프리미엄 연주</>,
      description: "클래식·재즈·중창까지 공간과 분위기에 최적화된 연주로 특별한 순간을 완성합니다.",
      detail: "클래식 · 재즈 · 중창 연주",
    },
  ];

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container">
        <div className="fade-in-up text-center mb-16">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Why INUSMUSIC</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이너스뮤직은 다릅니다
          </h2>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {strengths.map((item, i) => (
            <div
              key={i}
              className="fade-in-up group relative p-8 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#c9a96e]/5"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-[#c9a96e]/30 text-5xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.number}
              </div>
              <item.icon className="w-6 h-6 text-[#c9a96e] mb-4" strokeWidth={1.5} />
              <h3
                className="text-lg text-[#2c1810] mb-3 font-medium"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[#2c1810]/60 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-[#c9a96e] text-xs tracking-wide">
                {item.detail}
              </p>
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c9a96e]/30 group-hover:border-[#c9a96e]/60 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#c9a96e]/30 group-hover:border-[#c9a96e]/60 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

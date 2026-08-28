/**
 * Design: Light champagne section - 통합 설득 섹션
 * 다이어트: StrengthsSection(693px) + RecommendSection(738px) + SafetySection(765px)
 *          총 2,196px → 단일 섹션으로 통합
 * 구성: 3대 강점 카드 → 추천 예식장 스트립 → 안전 시스템 3열
 */
import { TrendingDown, Shield, Music, Church, Building2, Hotel, Gem, ShieldCheck, Clock, Users } from "lucide-react";

export default function WhyInusSection() {
  const strengths = [
    {
      icon: TrendingDown,
      number: "01",
      title: <>합리적인 가격<br />검증된 완성도</>,
      description: "시장 평균 대비 효율적인 비용으로 4만 쌍 이상의 데이터로 검증된 완성도를 제공합니다.",
    },
    {
      icon: Shield,
      number: "02",
      title: "운영 시스템 기반의 안정성",
      description: "체계적인 운영 시스템과 전문 인력 운영으로 예식 당일, 완벽한 진행을 약속드립니다.",
    },
    {
      icon: Music,
      number: "03",
      title: <>클래스가 다른<br />프리미엄 연주</>,
      description: "클래식·재즈·중창까지 공간과 분위기에 최적화된 연주로 특별한 순간을 완성합니다.",
    },
  ];

  const venues = [
    { icon: Church, label: "채플홀" },
    { icon: Building2, label: "일반 웨딩홀" },
    { icon: Hotel, label: "호텔 예식" },
    { icon: Gem, label: "하우스 웨딩" },
  ];

  const checks = [
    { icon: ShieldCheck, title: "전속 계약 진행", desc: "No-show 걱정 없는 안정적인 계약 체결" },
    { icon: Clock, title: "이중 체크 시스템", desc: "예식 2시간 전 준비 확인 · 1시간 전 도착 확인" },
    { icon: Users, title: "예비 인력 대기", desc: "100명+ 연주자 풀에서 즉시 대체 가능" },
  ];

  return (
    <section id="why" className="section-light py-16 md:py-20">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="fade-in-up text-center mb-10">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Why INUSMUSIC</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이너스뮤직은 다릅니다
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        {/* 3대 강점 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
          {strengths.map((item, i) => (
            <div
              key={i}
              className="fade-in-up group relative p-6 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[#c9a96e]/30 text-3xl font-light leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.number}
                </span>
                <item.icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.5} />
              </div>
              <h3
                className="text-base text-[#2c1810] mb-2 font-medium leading-snug"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[#2c1810]/60 text-sm leading-relaxed">{item.description}</p>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#c9a96e]/30 group-hover:border-[#c9a96e]/60 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* 추천 예식장 스트립 */}
        <div className="fade-in-up bg-white border border-[#c9a96e]/15 p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:gap-10">
            {/* 예식장 아이콘 */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-0 md:shrink-0">
              {venues.map((venue, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-11 h-11 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5">
                    <venue.icon className="w-[18px] h-[18px] text-[#c9a96e]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#2c1810]/70 text-[11px] text-center leading-tight">{venue.label}</span>
                </div>
              ))}
            </div>

            {/* 구분선 */}
            <div className="hidden md:block w-px h-16 bg-[#c9a96e]/15 shrink-0" />

            {/* 메시지 */}
            <div className="text-center md:text-left">
              <p className="text-[#c9a96e] text-[10px] tracking-wider uppercase mb-2">Recommendation</p>
              <p
                className="text-[#2c1810] text-base md:text-lg leading-relaxed mb-2"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                예식의 격식과 안정적인 분위기를 중요하게 생각하신다면
              </p>
              <p className="text-[#2c1810]/60 text-sm leading-relaxed">
                클래식 연주를 가장 많이 선택하시는 구성이며, 실제 만족도가 높은 연출 방식입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 안전 시스템 */}
        <div className="fade-in-up">
          <div className="text-center mb-6">
            <p className="text-[#c9a96e] tracking-[0.2em] text-[10px] uppercase mb-2">Safety System</p>
            <p
              className="text-[#2c1810] text-base md:text-lg"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
            >
              예식 당일 걱정되는 부분, 시스템으로 대비합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {checks.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-white border border-[#c9a96e]/10 hover:border-[#c9a96e]/30 transition-all duration-300"
              >
                <div className="w-9 h-9 shrink-0 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5">
                  <item.icon className="w-[16px] h-[16px] text-[#c9a96e]" strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    className="text-[#2c1810] text-sm mb-1 font-medium"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-[#2c1810]/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

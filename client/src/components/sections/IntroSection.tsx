/**
 * Design: Dark section with asymmetric layout
 * Left: violin image, Right: text content with checkmarks
 */
import { Check } from "lucide-react";

export default function IntroSection() {
  const features = [
    "명문 음대 출신 & 현역 연주자 구성",
    "학생 연주자 없이 검증된 인원 운영",
    "예식 주간 사전 체크 + 당일 리허설 진행",
    "공간과 분위기에 맞춘 맞춤 연주 제안",
    "전속 계약 시스템으로 No-show 걱정 없는 안정적인 진행",
    "1부 클래식 / 2부 재즈 등 유연한 구성 가능",
  ];

  return (
    <section id="intro" className="section-dark py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="fade-in-up relative">
            <div className="relative overflow-hidden">
              <img
                src="/manus-storage/violin-closeup_47bc4a2d.webp"
                alt="Violin performance at wedding"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1419]/30" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c9a96e]/40" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c9a96e]/40" />
          </div>

          {/* Right: Content */}
          <div className="fade-in-up" style={{ transitionDelay: "200ms" }}>
            <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4">Classical Performance</p>
            <h2
              className="text-2xl md:text-3xl text-[#f8f4ef] mb-6 leading-relaxed"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
            >
              공간의 분위기를 섬세하게<br />채우는 클래식 연주
            </h2>
            <p className="text-[#f8f4ef]/70 text-sm leading-relaxed mb-8">
              식전연주부터 행진까지, 하객의 시선을 사로잡는 순간을 완성해드리는 프리미엄 클래식 연주입니다.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#c9a96e]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#c9a96e]" />
                  </div>
                  <span className="text-[#f8f4ef]/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-[#c9a96e]/40 pl-4">
              <p className="text-[#f8f4ef]/60 text-xs leading-relaxed italic">
                연간 5,000건 이상의 예식 경험을 바탕으로 실제 웨딩 현장에서 검증된 완성도 높은 진행을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Design: Light section with 5-step process timeline
 * 수정: 모바일에서 세로 타임라인 1열로 깔끔하게 표시 (홀수 비어보이지 않게)
 */
import { MessageSquare, CreditCard, Music, CheckCircle, PartyPopper } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    { icon: MessageSquare, num: "01", title: "상담", desc: "금액 및 상담" },
    { icon: CreditCard, num: "02", title: "주문하기", desc: "결정 후 계약체결" },
    { icon: Music, num: "03", title: "컨설팅", desc: "곡리스트 발송" },
    { icon: CheckCircle, num: "04", title: "최종확인", desc: "4~5일 전 최종 안심전화 및 곡 리스트 확인" },
    { icon: PartyPopper, num: "05", title: "행사진행", desc: "행사 당일 50분전 도착, 차질없이 진행" },
  ];

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container">
        {/* Process Header */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Process</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            클래식 연주 진행 안내
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        {/* Desktop: 5-column grid */}
        <div className="fade-in-up max-w-5xl mx-auto hidden md:block">
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] w-[80%] h-px bg-[#c9a96e]/20" />
                )}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-white group-hover:border-[#c9a96e]/60 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-[#c9a96e]" strokeWidth={1.5} />
                </div>
                <p className="text-[#c9a96e] text-[10px] tracking-wider mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.num}
                </p>
                <p className="text-[#2c1810] text-sm font-medium mb-1" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  {step.title}
                </p>
                <p className="text-[#2c1810]/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline (1열 세로) */}
        <div className="fade-in-up max-w-sm mx-auto md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-[#c9a96e]/40 via-[#c9a96e]/20 to-transparent" />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="relative flex items-center gap-5 py-4 group">
                  {/* Circle with icon */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-[48px] h-[48px] rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-white group-hover:border-[#c9a96e]/60 transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[#c9a96e] text-[10px] tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {step.num}
                      </span>
                      <p className="text-[#2c1810] text-sm font-medium" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                        {step.title}
                      </p>
                    </div>
                    <p className="text-[#2c1810]/50 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

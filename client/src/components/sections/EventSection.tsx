/**
 * Design: Light section with event cards
 * Based on screenshot #15
 */
import { Gift, PenLine, Sparkles, Music2, Mic, Theater, UserRound, Smartphone, Package } from "lucide-react";

const services = [
  { icon: UserRound, label: "결혼식사회", href: "https://www.inusmc.co.kr/" },
  { icon: Music2, label: "재즈연주", href: "https://inusjazz.kr/" },
  { icon: Mic, label: "축가", href: "https://inusmusic.kr/" },
  { icon: Theater, label: "뮤지컬웨딩", href: "https://inusmw.kr/" },
  { icon: Smartphone, label: "모바일청첩장", href: "https://inuscard.com" },
  { icon: Package, label: "완성패키지", href: "https://blog.naver.com/inusmusics/220652965646" },
];

export default function EventSection() {
  return (
    <section id="additional-services" className="section-light py-20 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="fade-in-up text-center mb-12">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Special Event</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이너스뮤직 특별 이벤트
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event 1 */}
          <div className="fade-in-up p-8 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a96e]/5 rounded-bl-full" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5">
                  <Gift className="w-5 h-5 text-[#c9a96e]" />
                </div>
                <div>
                  <p className="text-[#c9a96e] text-[10px] tracking-wider uppercase">Event 01</p>
                  <p className="text-[#2c1810] text-sm font-medium" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    숨고 리뷰 이벤트
                  </p>
                </div>
              </div>
              <p className="text-[#2c1810]/70 text-sm leading-relaxed mb-4">
                숨고 리뷰 작성 시
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#c9a96e]/10 border border-[#c9a96e]/20 text-[#c9a96e] text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  최대 2만원 할인
                </span>
                <span className="inline-flex items-center px-3 py-1.5 bg-[#c9a96e]/5 border border-[#c9a96e]/15 text-[#2c1810]/70 text-xs">
                  웨딩 준비 체크리스트 제공
                </span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="fade-in-up p-8 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: "120ms" }}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a96e]/5 rounded-bl-full" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5">
                  <PenLine className="w-5 h-5 text-[#c9a96e]" />
                </div>
                <div>
                  <p className="text-[#c9a96e] text-[10px] tracking-wider uppercase">Event 02</p>
                  <p className="text-[#2c1810] text-sm font-medium" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    블로그 후기 이벤트
                  </p>
                </div>
              </div>
              <p className="text-[#2c1810]/70 text-sm leading-relaxed mb-4">
                블로그 후기 작성 시
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#c9a96e]/10 border border-[#c9a96e]/20 text-[#c9a96e] text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  추가 혜택 제공
                </span>
              </div>
              <a
                href="https://blog.naver.com/inusmusics/220652958346"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-[#c9a96e] text-xs hover:text-[#b8963f] transition-colors duration-300 border-b border-[#c9a96e]/30 pb-0.5"
              >
                자세히 알아보기
              </a>
            </div>
          </div>
        </div>

        {/* 추가 옵션 서비스 - 기존 독립 섹션(383px)에서 흡수 */}
        <div className="fade-in-up mt-10 pt-8 border-t border-[#c9a96e]/15">
          <p className="text-center text-[#2c1810]/50 text-xs tracking-wider uppercase mb-5">
            Additional Options · 추가 옵션 서비스
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {services.map((svc, i) => (
              <a
                key={i}
                href={svc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 py-4 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svc.icon className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
                <span className="text-[#2c1810]/80 text-[11px] group-hover:text-[#c9a96e] transition-colors duration-300 text-center leading-tight">
                  {svc.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

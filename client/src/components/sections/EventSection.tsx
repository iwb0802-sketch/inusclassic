/**
 * Design: Light section with event cards
 * Based on screenshot #15
 */
import { Gift, PenLine, Sparkles } from "lucide-react";

export default function EventSection() {
  return (
    <section className="section-light py-20 md:py-24">
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
      </div>
    </section>
  );
}

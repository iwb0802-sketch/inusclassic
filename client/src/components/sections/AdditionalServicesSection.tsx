/**
 * Design: Light section - 추가 옵션 서비스
 * 수정: 모바일 세로 리스트 (홀수 비어보이지 않게) + 클릭시 전체 보이게 토글
 */
import { useState } from "react";
import { Music2, Mic, Theater, UserRound, MicVocal, ChevronDown, Sparkles, Package } from "lucide-react";

export default function AdditionalServicesSection() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      icon: Music2,
      label: "재즈",
      desc: "재즈 연주 상품",
      href: "https://inusjazz.kr/",
    },
    {
      icon: Mic,
      label: "중창팝페라",
      desc: "중창팝페라 공연",
      href: "https://blog.naver.com/inusmusics/220622621535",
    },
    {
      icon: Theater,
      label: "뮤지컬웨딩",
      desc: "뮤지컬 웨딩 연출",
      href: "https://inusmw.kr/",
    },
    {
      icon: UserRound,
      label: "사회",
      desc: "전문 사회자",
      href: "https://inusmc.co.kr/",
    },
    {
      icon: MicVocal,
      label: "축가",
      desc: "축가 서비스",
      href: "https://inusmusic.kr/",
    },
    {
      icon: Package,
      label: "완성패키지",
      desc: "완성형 패키지 상품",
      href: "https://blog.naver.com/inusmusics/220652965646",
    },
  ];

  return (
    <section id="additional-services" className="section-light py-20 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="fade-in-up text-center mb-8">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Additional Options</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            추가 옵션 서비스
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        {/* Toggle Button */}
        <div className="fade-in-up mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center gap-3 py-4 border border-[#c9a96e]/30 hover:border-[#c9a96e]/60 transition-all duration-300 bg-white/50"
          >
            <Sparkles className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
            <span className="text-[#2c1810] text-sm tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              {isOpen ? "추가 옵션 닫기" : "추가 옵션 서비스 보기"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#c9a96e] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Desktop: 6-column grid */}
          <div className="hidden md:grid grid-cols-6 gap-4">
            {services.map((svc, i) => (
              <a
                key={i}
                href={svc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-in-up group flex flex-col items-center gap-3 p-6 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/50 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5 group-hover:bg-[#c9a96e]/15 transition-colors duration-300">
                  <svc.icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.5} />
                </div>
                <span className="text-[#2c1810] text-sm font-medium group-hover:text-[#c9a96e] transition-colors duration-300">
                  {svc.label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile: Vertical list (깔끔한 세로 리스트) */}
          <div className="md:hidden space-y-0">
            {services.map((svc, i) => (
              <a
                key={i}
                href={svc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 py-4 border-b border-[#c9a96e]/15 group transition-all duration-300 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <div className="w-10 h-10 shrink-0 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5 group-hover:bg-[#c9a96e]/15 transition-colors duration-300">
                  <svc.icon className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-[#2c1810] text-sm font-medium group-hover:text-[#c9a96e] transition-colors duration-300">
                    {svc.label}
                  </p>
                  <p className="text-[#2c1810]/40 text-xs">{svc.desc}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-[#c9a96e]/40 -rotate-90 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

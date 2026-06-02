/**
 * Design: Velvet & Gold - Full-screen hero with cinematic dark overlay
 * 수정: 모바일/데스크탑 모두 object-cover로 이미지 전체 채움
 *       텍스트와 버튼을 화면 내에서 균형있게 배치
 */
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const trustSection = document.getElementById("trust");
    if (trustSection) {
      trustSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-[#0a0d10]">
      {/* Background Image - 모바일/데스크탑 모두 cover로 전체 채움 */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-classical-wedding.webp"
          alt="Luxury wedding hall with classical instruments"
          className="w-full h-full object-cover object-center"
        />
        {/* 모바일에서 텍스트 가독성을 위해 오버레이 강화 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419]/60 via-[#0f1419]/30 to-[#0f1419]/70 md:from-[#0f1419]/70 md:via-[#0f1419]/40 md:to-[#0f1419]/80" />
      </div>

      {/* Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#c9a96e]"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#c9a96e]/25 hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#c9a96e]/25 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-b border-l border-[#c9a96e]/25 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b border-r border-[#c9a96e]/25 hidden md:block" />

      {/* Content - 전체를 justify-center로 중앙 배치 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        {/* Brand */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-10 md:w-12 h-px bg-[#c9a96e]/50" />
            <span
              className="text-[#c9a96e] text-[10px] md:text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              INUSMUSIC
            </span>
            <div className="w-10 md:w-12 h-px bg-[#c9a96e]/50" />
          </div>
          <p className="text-[#f8f4ef]/40 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            Classical Performance
          </p>
        </div>

        {/* Main headline */}
        <h1
          className="text-[2rem] leading-snug md:text-6xl lg:text-7xl text-[#f8f4ef] mb-4 md:mb-6 md:leading-tight"
          style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 400, textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)' }}
        >
          공간의 품격을 높이는<br />
          <span className="bg-gradient-to-r from-[#c9a96e] via-[#e8d5a3] to-[#c9a96e] bg-clip-text text-transparent">
            웨딩 클래식 연주
          </span>
        </h1>

        {/* Subtitle - 줄바꿈 지정 */}
        <p className="text-[#f8f4ef]/80 text-sm md:text-lg max-w-xl mb-8 md:mb-10 font-light leading-relaxed text-center" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
          공간의 분위기를 섬세하게<br />
          채우는 클래식 연주
        </p>

        <div className="gold-divider w-16 md:w-20 mb-8 md:mb-10" />

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <a
            href="https://pf.kakao.com/_wxovaM/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-[200px] md:w-[220px] py-3 md:py-3.5 bg-[#c9a96e] text-[#1a1207] font-medium hover:bg-[#e8d5a3] transition-all duration-500 text-sm tracking-wider shadow-lg shadow-[#c9a96e]/20"
          >
            카톡 상담하기
          </a>
          <button
            onClick={scrollToNext}
            className="inline-flex items-center justify-center w-[200px] md:w-[220px] py-3 md:py-3.5 bg-[#0f1419]/60 backdrop-blur-sm border border-[#f8f4ef]/30 text-[#f8f4ef] hover:bg-[#0f1419]/80 hover:border-[#f8f4ef]/50 transition-all duration-500 text-sm tracking-wider"
          >
            자세한 내용보기
            <ChevronDown className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 animate-bounce cursor-pointer bg-transparent border-none z-20"
      >
        <span className="text-[#c9a96e]/40 text-[9px] md:text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#c9a96e]/40" />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.25; }
          75% { transform: translateY(-20px) translateX(15px); opacity: 0.45; }
        }
      `}</style>
    </section>
  );
}

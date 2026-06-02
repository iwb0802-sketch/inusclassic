/**
 * Design: Light section - 완성형 웨딩 패키지만 표시
 * 기본 구성 안내는 CompositionGuideSection으로 분리됨
 */
export default function CompositionSection() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container">
        <div className="fade-in-up max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Complete Package</p>
            <h2
              className="text-2xl md:text-3xl text-[#2c1810] mb-4"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
            >
              완성형 웨딩 패키지
            </h2>
            <div className="gold-divider w-16 mx-auto" />
          </div>
          <div className="p-8 md:p-10 border border-[#c9a96e]/20 bg-white text-center">
            <p className="text-[#2c1810]/70 text-sm leading-relaxed mb-4">
              사회 · 축가 · 연주 · 뮤지컬웨딩을<br />
              각각 따로 준비하지 마세요.
            </p>
            <p
              className="text-[#2c1810] text-base leading-relaxed mb-4"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              하나로 설계될 때<br />
              예식의 흐름과 완성도가 달라집니다.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-8 h-px bg-[#c9a96e]/40" />
              <div className="w-2 h-2 rotate-45 border border-[#c9a96e]/60" />
              <div className="w-8 h-px bg-[#c9a96e]/40" />
            </div>
            <p className="text-[#c9a96e] text-sm mt-4 font-medium">
              가장 만족도가 높은 구성으로 추천드립니다
            </p>
            <a
              href="https://blog.naver.com/inusmusics/220652965646"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white transition-all duration-500 text-sm tracking-wider"
            >
              완성형 패키지 자세히 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

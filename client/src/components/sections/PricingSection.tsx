/**
 * Design: Dark section with elegant pricing cards
 * 수정: 모바일에서 홀수(5개) 비어보이지 않게 세로 리스트로 변경
 */
export default function PricingSection() {
  const mainPrices = [
    { name: "Piano Solo", desc: "피아노 독주", price: "100,000", popular: false },
    { name: "Duo", desc: "2중주", price: "180,000", popular: false },
    { name: "Trio", desc: "3중주", price: "230,000", popular: false },
    { name: "Quartet", desc: "4중주", price: "300,000", popular: false },
    { name: "Quintet", desc: "5중주", price: "370,000", popular: false },
  ];

  // 프리미엄 풀 편성 라인업 (오케스트라 에디션)
  const orchestraEdition = [
    {
      sub: "Sextet · 6중주",
      instruments: "피아노 + 바이올린2 + 비올라 + 첼로 + 플룻",
      addedNote: "+ 플룻 추가",
      price: "450,000",
    },
    {
      sub: "Septet · 7중주",
      instruments: "피아노 + 바이올린3 + 비올라 + 첼로 + 플룻",
      addedNote: "+ 플룻, 바이올린 추가",
      price: "520,000",
    },
  ];

  return (
    <section id="pricing" className="section-dark py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="fade-in-up text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#c9a96e]/40" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              INUSMUSIC
            </span>
            <div className="w-8 h-px bg-[#c9a96e]/40" />
          </div>
          <h2
            className="text-2xl md:text-4xl text-[#f8f4ef] mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Classic Ensemble
          </h2>
          <p
            className="text-[#c9a96e] text-lg md:text-xl"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Special Price
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* 기본 구성 안내 - 기존 독립 섹션(483px)에서 흡수 */}
        <div className="fade-in-up max-w-3xl mx-auto mb-14">
          <p className="text-center text-[#f8f4ef]/40 text-xs tracking-wider uppercase mb-4">
            Ensemble · 기본 구성 안내
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: "Trio (3중주)", instruments: "피아노 + 바이올린 + 첼로" },
              { name: "Quartet (4중주)", instruments: "피아노 + 바이올린2 + 첼로" },
              { name: "Quintet (5중주)", instruments: "바이올린2 + 비올라 + 첼로 + 피아노" },
            ].map((comp, i) => (
              <div
                key={i}
                className="px-4 py-3 text-center border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-colors duration-300"
              >
                <p
                  className="text-[#c9a96e] text-xs font-medium mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {comp.name}
                </p>
                <p className="text-[#f8f4ef]/50 text-[11px] leading-tight">{comp.instruments}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Pricing - 본식 연주 */}
        <div className="fade-in-up max-w-4xl mx-auto mb-20">
          <h3 className="text-center text-[#c9a96e] text-sm tracking-wider uppercase mb-10">본식 연주</h3>

          {/* Desktop: 5-column grid */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            {mainPrices.map((item, i) => (
              <div
                key={i}
                className={`relative p-6 text-center border transition-all duration-300 hover:border-[#c9a96e]/60 hover:-translate-y-1 ${
                  item.popular
                    ? "border-[#c9a96e]/60 bg-[#c9a96e]/5"
                    : "border-[#c9a96e]/15 bg-transparent"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#c9a96e] text-[#0f1419] text-[10px] tracking-wider uppercase font-medium">
                    인기
                  </div>
                )}
                <p
                  className="text-[#f8f4ef] text-sm mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.name}
                </p>
                <p className="text-[#f8f4ef]/50 text-xs mb-4">{item.desc}</p>
                <p className="text-[#c9a96e] text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.price}
                </p>
                <p className="text-[#f8f4ef]/40 text-[10px] mt-1">원</p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical list (깔끔한 세로 리스트) */}
          <div className="md:hidden space-y-0">
            {mainPrices.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-4 border-b transition-all duration-300 ${
                  i === 0 ? "border-t" : ""
                } border-[#c9a96e]/15`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-[#c9a96e]/40 text-[10px] w-5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[#f8f4ef] text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.name}
                    </p>
                    <p className="text-[#f8f4ef]/40 text-xs">{item.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#c9a96e] text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.price}
                  </p>
                  <p className="text-[#f8f4ef]/40 text-[10px]">원</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orchestra Edition - 프리미엄 풀 편성 라인업 */}
        <div className="fade-in-up max-w-4xl mx-auto mb-20" style={{ transitionDelay: "150ms" }}>
          <div className="relative border border-[#c9a96e]/40 bg-gradient-to-b from-[#c9a96e]/[0.08] to-transparent p-6 md:p-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a96e] text-[#0f1419] text-[10px] tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
              Premium
            </div>

            <div className="text-center mb-10 pt-3">
              <p
                className="text-[#c9a96e] text-xs tracking-[0.25em] uppercase mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Premium Ensemble
              </p>
              <h3
                className="text-[#f8f4ef] text-2xl md:text-3xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Orchestra Edition
              </h3>
              <p
                className="text-[#f8f4ef]/50 text-xs md:text-sm break-keep"
                style={{ wordBreak: "keep-all" }}
              >
                풍성한 선율을 완성하는<br className="sm:hidden" /> 이너스뮤직의 프리미엄 풀 편성
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {orchestraEdition.map((item, i) => (
                <div
                  key={i}
                  className="border border-[#c9a96e]/25 bg-[#0f1419]/40 p-6 md:p-7 text-center hover:border-[#c9a96e]/60 transition-all duration-300"
                >
                  <p
                    className="text-[#c9a96e] text-[11px] tracking-[0.2em] uppercase mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.sub}
                  </p>
                  <p
                    className="text-[#f8f4ef] text-sm mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Orchestra Edition
                  </p>
                  <p className="text-[#f8f4ef]/60 text-xs mb-1 break-keep" style={{ wordBreak: "keep-all" }}>
                    {item.instruments}
                  </p>
                  <p className="text-[#c9a96e]/70 text-[11px] mb-5 break-keep" style={{ wordBreak: "keep-all" }}>
                    {item.addedNote}
                  </p>
                  <p className="text-[#c9a96e] text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.price}
                  </p>
                  <p className="text-[#f8f4ef]/40 text-[10px] mt-1">원</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reception Pricing - 피로연 연주 */}
        <div className="fade-in-up max-w-3xl mx-auto" style={{ transitionDelay: "200ms" }}>
          <h3 className="text-center text-[#c9a96e] text-sm tracking-wider uppercase mb-10">피로연 연주 금액안내</h3>
          <div className="border border-[#c9a96e]/20 p-6 md:p-10">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#c9a96e]/10 pb-5 gap-2">
                <div>
                  <span className="text-[#f8f4ef]/80 text-sm">2부 피로연 연주 요청 시</span>
                </div>
                <span className="text-[#c9a96e] font-semibold text-base">1인당 <span className="text-lg">50,000</span>원 추가</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#c9a96e]/10 pb-5 gap-2">
                <div>
                  <span className="text-[#f8f4ef]/80 text-sm">기본 연주 범위</span>
                  <p className="text-[#f8f4ef]/40 text-xs mt-1">피로연 연주는 사진 촬영 종료 후부터 내빈 인사 전까지 진행됩니다.</p>
                </div>
                <span className="text-[#f8f4ef]/60 text-sm flex-shrink-0">촬영 종료 ~ 내빈 인사 전</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <span className="text-[#f8f4ef]/80 text-sm">연장 진행 안내</span>
                  <p className="text-[#f8f4ef]/40 text-xs mt-1">내빈 인사 시점까지 연주를 원하실 경우 진행 시간이 연장됩니다.</p>
                </div>
                <span className="text-[#c9a96e] font-semibold text-base flex-shrink-0">1인당 <span className="text-lg">30,000</span>원 추가</span>
              </div>
            </div>
            <p className="text-[#f8f4ef]/40 text-xs mt-6 text-center">
              * 연장 진행 시 인당 총 80,000원
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

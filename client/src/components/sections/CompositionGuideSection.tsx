/**
 * Design: Light section - 기본 구성 안내
 * ProcessSection 아래에 배치
 * 4중주 인기 표시 없음
 */


export default function CompositionGuideSection() {
  const compositions = [
    { name: "Trio (3중주)", instruments: "피아노 + 바이올린 + 첼로" },
    { name: "Quartet (4중주)", instruments: "피아노 + 바이올린2 + 첼로" },
    { name: "Quintet (5중주)", instruments: "바이올린2 + 비올라 + 첼로 + 피아노" },
  ];

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container">
        <div className="fade-in-up text-center mb-12">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Ensemble</p>
          <h2
            className="text-xl md:text-2xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            기본 구성 안내
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="fade-in-up max-w-3xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compositions.map((comp, i) => (
              <div
                key={i}
                className="p-6 text-center border border-[#c9a96e]/15 bg-white transition-all duration-300 hover:border-[#c9a96e]/50"
              >
                <p className="text-[#2c1810] text-sm font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {comp.name}
                </p>
                <p className="text-[#2c1810]/60 text-xs">{comp.instruments}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

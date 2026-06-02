/**
 * Design: Dark section with gold accent numbers
 * Trust indicators: Since 2015, 1000+ reviews, 40000+ weddings
 */
export default function TrustSection() {
  const stats = [
    { number: "SINCE 2015", label: "10년 이상 축적된", sublabel: "웨딩 진행 경험" },
    { number: "1,000+", label: "본식 후기", sublabel: "실제 고객이 남긴 신뢰의 기록" },
    { number: "40,000+", label: "쌍 이상 진행", sublabel: "오랜 시간 축적된 운영 노하우" },
  ];

  return (
    <section id="trust" className="section-dark py-16 md:py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="fade-in-up text-center mb-12">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Trust & Experience</p>
          <h2
            className="text-xl md:text-2xl text-[#f8f4ef] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            신뢰할 수 있는 이유
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="fade-in-up text-center relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Vertical divider between items */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#c9a96e]/15" />
              )}
              <p
                className="text-2xl md:text-3xl text-[#c9a96e] mb-3 font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[#f8f4ef]/80 text-sm mb-1">{stat.label}</p>
              <p className="text-[#f8f4ef]/40 text-xs">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

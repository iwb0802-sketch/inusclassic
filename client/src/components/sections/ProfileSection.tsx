/**
 * Design: Dark section with performer profiles
 * 수정: 프로필 사진 크기 축소하여 화질 보완 (원형 작은 사이즈)
 */
export default function ProfileSection() {
  const teamManager = {
    nameKr: "민향혜",
    nameEn: "Min, Hyang-Hye",
    role: "클래식팀장",
    image: "/images/min-hyanghye.jpg",
    // 다이어트: credentials 10줄 -> 핵심 5줄 통합 압축
    credentials: [
      "반주학과 재학 · 예능음악신문사 전국음악콩쿨 최우수상",
      "GML 음악콩쿨 최우수상 외 다수 콩쿨 입상",
      "Bel di music 상임반주자",
      "코리아나챔버오케스트라 협연 · 세종예술문화협회 콩쿠르 입상",
      "라이징 · 압구정 음악학원 출강 / 교원(실기)자격증",
    ],
  };

  const profiles = [
    {
      nameKr: "강다연",
      nameEn: "Kang, Da-Yeon",
      instrument: "Cello",
      instrumentKr: "첼로 연주자",
      image: "/images/kang-dayeon.jpg",
      credentials: [
        "국민대 대학원 석사 졸업",
        "예전예술기획 콩쿠르 입상 · 금천교향악단 객원",
        "일본 Tokushima Bunri University 합동 연주",
        "동탄 유소오케 · 매원초/경인초 출강 강사 역임",
      ],
    },
    {
      nameKr: "김슬지",
      nameEn: "Kim, Seul-Ji",
      instrument: "Piano",
      instrumentKr: "피아노 연주자",
      image: "/images/kim-seulji.jpg",
      credentials: [
        "숙명여대 졸업",
        "예전예술기획 콩쿠르 입상 · 금천교향악단 객원",
        "일본 Tokushima Bunri University 합동 연주",
        "매원초/경인초/성남여중 출강 강사 역임",
      ],
    },
    {
      nameKr: "이연지",
      nameEn: "Lee, Yeon-Ji",
      instrument: "Violin",
      instrumentKr: "바이올린 연주자",
      image: "/images/lee-yeonji.jpg",
      credentials: [
        "선화예고 · 숙명여대 졸업",
        "비엔에스 메인 바이올린 5년 진행",
        "코리아나챔버오케스트라 협연",
        "세종예술문화협회 · J&R 콩쿠르 입상",
      ],
    },
  ];

  return (
    <section id="profile" className="section-dark py-16 md:py-20">
      <div className="container">
        {/* Team Manager */}
        <div className="fade-in-up text-center mb-10">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Classic Team Manager Profile</p>
          <h2
            className="text-2xl md:text-3xl text-[#f8f4ef] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이너스뮤직 클래식팀장 프로필
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        {/* Manager Card - compact with smaller circular photo */}
        <div className="fade-in-up max-w-lg mx-auto mb-16">
          <div className="border border-[#c9a96e]/15 p-7 text-center">
            {/* Circular Photo - small to preserve quality */}
            <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#c9a96e]/30 shadow-lg shadow-[#c9a96e]/10">
              <img
                src={teamManager.image}
                alt={teamManager.nameKr}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>

            <p className="text-[#c9a96e] text-sm tracking-wider mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              {teamManager.nameEn}
            </p>
            <h3 className="text-[#f8f4ef] text-xl mb-1" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
              {teamManager.nameKr}
            </h3>
            <p className="text-[#c9a96e]/60 text-xs mb-6">{teamManager.role}</p>

            <div className="text-left max-w-xs mx-auto space-y-1.5 mb-5">
              {teamManager.credentials.map((cred, j) => (
                <p key={j} className="text-[#f8f4ef]/60 text-xs">· {cred}</p>
              ))}
            </div>

          </div>
        </div>

        {/* Performers */}
        <div className="fade-in-up text-center mb-10">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Classic Team Profile</p>
          <h2
            className="text-2xl md:text-3xl text-[#f8f4ef] mb-5"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이너스뮤직 클래식 대표 연주자 라인업
          </h2>

          {/* 보유 연주자 규모 스탯 배지 */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#c9a96e]/25 rounded-full bg-[#c9a96e]/5 mb-2">
            <span
              className="text-[#c9a96e] text-lg md:text-xl font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              50+
            </span>
            <span className="text-[#f8f4ef]/70 text-xs md:text-sm tracking-wide">
              명의 검증된 클래식 연주자 보유
            </span>
          </div>

          <div className="gold-divider w-16 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="fade-in-up border border-[#c9a96e]/15 overflow-hidden group hover:border-[#c9a96e]/40 transition-all duration-500 text-center p-6"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Circular Photo - small to preserve quality */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-2 border-[#c9a96e]/30 shadow-lg shadow-[#c9a96e]/10 group-hover:border-[#c9a96e]/60 transition-all duration-500">
                <img
                  src={profile.image}
                  alt={profile.nameKr}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>

              <p className="text-[#c9a96e] text-xs tracking-wider mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {profile.nameEn}
              </p>
              <p className="text-[#f8f4ef]/50 text-[10px] mb-2">{profile.instrumentKr}</p>

              <h3 className="text-[#f8f4ef] text-lg mb-1" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
                {profile.nameKr}
              </h3>
              <p className="text-[#c9a96e]/60 text-xs mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                {profile.instrument}
              </p>

              <div className="text-left space-y-1.5 mb-4">
                {profile.credentials.map((cred, j) => (
                  <p key={j} className="text-[#f8f4ef]/60 text-xs">· {cred}</p>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* 50인 이상 보유 안내 문장 */}
        <p className="fade-in-up text-center text-[#f8f4ef]/50 text-xs md:text-sm max-w-2xl mx-auto mt-8 leading-relaxed break-keep" style={{ wordBreak: "keep-all" }}>
          위 프로필은 이너스뮤직 클래식팀의 대표 연주자입니다. 첼로·바이올린·피아노·플룻 등 편성별로{" "}
          <span className="text-[#c9a96e]">검증된 50인 이상의 연주자 풀</span>을 보유하고 있으며, 예식 인원과 편성 규모에 맞춰 최적의 연주자를 배정합니다.
        </p>
      </div>
    </section>
  );
}

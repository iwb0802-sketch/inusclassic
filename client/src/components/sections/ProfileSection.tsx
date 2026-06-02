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
    credentials: [
      "반주학과 재학 예능음악신문사 전국음악콩쿨 최우수상",
      "GML 음악콩쿨 최우수상 등",
      "다수 콩쿨 입상 Bel di music 상임반주자",
      "라이징 음악학원출강",
      "압구정 음악학원출강",
    ],
    activities: [
      "제 8회 세종예술문화협회 콩쿠르 입상",
      "제 7회 코리아나챔버오케스트라 협연",
      "제 3회 J&R콩쿠르 입상",
      "제 4회 바루에코라전국음악콩쿠르 입상",
      "교원(실기)자격증 취득",
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
        "예전예술기획 콩쿠르 입상",
        "금천교향악단 객원 역임",
        "동탄 유소오케 강사 역임",
      ],
      activities: [
        "도마령산촌 문화축제 연주",
        "매원초/경인초/성남여중 출강 강사 역임",
        "일본 Tokushima Bunri University 합동 연주",
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
        "예전예술기획 콩쿠르 입상",
        "금천교향악단 객원 역임",
      ],
      activities: [
        "도마령산촌 문화축제 연주",
        "매원초/경인초/성남여중 출강 강사 역임",
        "일본 Tokushima Bunri University 합동 연주",
      ],
    },
    {
      nameKr: "이연지",
      nameEn: "Lee, Yeon-Ji",
      instrument: "Violin",
      instrumentKr: "바이올린 연주자",
      image: "/images/lee-yeonji.jpg",
      credentials: [
        "선화예고 졸업",
        "숙명여대 졸업",
        "비엔에스 메인 바이올린 5년 진행",
      ],
      activities: [
        "제 8회 세종예술문화협회 콩쿠르 입상",
        "제 7회 코리아나챔버오케스트라 협연",
        "제 3회 J&R콩쿠르 입상",
      ],
    },
  ];

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        {/* Team Manager */}
        <div className="fade-in-up text-center mb-16">
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
        <div className="fade-in-up max-w-lg mx-auto mb-24">
          <div className="border border-[#c9a96e]/15 p-8 text-center">
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

            <div className="text-left max-w-xs mx-auto border-t border-[#c9a96e]/10 pt-4 space-y-1.5">
              {teamManager.activities.map((act, j) => (
                <p key={j} className="text-[#f8f4ef]/40 text-xs">· {act}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Performers */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Classic Team Profile</p>
          <h2
            className="text-2xl md:text-3xl text-[#f8f4ef] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            이너스뮤직 클래식 연주자
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="fade-in-up border border-[#c9a96e]/15 overflow-hidden group hover:border-[#c9a96e]/40 transition-all duration-500 text-center p-8"
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

              <div className="text-left border-t border-[#c9a96e]/10 pt-4 space-y-1.5">
                {profile.activities.map((act, j) => (
                  <p key={j} className="text-[#f8f4ef]/40 text-xs">· {act}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

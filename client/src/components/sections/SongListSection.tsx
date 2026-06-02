/**
 * Design: Light section - 클래식 곡 리스트 & 연주순서 안내
 * 수정: 곡리스트 클릭시 펼쳐지는 토글, 연주순서 클릭시 펼쳐지는 토글
 * 연주순서 안내 문구 줄바꿈 모바일 최적화
 */
import { useState } from "react";
import { ChevronDown, Music, ListOrdered } from "lucide-react";

const songData: Record<string, string[]> = {
  화촉점화: [
    "꽃노래",
    "봄날 벚꽃 그리고 너",
    "홈 스위트 홈",
    "엘가, 사랑의 인사",
    "Childhood days",
    "찬송가 604장 완전한사랑",
    "Always with me (센과 치히로 OST)",
    "My wedding day, bridal waltz",
    "언제나몇번이라도 (센과 치히로 OST)",
    "브람스의 왈츠",
    "꽃날",
    "위모레스크",
    "봄바람 (버스커버스커)",
    "Love me tender",
  ],
  신랑입장: [
    "위풍당당행진곡 (엘가)",
    "트럼펫 발룬터리",
    "환희의 합창 (베토벤)",
    "트럼펫 튠",
    "Rider's March (인디아나존스 OST)",
    "Mai pu cosilontano (안드레아 보첼리)",
    "Frying (스티브 바라캇)",
    "밀리터리행진곡 (슈베르트)",
    "Viva la vida",
    "Departure (굿럭 OST)",
  ],
  신부입장: [
    "결혼행진곡 (바그너)",
    "She (노팅힐 OST)",
    "완전한 사랑",
    "Loving you (케니G)",
    "Can't help falling in love",
    "백조 (생상스)",
    "왈츠포데비",
    "The rose (배틀미들러)",
    "A whole new world (알라딘 OST)",
    "Someday my prince will come (백설공주 OST)",
    "Beauty and the beast (미녀와야수 OST)",
    "Il mondo",
  ],
  내빈인사: [
    "Love affair",
    "당신의 소중한 사람",
    "Moonriver",
    "Over the rainbow",
    "Open arms",
    "Perhaps love",
    "10월의 어느 멋진 날에",
    "A love until the end of time",
    "라프로메사 (윤영석)",
    "Angel over me (스티븐 바라캇)",
    "우리 처음 만난날을 기억하나요",
  ],
  행진: [
    "축혼행진곡 (멘델스존)",
    "왈츠 (브람스)",
    "환희의 송가",
    "Departure (굿럭 OST)",
    "Marry you (브루노 마스)",
    "트럼펫 튠",
    "트럼펫 발룬터리",
    "Have a nice day",
    "Viva la vida",
    "Can't take my eyes off you",
    "Feel so good (Chuck Mangione)",
    "Another day of sun (라라랜드 OST)",
  ],
};

const tabKeys = Object.keys(songData);

const performanceOrder = [
  {
    step: "01",
    title: "식전연주",
    desc: "예식 15분 전부터 클래식 소품곡, 영화음악 OST, 팝송, 재즈 등 조용하고 잔잔한 분위기 연출",
  },
  {
    step: "02",
    title: "화촉점화",
    desc: "양가 어머니의 촛불점화 시 잔잔한 곡 연주",
  },
  {
    step: "03",
    title: "신랑입장",
    desc: "신랑입장에 맞는 웅장한 곡 연주",
  },
  {
    step: "04",
    title: "신부입장",
    desc: "신부입장에 맞는 선율이 아름다운 곡 연주",
  },
  {
    step: "05",
    title: "예물교환",
    desc: "피아노 독주로 잔잔한 곡 연주",
  },
  {
    step: "06",
    title: "축가 & 축주",
    desc: "축가반주 서비스 (반주 가능한 곡에 한함) · 축하연주 서비스 (신청자에 한함)",
  },
  {
    step: "07",
    title: "양가부모님 & 내빈인사",
    desc: "피아노 독주로 잔잔한 곡 연주",
  },
  {
    step: "08",
    title: "행진",
    desc: "행진에 맞는 웅장한 곡 연주",
  },
  {
    step: "09",
    title: "식후곡",
    desc: "분위기 정돈을 위해 1곡 연주",
  },
  {
    step: "10",
    title: "피로연 연주",
    desc: "1부 퇴장시부터 식사시간 / 2부 재입장 / 케익커팅 / 샴페인사워까지 약 1시간 연주 (추가비용 발생)",
  },
];

export default function SongListSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [songListOpen, setSongListOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <section id="songlist" className="section-light py-20 md:py-28">
      <div className="container">
        {/* ── 곡 리스트 ── */}
        <div className="fade-in-up text-center mb-8">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">
            Song List
          </p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            클래식 곡 리스트
          </h2>
          <p className="text-[#2c1810]/50 text-sm max-w-md mx-auto">
            아래의 클래식 리스트 곡 이외에{" "}
            <br className="sm:hidden" />
            원하시는 곡으로도 진행 가능합니다.
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* Toggle Button */}
        <div className="fade-in-up max-w-4xl mx-auto mb-6">
          <button
            onClick={() => setSongListOpen(!songListOpen)}
            className="w-full flex items-center justify-center gap-3 py-4 border border-[#c9a96e]/30 hover:border-[#c9a96e]/60 transition-all duration-300 bg-white/50"
          >
            <Music className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
            <span className="text-[#2c1810] text-sm tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              {songListOpen ? "곡 리스트 닫기" : "클래식 곡 리스트 보기"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#c9a96e] transition-transform duration-300 ${songListOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Collapsible Song List Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            songListOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="fade-in-up max-w-4xl mx-auto mb-20">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(i)}
                  className="px-5 py-2.5 text-sm tracking-wide transition-all duration-300"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontWeight: 400,
                    background:
                      activeTab === i
                        ? "linear-gradient(135deg, #c9a96e, #a68b4b)"
                        : "transparent",
                    color: activeTab === i ? "#fff" : "#2c1810",
                    border:
                      activeTab === i
                        ? "1px solid transparent"
                        : "1px solid rgba(201,169,110,0.3)",
                  }}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Song Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {songData[tabKeys[activeTab]].map((song, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2.5 border-b border-[#c9a96e]/10"
                >
                  <span
                    className="text-[#c9a96e]/40 text-[10px] mt-1 shrink-0 w-4 text-right"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#2c1810]/80 text-sm leading-relaxed">
                    {song}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 연주순서 안내 ── */}
        <div className="fade-in-up text-center mb-8 mt-8">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">
            Performance Order
          </p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            연주순서 안내
          </h2>
          <p className="text-[#2c1810]/50 text-sm max-w-sm mx-auto leading-relaxed">
            아래의 식순은 일반적인 진행순서이며,
            <br className="sm:hidden" />
            {" "}변동이 있을 시
            <br className="hidden sm:inline" />
            {" "}변동사항에 맞게 진행합니다.
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        {/* Toggle Button */}
        <div className="fade-in-up max-w-3xl mx-auto mb-6">
          <button
            onClick={() => setOrderOpen(!orderOpen)}
            className="w-full flex items-center justify-center gap-3 py-4 border border-[#c9a96e]/30 hover:border-[#c9a96e]/60 transition-all duration-300 bg-white/50"
          >
            <ListOrdered className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
            <span className="text-[#2c1810] text-sm tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              {orderOpen ? "연주순서 닫기" : "전체 연주순서 보기"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#c9a96e] transition-transform duration-300 ${orderOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Collapsible Performance Order Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            orderOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="fade-in-up max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a96e]/40 via-[#c9a96e]/20 to-transparent" />

              <div className="space-y-0">
                {performanceOrder.map((item, i) => (
                  <div key={i} className="relative flex items-start gap-5 md:gap-6 py-5 group">
                    {/* Dot */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center border transition-all duration-300 group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/5"
                        style={{
                          borderColor: "rgba(201,169,110,0.25)",
                          background: i === 0 ? "rgba(201,169,110,0.08)" : "rgba(250,246,240,0.9)",
                        }}
                      >
                        <span
                          className="text-[#c9a96e] text-xs"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2 md:pt-3">
                      <h4
                        className="text-[#2c1810] text-base md:text-lg mb-1.5"
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontWeight: 500,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[#2c1810]/50 text-xs md:text-sm leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

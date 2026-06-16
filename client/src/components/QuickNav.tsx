/**
 * 사이드 플로팅 퀵 메뉴 (inusmusic.com/classic 동일 디자인)
 * - 오른쪽 중앙 고정
 * - 버튼 클릭 시 메뉴 펼침/접기
 * - 각 항목 클릭 시 해당 섹션으로 스크롤
 */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const navItems = [
  { label: "소개", id: "intro" },
  { label: "특징", id: "trust" },
  { label: "영상", id: "videos" },
  { label: "곡목록", id: "songlist" },
  { label: "아티스트", id: "profile" },
  { label: "요금", id: "pricing" },
  { label: "후기", id: "reviews" },
  { label: "Q&A", id: "qna" },
];

export default function QuickNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-500 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* 메뉴 패널 */}
      <div
        className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "w-24 opacity-100" : "w-0 opacity-0"
        }`}
        style={{ fontFamily: "'Noto Serif KR', serif" }}
      >
        <div className="bg-[#1a0f07]/95 backdrop-blur-md border border-[#c9a96e]/20 border-r-0 shadow-2xl shadow-black/40 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-4 py-2.5 text-xs tracking-wide transition-all duration-200 whitespace-nowrap
                text-[#f8f4ef]/60 hover:text-[#f8f4ef] hover:bg-white/5`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 토글 버튼 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex flex-col items-center justify-center gap-1 px-1.5 py-5
          bg-[#1a0f07]/70 backdrop-blur-sm border border-[#c9a96e]/20
          hover:bg-[#1a0f07]/90 hover:border-[#c9a96e]/40
          transition-all duration-300 shadow-lg shadow-black/30 group`}
        aria-label="퀵 메뉴"
        style={{
          borderRight: "none",
          borderRadius: "4px 0 0 4px",
        }}
      >
        {/* 세로 텍스트 */}
        <span
          className="text-[#c9a96e]/60 group-hover:text-[#c9a96e] transition-colors duration-300"
          style={{
            fontSize: "9px",
            letterSpacing: "0.15em",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontFamily: "'Noto Serif KR', serif",
          }}
        >
          MENU
        </span>
        {/* 화살표 */}
        <div className="text-[#c9a96e]/50 group-hover:text-[#c9a96e]/80 transition-colors duration-300 mt-1">
          {open ? (
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          ) : (
            <ChevronLeft className="w-3 h-3" strokeWidth={1.5} />
          )}
        </div>
      </button>
    </div>
  );
}

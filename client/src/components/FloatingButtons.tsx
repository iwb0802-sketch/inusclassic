/**
 * 하단 플로팅 버튼: 카톡상담하기(오른쪽), 실황영상보기(왼쪽)
 * + SNS 아이콘 4개 (홈, 인스타, 블로그, 유튜브) - 기존 버튼 아래
 * 히어로 섹션을 지나 스크롤하면 나타남
 */
import { useState, useEffect } from "react";
import { MessageCircle, Play, Globe, Youtube } from "lucide-react";

// 네이버 블로그 아이콘 (SVG)
const NaverBlogIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
  </svg>
);

// 인스타그램 아이콘 (SVG)
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const snsLinks = [
  {
    label: "홈페이지",
    href: "http://inusmusic.com/",
    icon: Globe,
    isSvgComponent: false,
    border: undefined,
  },
  {
    label: "인스타그램",
    href: "https://www.instagram.com/inusmusic/",
    icon: InstagramIcon,
    isSvgComponent: true,
    border: undefined,
  },
  {
    label: "블로그",
    href: "https://blog.naver.com/inusmusics",
    icon: NaverBlogIcon,
    isSvgComponent: true,
    border: "1px solid rgba(0,200,100,0.55)",
  },
  {
    label: "유튜브",
    href: "https://www.youtube.com/channel/UC1zF6ZTCwMxzK9fEqI9ESLA",
    icon: Youtube,
    isSvgComponent: false,
    border: "1px solid rgba(255,60,60,0.65)",
  },
];

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex flex-col items-stretch pointer-events-none transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* SNS 아이콘 바 - 기존 버튼 위에 */}
      <div className="flex justify-center items-center gap-1 pb-1 px-4">
        <div
          className="pointer-events-auto flex items-center gap-0.5 px-3 py-1.5 rounded-full shadow-lg"
          style={{
            background: "rgba(15,20,25,0.82)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          {snsLinks.map((sns) => (
            <a
              key={sns.label}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.label}
              className="w-8 h-8 flex items-center justify-center text-[#c9a96e]/70 hover:text-[#c9a96e] transition-colors duration-300 hover:scale-110 active:scale-95 rounded-sm"
              style={{
                transition: "color 0.2s, transform 0.15s",
                border: sns.border,
              }}
            >
              {sns.isSvgComponent ? (
                <sns.icon />
              ) : (
                <sns.icon className="w-[14px] h-[14px]" strokeWidth={1.5} />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* 기존 플로팅 버튼 */}
      <div className="flex justify-between items-end px-4 pb-6">
        {/* 왼쪽: 실황영상보기 */}
        <a
          href="https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=20"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#2c1810]/90 backdrop-blur-sm border border-[#c9a96e]/30 text-[#f8f4ef] hover:bg-[#2c1810] hover:border-[#c9a96e]/60 transition-all duration-300 shadow-lg shadow-black/20 group"
        >
          <Play className="w-4 h-4 text-[#c9a96e] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
          <span className="text-xs tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            실황영상보기
          </span>
        </a>

        {/* 오른쪽: 카톡상담하기 */}
        <a
          href="https://pf.kakao.com/_wxovaM/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#c9a96e] text-[#1a1207] hover:bg-[#d4b87a] transition-all duration-300 shadow-lg shadow-black/20 group"
        >
          <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
          <span className="text-xs tracking-wide font-medium" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            카톡상담하기
          </span>
        </a>
      </div>
    </div>
  );
}

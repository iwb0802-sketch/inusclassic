/**
 * 하단 플로팅 버튼: 카톡상담하기(오른쪽), 실황영상보기(왼쪽)
 * + SNS 아이콘 4개 (홈, 인스타, 블로그, 유튜브) - 기존 버튼 아래
 * 히어로 섹션을 지나 스크롤하면 나타남
 */
import { useState, useEffect } from "react";
import { MessageCircle, Play, Globe } from "lucide-react";

// 네이버 블로그 아이콘 (SVG) - 초록색 stroke 윤곽선
const NaverBlogIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24">
    {/* 초록 윤곽선 레이어 */}
    <path
      d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"
      fill="none"
      stroke="rgba(0,210,100,0.85)"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* 본체 */}
    <path
      d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"
      fill="currentColor"
    />
  </svg>
);

// 유튜브 아이콘 (SVG) - 빨간색 stroke 윤곽선
const YoutubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24">
    {/* 빨간 윤곽선 레이어 */}
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="none"
      stroke="rgba(255,50,50,0.85)"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    {/* 본체 */}
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="currentColor"
    />
  </svg>
);

// 인스타그램 아이콘 - 공식 그라데이션 SVG (배경 없음)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad1" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    {/* 둥근 사각형 배경 */}
    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-grad1)" />
    {/* 카메라 아운라인 */}
    <rect x="7" y="7" width="10" height="10" rx="3" ry="3" fill="none" stroke="white" strokeWidth="1.5" />
    {/* 렬즈 원 */}
    <circle cx="12" cy="12" r="2.5" fill="none" stroke="white" strokeWidth="1.5" />
    {/* 플래시 점 */}
    <circle cx="16.5" cy="7.5" r="0.8" fill="white" />
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
    isImg: true,
  },
  {
    label: "블로그",
    href: "https://blog.naver.com/inusmusics",
    icon: NaverBlogIcon,
    isSvgComponent: true,
    border: undefined,
  },
  {
    label: "유튜브",
    href: "https://www.youtube.com/channel/UC1zF6ZTCwMxzK9fEqI9ESLA",
    icon: YoutubeIcon,
    isSvgComponent: true,
    border: undefined,
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

/**
 * 하단 플로팅 버튼: 카톡상담하기(오른쪽), 실황영상보기(왼쪽)
 * 히어로 섹션을 지나 스크롤하면 나타남
 */
import { useState, useEffect } from "react";
import { MessageCircle, Play } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 히어로 섹션 높이(100vh) 이후에 표시
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 체크
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-between items-end pointer-events-none transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
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
  );
}

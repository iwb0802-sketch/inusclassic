/**
 * 오른쪽 상단 햄버거 메뉴
 * 클릭시 풀스크린 오버레이로 메뉴 표시
 * 메뉴 항목: 메인, 소개, 영상, 서비스(드롭다운), 후기, 견적
 * 서비스 드롭다운: 결혼식사회, 재즈연주, 축가, 뮤지컬웨딩, 모바일청첩장, 완성패키지
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown } from "lucide-react";

const serviceDropdownItems = [
  { label: "결혼식사회", href: "https://inusmusic.kr/" },
  { label: "재즈연주", href: "https://inusjazz.kr/" },
  { label: "축가", href: "https://inusmusic.kr/" },
  { label: "뮤지컬웨딩", href: "https://inusmw.kr/" },
  { label: "모바일청첩장", href: "https://inuscard.com" },
  { label: "완성패키지", href: "https://blog.naver.com/inusmusics/220652965646" },
];

const menuItems = [
  { label: "메인", target: "top" },
  { label: "소개", target: "intro" },
  { label: "영상", target: "videos" },
  { label: "서비스", target: "additional-services", hasDropdown: true },
  { label: "후기", target: "reviews" },
  { label: "견적", target: "pricing" },
];

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showGlow, setShowGlow] = useState(true);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 초기 glow 펄스 - 3번 반짝인 후 멈춤
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlow(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // body 스크롤 잠금
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 메뉴 닫힐 때 드롭다운도 닫기
  useEffect(() => {
    if (!isOpen) {
      setServiceDropdownOpen(false);
    }
  }, [isOpen]);

  const handleNavigate = useCallback((target: string) => {
    setIsOpen(false);
    setServiceDropdownOpen(false);
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  const handleServiceClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setServiceDropdownOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* 햄버거 버튼 - 오른쪽 상단 고정 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-5 right-5 z-[60] w-11 h-11 flex flex-col items-center justify-center gap-[6px] transition-all duration-500 rounded-sm ${
          isOpen
            ? "bg-transparent border-transparent"
            : scrolled
              ? "bg-[#2c1810]/80 backdrop-blur-sm border-[1.5px] border-[#c9a96e]/40"
              : "bg-[#0f1419]/50 backdrop-blur-sm border-[1.5px] border-[#c9a96e]/30"
        } ${showGlow && !isOpen ? "animate-menu-glow" : ""}`}
        style={{
          boxShadow: showGlow && !isOpen ? undefined : "none",
        }}
        aria-label="메뉴 열기"
      >
        <span
          className={`block h-[1.5px] rounded-full transition-all duration-300 ease-out ${
            isOpen
              ? "w-5 bg-[#f8f4ef] rotate-45 translate-y-[3.75px]"
              : "w-5 bg-[#c9a96e]"
          }`}
        />
        <span
          className={`block h-[1.5px] rounded-full transition-all duration-300 ease-out ${
            isOpen
              ? "w-5 bg-[#f8f4ef] -rotate-45 -translate-y-[3.75px]"
              : "w-3.5 bg-[#c9a96e] ml-auto"
          }`}
        />
      </button>

      {/* 풀스크린 메뉴 오버레이 */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 배경 - 클릭 시 드롭다운 닫기 */}
        <div
          className={`absolute inset-0 bg-[#0f1419]/95 backdrop-blur-md transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            if (serviceDropdownOpen) {
              setServiceDropdownOpen(false);
            } else {
              setIsOpen(false);
            }
          }}
        />

        {/* 메뉴 콘텐츠 */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          {/* 브랜드 */}
          <div
            className={`mb-12 transition-all duration-500 delay-100 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p
              className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              INUSMUSIC
            </p>
            <div className="w-8 h-px bg-[#c9a96e]/30 mx-auto mt-3" />
          </div>

          {/* 메뉴 아이템 */}
          <nav className="flex flex-col items-center gap-1" ref={dropdownRef}>
            {menuItems.map((item, i) => (
              <div key={item.target} className="relative">
                {item.hasDropdown ? (
                  <>
                    {/* 서비스 메뉴 - 드롭다운 토글 버튼 */}
                    <button
                      onClick={handleServiceClick}
                      className={`group px-8 py-3 transition-all duration-500 flex items-center gap-2 ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                      style={{
                        transitionDelay: isOpen ? `${150 + i * 60}ms` : "0ms",
                      }}
                    >
                      <span
                        className={`text-lg tracking-[0.15em] transition-colors duration-300 ${
                          serviceDropdownOpen ? "text-[#c9a96e]" : "text-[#f8f4ef]/80 group-hover:text-[#c9a96e]"
                        }`}
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontWeight: 300,
                        }}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-300 ${
                          serviceDropdownOpen
                            ? "text-[#c9a96e] rotate-180"
                            : "text-[#c9a96e]/50 group-hover:text-[#c9a96e]"
                        }`}
                      />
                      <div className={`absolute bottom-2 left-8 right-8 h-px bg-[#c9a96e]/40 transition-all duration-300 ${serviceDropdownOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    </button>

                    {/* 드롭다운 목록 */}
                    <div
                      className={`overflow-hidden transition-all duration-400 ease-out ${
                        serviceDropdownOpen
                          ? "max-h-[400px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-0 py-2 px-4">
                        {serviceDropdownItems.map((svc, si) => (
                          <a
                            key={si}
                            href={svc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group w-full text-center py-2.5 px-6 transition-all duration-300 ${
                              serviceDropdownOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2"
                            }`}
                            style={{
                              transitionDelay: serviceDropdownOpen
                                ? `${si * 40}ms`
                                : "0ms",
                            }}
                            onClick={() => setIsOpen(false)}
                          >
                            <span
                              className="text-[#f8f4ef]/60 text-sm tracking-[0.12em] group-hover:text-[#c9a96e] transition-colors duration-300"
                              style={{
                                fontFamily: "'Noto Serif KR', serif",
                                fontWeight: 300,
                              }}
                            >
                              {svc.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.target)}
                    className={`group px-8 py-3 transition-all duration-500 ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${150 + i * 60}ms` : "0ms",
                    }}
                  >
                    <span
                      className="text-[#f8f4ef]/80 text-lg tracking-[0.15em] group-hover:text-[#c9a96e] transition-colors duration-300"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.label}
                    </span>
                    <div className="w-0 group-hover:w-full h-px bg-[#c9a96e]/40 mx-auto mt-1 transition-all duration-300" />
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* 하단 연락처 */}
          <div
            className={`mt-14 text-center transition-all duration-500 delay-500 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-px bg-[#c9a96e]/30 mx-auto mb-4" />
            <a
              href="https://pf.kakao.com/_wxovaM/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a96e]/60 text-[11px] tracking-[0.2em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
            >
              카카오톡 상담하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

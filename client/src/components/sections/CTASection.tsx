/**
 * Design: Dark section with CTA buttons grid
 * 수정: 모든 메뉴 버튼 링크 업데이트
 */
import { Video, MessageCircle, Calendar, Star, ClipboardList, BarChart3 } from "lucide-react";

export default function CTASection() {
  const buttons = [
    { icon: Video, label: "실제 영상 확인", href: "https://blog.naver.com/PostThumbnailList.nhn?blogId=inusmusics&from=postList&categoryNo=20", external: true },
    { icon: MessageCircle, label: "카톡 상담하기", href: "https://pf.kakao.com/_wxovaM/chat", external: true },
    { icon: Calendar, label: "이너스 예약하기", href: "https://blog.naver.com/inusmusics/223023961320", external: true },
    { icon: Star, label: "실제 후기 보기", href: "https://blog.naver.com/inusmusics/223023835728", external: true },
    { icon: ClipboardList, label: "이너스 진행이력", href: "https://blog.naver.com/inusmusics/221231802647", external: true },
    { icon: BarChart3, label: "이너스 예약현황", href: "http://inusmusics.dothome.co.kr/xe/board_nOmW18/", external: true },
  ];

  return (
    <section id="quickmenu" className="section-dark py-20 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <div className="fade-in-up text-center mb-12">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Quick Menu</p>
          <h2
            className="text-xl md:text-2xl text-[#f8f4ef] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            바로가기
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              className="fade-in-up group flex flex-col items-center gap-3 p-6 border border-[#c9a96e]/15 hover:border-[#c9a96e]/50 hover:bg-[#c9a96e]/5 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <btn.icon className="w-6 h-6 text-[#c9a96e] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <span className="text-[#f8f4ef]/80 text-sm group-hover:text-[#f8f4ef] transition-colors">
                {btn.label}
              </span>
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="fade-in-up text-center mt-12" style={{ transitionDelay: "500ms" }}>
          <a
            href="https://pf.kakao.com/_wxovaM/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a96e] text-[#0f1419] font-medium text-sm tracking-wider hover:bg-[#e8d5a3] transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            카카오톡 상담하기
          </a>
        </div>
      </div>
    </section>
  );
}

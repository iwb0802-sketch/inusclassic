/**
 * Design: Dark section with accordion-style Q&A
 * Based on screenshots #16, #17
 */
import { useState } from "react";
import { ChevronDown, Shield, GraduationCap } from "lucide-react";

export default function QnASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      icon: Shield,
      q: "당일날 펑크날까봐 걱정돼요…",
      a: [
        "걱정하지 않으셔도 됩니다 :)",
        "",
        "• 예식 당일 2시간 전, 연주자 준비 상태 1차 체크",
        "• 예식 1시간 전, 현장 도착 여부 2차 확인",
        "• 만일의 상황 대비, 예비 연주자 대기",
        "• 업체와 전속 계약 체결 후 진행",
        "• 사전 관리 시스템을 통해 철저히 관리",
      ],
      highlight: "PUNCTUALITY 0%",
      highlightDesc: "지금까지 펑크율 0%를 유지하고 있습니다.",
    },
    {
      icon: GraduationCap,
      q: "연주자들은 학생인가요?",
      a: [
        "아닙니다 :)",
        "",
        "• 명문 음대 출신 연주자들로 구성",
        "• 현역 연주자 및 단원으로 활동 중인 검증된 인원만 선별",
        "• 학생 연주자는 등용하지 않음",
        "• 오디션 및 내부 기준을 통해 엄격하게 선별",
        "• 100명 이상의 연주자 풀을 보유, 예식 일정에 맞춰 안정적으로 배정",
      ],
      highlight: "100+ 연주자 풀",
      highlightDesc: "안정적인 퀄리티와 완성도 높은 연주를 보장드립니다.",
    },
  ];

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <div className="fade-in-up text-center mb-16">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">FAQ</p>
          <h2
            className="text-2xl md:text-3xl text-[#f8f4ef] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            자주 묻는 질문
          </h2>
          <div className="gold-divider w-16 mx-auto" />
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div
              key={i}
              className="fade-in-up border border-[#c9a96e]/15 overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#c9a96e]/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-[#c9a96e]/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[#c9a96e] text-xs mr-2" style={{ fontFamily: "'Playfair Display', serif" }}>Q.</span>
                    <span className="text-[#f8f4ef] text-sm md:text-base">{item.q}</span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#c9a96e] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <div className="border-l-2 border-[#c9a96e]/30 pl-4">
                    {item.a.map((line, j) => (
                      <p key={j} className={`text-[#f8f4ef]/70 text-sm leading-relaxed ${line === "" ? "h-3" : ""}`}>
                        {line}
                      </p>
                    ))}
                    {item.highlight && (
                      <div className="mt-5 p-4 bg-[#c9a96e]/5 border border-[#c9a96e]/20">
                        <p className="text-[#c9a96e] text-sm font-semibold tracking-wider mb-1">
                          {item.highlight}
                        </p>
                        <p className="text-[#f8f4ef]/50 text-xs">{item.highlightDesc}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

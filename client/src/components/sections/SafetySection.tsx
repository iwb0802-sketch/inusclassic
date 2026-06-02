/**
 * Design: Light section with safety/reliability information
 * Based on screenshot #13 - double-check system
 */
import { ShieldCheck, Clock, Users, CheckCircle2 } from "lucide-react";

export default function SafetySection() {
  const checks = [
    {
      icon: ShieldCheck,
      title: "전속 계약 진행",
      desc: "No-show 걱정 없는 안정적인 계약 체결",
      detail: "업체와 전속 계약 체결 후 진행",
    },
    {
      icon: Clock,
      title: "이중 체크 시스템",
      desc: "예식 2시간 전 / 1시간 전 연주자 상태 확인",
      detail: "1차: 준비 상태 확인 → 2차: 현장 도착 확인",
    },
    {
      icon: Users,
      title: "예비 인력 대기",
      desc: "만일의 상황 대비 예비 연주자 시스템 상시 대기",
      detail: "100명+ 연주자 풀에서 즉시 대체 가능",
    },
  ];

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container max-w-4xl mx-auto">
        <div className="fade-in-up text-center mb-16">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Safety System</p>
          <h2
            className="text-2xl md:text-3xl text-[#2c1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            예식 당일, 가장 걱정되는 부분
          </h2>
          <p className="text-[#2c1810]/60 text-sm leading-relaxed">
            혹시 모를 변수나 당일 진행에 대한 불안감<br />
            이너스뮤직은 시스템으로 대비합니다.
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {checks.map((item, i) => (
            <div
              key={i}
              className="fade-in-up text-center p-8 bg-white border border-[#c9a96e]/10 hover:border-[#c9a96e]/30 hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-[#c9a96e]/30 flex items-center justify-center bg-[#c9a96e]/5">
                <item.icon className="w-6 h-6 text-[#c9a96e]" strokeWidth={1.5} />
              </div>
              <h3
                className="text-[#2c1810] text-base mb-2 font-medium"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[#2c1810]/60 text-sm leading-relaxed mb-3">
                {item.desc}
              </p>
              <p className="text-[#c9a96e]/80 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="fade-in-up text-center mt-12" style={{ transitionDelay: "400ms" }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-[#c9a96e]/20 bg-[#c9a96e]/3">
            <CheckCircle2 className="w-5 h-5 text-[#c9a96e]" />
            <p className="text-[#2c1810] text-sm" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              마지막까지 안정적으로 완성되는 예식을 직접 경험하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

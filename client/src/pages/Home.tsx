/**
 * 다이어트 후 섹션 순서 (2026-08-28)
 * 1. Hero
 * 2. Trust (연혁 지표)
 * 3. WhyInus (통합: 강점 + 추천대상 + 안전시스템) ← Strengths/Recommend/Safety 통합
 * 4. Intro (클래식 소개)
 * 5. Composition (완성형 웨딩 패키지)
 * 6. Video (연주 영상)
 * 7. Review (후기)
 * 8. Process (진행 안내)
 * 9. SongList (곡 리스트)  ← 기본구성 안내는 Pricing으로 통합
 * 10. Profile (프로필)
 * 11. Pricing (요금 + 기본 구성 안내)
 * 12. CTA (Quick Menu 4개)
 * 13. QnA
 * 14. Event (특별이벤트 + 추가 옵션 서비스 흡수)
 * 15. Footer
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import WhyInusSection from "@/components/sections/WhyInusSection";
import IntroSection from "@/components/sections/IntroSection";
import CompositionSection from "@/components/sections/CompositionSection";
import VideoSection from "@/components/sections/VideoSection";
import ReviewSection from "@/components/sections/ReviewSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SongListSection from "@/components/sections/SongListSection";
import ProfileSection from "@/components/sections/ProfileSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import QnASection from "@/components/sections/QnASection";
import EventSection from "@/components/sections/EventSection";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import NavigationMenu from "@/components/NavigationMenu";
import InusCardPopup from "@/components/InusCardPopup";
import QuickNav from "@/components/QuickNav";

export default function Home() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden">
      <NavigationMenu />
      <InusCardPopup />
      <HeroSection />
      <TrustSection />
      <WhyInusSection />
      <IntroSection />
      <CompositionSection />
      <VideoSection />
      <ReviewSection />
      <ProcessSection />
      <SongListSection />
      <ProfileSection />
      <PricingSection />
      <CTASection />
      <QnASection />
      <EventSection />
      <Footer />
      <FloatingButtons />
      <QuickNav />
    </div>
  );
}

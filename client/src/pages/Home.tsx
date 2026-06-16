/**
 * 최종 섹션 순서 (수정 반영):
 * 1. Hero
 * 2. Trust (연혁)
 * 3. Strengths (강점)
 * 4. Intro (클래식 소개)
 * 5. Recommend (추천 대상)
 * 6. CompositionSection (완성형 웨딩 패키지)
 * 7. Video (연주 영상)
 * 8. Review (후기 이미지 슬라이드)
 * 9. Process (진행 안내)
 * 10. CompositionGuide (기본구성 안내)
 * 11. SongList (곡 리스트 & 연주순서)
 * 12. Profile (팀장 + 연주자 프로필)
 * 13. Pricing (Classic Ensemble)
 * 14. Safety (이중 체킹)
 * 15. CTA (Quick Menu) - QnA 위로 이동
 * 16. QnA
 * 17. Event (특별이벤트)
 * 18. AdditionalServices (추가 옵션 서비스)
 * 19. Footer
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import IntroSection from "@/components/sections/IntroSection";
import RecommendSection from "@/components/sections/RecommendSection";
import CompositionSection from "@/components/sections/CompositionSection";
import VideoSection from "@/components/sections/VideoSection";
import ReviewSection from "@/components/sections/ReviewSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CompositionGuideSection from "@/components/sections/CompositionGuideSection";
import SongListSection from "@/components/sections/SongListSection";
import ProfileSection from "@/components/sections/ProfileSection";
import PricingSection from "@/components/sections/PricingSection";
import SafetySection from "@/components/sections/SafetySection";
import CTASection from "@/components/sections/CTASection";
import QnASection from "@/components/sections/QnASection";
import EventSection from "@/components/sections/EventSection";
import AdditionalServicesSection from "@/components/sections/AdditionalServicesSection";
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
      <StrengthsSection />
      <IntroSection />
      <RecommendSection />
      <CompositionSection />
      <VideoSection />
      <ReviewSection />
      <ProcessSection />
      <CompositionGuideSection />
      <SongListSection />
      <ProfileSection />
      <PricingSection />
      <SafetySection />
      <CTASection />
      <QnASection />
      <EventSection />
      <AdditionalServicesSection />
      <Footer />
      <FloatingButtons />
      <QuickNav />
    </div>
  );
}

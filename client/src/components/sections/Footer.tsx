/**
 * Design: Minimal dark footer with gold accents + 사업자 정보
 */
export default function Footer() {
  return (
    <footer className="bg-[#0a0e12] py-12 border-t border-[#c9a96e]/10">
      <div className="container text-center">
        <p
          className="text-[#c9a96e] text-lg mb-2 tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          INUSMUSIC
        </p>
        <p className="text-[#f8f4ef]/30 text-xs tracking-widest uppercase mb-6">
          Classical Performance
        </p>
        <div className="gold-divider w-12 mx-auto mb-6" />

        {/* 사업자 정보 */}
        <div className="text-[#f8f4ef]/40 text-xs leading-relaxed space-y-1 mb-6">
          <p>대표자: 신유진 | 사업자번호: 299-90-00178</p>
          <p>사무실 주소: 서울 광진구 자양로 165 4층</p>
          <p>TEL: 02-423-2772</p>
        </div>

        <p className="text-[#f8f4ef]/30 text-xs">
          © 2015-2026 INUSMUSIC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

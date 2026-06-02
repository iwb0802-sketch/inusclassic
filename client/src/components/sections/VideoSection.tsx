/**
 * Design: Dark section with YouTube embeds (inline playback only)
 * 3 performance videos - plays within the page, no redirect to YouTube
 */
import { useState } from "react";
import { Play, X } from "lucide-react";

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?/]+)/);
  return match ? match[1] : "";
}

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    {
      title: "피아노 4중주 식전연주",
      subtitle: "Piano Quartet",
      url: "https://youtu.be/4Pjuj_b-BAs?si=hpRUqmLayl75RrYL",
      badge: "대표",
    },
    {
      title: "피아노 3중주 식전연주",
      subtitle: "Piano Trio",
      url: "https://youtu.be/AEdcuxAsIOs?si=aUtP8H-IDOEj3Zrs",
      badge: "",
    },
    {
      title: "피아노 3중주 식전연주",
      subtitle: "Piano Trio",
      url: "https://youtu.be/8nAPiX0_9gU?si=CJvLkJPDus0T6svi",
      badge: "",
    },
  ];

  return (
    <section id="videos" className="section-dark py-20 md:py-28">
      <div className="container">
        <div className="fade-in-up text-center mb-16">
          <p className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3">Performance Video</p>
          <h2
            className="text-2xl md:text-3xl text-[#f8f4ef] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            연주 영상
          </h2>
          <p className="text-[#f8f4ef]/50 text-sm">실제 예식 현장의 연주를 확인하세요</p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video, i) => {
            const videoId = getYouTubeId(video.url);
            const isActive = activeVideo === i;

            return (
              <div
                key={i}
                className="fade-in-up group relative overflow-hidden border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-black">
                  {isActive ? (
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&fs=0`}
                        title={video.title}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen={false}
                        style={{ border: 0 }}
                      />
                      <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-2 right-2 w-8 h-8 bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors z-10"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />

                      {/* Badge */}
                      {video.badge && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-[10px] font-medium flex items-center gap-1">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {video.badge}
                        </div>
                      )}

                      {/* Play button */}
                      <button
                        onClick={() => setActiveVideo(i)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-transparent border-none"
                      >
                        <div className="w-14 h-14 rounded-full border-2 border-[#c9a96e] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c9a96e]/20 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                          <Play className="w-5 h-5 text-[#c9a96e] ml-0.5" fill="currentColor" />
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[#f8f4ef] text-sm font-medium mb-1">{video.title}</p>
                  <p className="text-[#c9a96e]/60 text-xs" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {video.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

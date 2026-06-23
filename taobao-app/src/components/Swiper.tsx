import { useState, useEffect } from 'react';

interface Banner {
  id: string;
  image: string;
  link: string;
}

interface SwiperProps {
  banners: Banner[];
}

export function Swiper({ banners }: SwiperProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map(banner => (
          <img
            key={banner.id}
            src={banner.image}
            alt=""
            className="w-full flex-shrink-0 aspect-[375/160]"
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

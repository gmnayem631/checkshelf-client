import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import testimonials from "../../public/testimonials.json";

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000 })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of chess players who have improved their game with
            CheckShelf
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div className="flex-[0_0_100%] p-5 md:p-10" key={t.id}>
                  <div className="bg-white p-10 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-1 left-1 text-accent p-4">
                      <Quote className="w-9 h-9" />
                    </div>

                    {/* Decorative Bg */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full -mr-32 -mt-32"></div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 justify-center">
                      {renderStars(t.rating)}
                    </div>

                    {/* Review */}
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center italic max-w-3xl mx-auto">
                      "{t.review}"
                    </p>

                    {/* User */}
                    <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-200">
                      <div
                        className={`${t.bgColor} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl`}
                      >
                        {t.initials}
                      </div>

                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {t.name}
                        </h4>
                        <p className="text-gray-600">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white hover:bg-accent text-gray-800 hover:text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white hover:bg-accent text-gray-800 hover:text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Carousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
//       <Slider {...settings}>
//         <div><img src="https://cdn.create.vista.com/downloads/2952c45d-51e7-47b5-99b4-1a32f0f5a282_1024.jpeg" alt="Slide 1" /></div>
//         <div><img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" /></div>
//         <div><img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" /></div>
//       </Slider>
//     </div>
//   );
// }

// export default Carousel;






import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.create.vista.com/downloads/2952c45d-51e7-47b5-99b4-1a32f0f5a282_1024.jpeg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cake-promotion-poster-design-template-3db6188a236932885033f543dc46c557_screen.jpg?ts=1688912810",
  "https://templates.simplified.co/thumb/3d31917c-d4bf-42c8-b100-b41093b679b7.jpg",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 3 seconds unless hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full h-[200px] max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Carousel Slide"
        className="w-full h-[150px] object-contain transition-transform duration-700 ease-in-out"
      />

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md shadow-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md shadow-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ?   "bg-[var(--theme-color)]":"bg-pink-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;



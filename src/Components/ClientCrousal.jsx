// components/ClientsCarousel.jsx
import Slider from 'react-slick';

const clientLogos = [
  "https://simsin.com.pk/assets/img/schools/01.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/02.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/03.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/04.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/06.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/07.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/08.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/09.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/10.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/11.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/12.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/13.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/14.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/15.webp?v=1",
  "https://simsin.com.pk/assets/img/schools/16.webp?v=1",
  // Add more if needed
];

export default function ClientsCarousel() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="px-2">
              <img
                src={logo}
                alt={`Client ${idx}`}
                className="mx-auto max-h-20 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

// const testimonials = [
//   {
//     img: "assets/img/review-4.webp",
//     quote: "Excellent services. We have been using SIMSIN since 2017 at The Elixir School. Satisfied Alhamdulillah",
//     name: "Nasir R. Zaidi",
//     position: "Founder President - Pakistan Academic Consortium (PAC), ED/Chairman BOGs The Elixir School"
//   },
//   {
//     img: "assets/img/review-1.webp",
//     quote: "I have employed the services of SIMSIN to help manage our school’s accounts through outsourcing, and it turns out to be a wonderful experience. SIMSIN’s team is very professional.",
//     name: "Hasan Pirani",
//     position: "Head of Finance & Operations - Education Trust Nasra School"
//   },
//   {
//     img: "assets/img/review-2.webp",
//     quote: "I could not be happier with the services I received from SIMSIN. The quality of their service is excellent, and they address every concern. Very thankful for the staff’s hard work.",
//     name: "Fahad Naseem",
//     position: "Chairman - Stanmore Group of Institutions"
//   },
//   {
//     img: "assets/img/review-3.webp",
//     quote: "It’s been more than one successful year using SIMSIN. It’s an awesome system and the staff is humble, cooperative and responsible.",
//     name: "Muhammad Arif Jamal",
//     position: "Director - Model Public High School"
//   }
// ];


const testimonials = [
  {
    img: "https://i.pravatar.cc/150?img=12",
    quote: "Excellent services. We have been using SIMSIN since 2017 at The Elixir School. Satisfied Alhamdulillah",
    name: "Nasir R. Zaidi",
    position: "Founder President - Pakistan Academic Consortium (PAC), ED/Chairman BOGs The Elixir School"
  },
  {
    img: "https://i.pravatar.cc/150?img=45",
    quote: "I have employed the services of SIMSIN to help manage our school’s accounts through outsourcing, and it turns out to be a wonderful experience. SIMSIN’s team is very professional.",
    name: "Hasan Pirani",
    position: "Head of Finance & Operations - Education Trust Nasra School"
  },
  {
    img: "https://i.pravatar.cc/150?img=31",
    quote: "I could not be happier with the services I received from SIMSIN. The quality of their service is excellent, and they address every concern. Very thankful for the staff’s hard work.",
    name: "Fahad Naseem",
    position: "Chairman - Stanmore Group of Institutions"
  },
  {
    img: "https://i.pravatar.cc/150?img=67",
    quote: "It’s been more than one successful year using SIMSIN. It’s an awesome system and the staff is humble, cooperative and responsible.",
    name: "Muhammad Arif Jamal",
    position: "Director - Model Public High School"
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div
          className="text-center max-w-3xl mx-auto mb-10"
          data-aos="fade-down"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet The <span className="text-indigo-600">Schools</span> Who Love Working With <span className="text-purple-600">SIMSIN</span>
          </h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="p-4" data-aos="fade-up">
              <div className="bg-gray-100 rounded-lg shadow p-4 flex gap-4 items-start">
                <div className="w-1/3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl text-indigo-600 leading-none">“</span>
                    <p className="text-gray-800 italic mb-4">{t.quote}</p>
                    <span className="text-3xl text-indigo-600 leading-none float-right">”</span>
                  </div>
                  <div>
                    <p className="font-bold mb-1">{t.name}</p>
                    <small className="text-gray-600 text-sm">{t.position}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

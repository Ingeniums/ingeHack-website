import SectionTitle from "../../shared/SectionTitle";
import SpeakerCard from "./SpeakerCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper";
const Index = () => {
  const speakers = [
    {
      imgPath: "/speaker1.jpg",
      name: "Lorem Epsum",
      title: "Senior penetration tester",
    },
    {
      imgPath: "/speaker2.jpg",
      name: "Lorem Epsum",
      title: "CTF player",
    },
    {
      imgPath: "/speaker1.jpg",
      name: "Lorem Epsum",
      title: "Phd cyber Sec",
    },
    {
      imgPath: "/speaker2.jpg",
      name: "Lorem Epsum",
      title: "Senior penetration test",
    },
    {
      imgPath: "/speaker1.jpg",
      name: "Lorem Epsum",
      title: "Phd cyber Sec",
    },
  ];
  return (
    <div className="hidden">
      <section className="section" id="speakers">
        <SectionTitle title={"Speakers"} />
        <div>
          <Swiper
            freeMode={true}
            modules={[FreeMode, Pagination]}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              850: {
                slidesPerView: 3,
              },
            }}
          >
            {speakers.map((speaker, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <SpeakerCard
                    img={speaker.imgPath}
                    name={speaker.name}
                    title={speaker.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Index;

import SectionTitle from "../../shared/SectionTitle";
import SpeakerCard from './SpeakerCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
const Index = () => {
    const speakers = [
        {
            imgPath:'/speaker1.jpg',
            name: 'Lorem Epsum',
            title: 'Senior penetration tester'
        },
        {
            imgPath:'/speaker2.jpg',
            name: 'Lorem Epsum',
            title: 'CTF player'
        },
        {
            imgPath:'/speaker1.jpg',
            name: 'Lorem Epsum',
            title: 'Phd cyber Sec'
        },
        {
            imgPath:'/speaker2.jpg',
            name: 'Lorem Epsum',
            title: 'Senior penetration test'
        },
        {
            imgPath:'/speaker1.jpg',
            name: 'Lorem Epsum',
            title: 'Phd cyber Sec'
        },
    ]
    return (
        <section className="section" id="speakers">
            <SectionTitle title={"Speakers"} />
            <div>
            <Swiper
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true, "dynamicBullets": true }}
                initialSlide={1}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    550: {
                        slidesPerView:2,
                    },
                    850: {
                        slidesPerView: 3,
                    }
                }}
            >
                {speakers.map((speaker, idx) => {
                    return <SwiperSlide key={idx}>
                    <SpeakerCard img={speaker.imgPath} name={speaker.name} title={speaker.title}/>
                </SwiperSlide>
                })}       
            </Swiper>
            </div>
        </section>
    )
}

export default Index;
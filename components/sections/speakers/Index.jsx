import SectionTitle from "../../shared/SectionTitle";
import SpeakerCard from './SpeakerCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination } from "swiper";

// import required modules
const Index = () => {
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
                    <SwiperSlide>
                        <SpeakerCard img={"/speaker1.jpg"} name={"Lorem Epsum"} title={"Senior penetration test"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SpeakerCard img={"/speaker2.jpg"} name={"Lorem Epsum"} title={"CTF player"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SpeakerCard img={"/speaker1.jpg"} name={"Lorem Epsum"} title={"Phd cyber Sec"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SpeakerCard img={"/speaker2.jpg"} name={"Lorem Epsum"} title={"Senior penetration test"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SpeakerCard img={"/speaker1.jpg"} name={"Lorem Epsum"} title={"Senior penetration test"}/>
                    </SwiperSlide>
                    
        
            </Swiper>
            </div>
        </section>
    )
}

export default Index;
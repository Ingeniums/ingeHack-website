import SectionTitle from './SectionTitle'
import SpeakerCard from './SpeakerCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow } from "swiper";

// import required modules
const Speakers = () => {
    return (
        <section className="section">
            <SectionTitle title={"Speakers"} />
            <div>
            <Swiper
                loop={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"1"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                breakpoints = {{
                    850: {
                        slidesPerView:3
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

export default Speakers;
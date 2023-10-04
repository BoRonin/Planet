import cn from "classnames";
import s from "./styles.module.css"
import { bubbleInfoText } from "./z-bubbles-data";
import InfoBubble from "./components/bubble";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import mobileBody2ndPic from "../../../../img/Mobile_version/about_us/mobile_abus_help_info_pic.png"


function Abus4HelpfulInfo(prop: { isMobile?: boolean}) {
    return (
        <div className={s.abus_4_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>Наша планета вращается вокруг солнца, даря радость ребятам с <span style={{}}>2012</span> года</span>
                </div>
                <div className={s.info_bubbles_cont}>
                    {!prop.isMobile 
                        ? bubbleInfoText.map((bubble, index) => (
                        <div className={cn(`bubble_${index}`, s.bubble)} key={index}>
                            <InfoBubble hw={bubble.hw} text={bubble.text} color={bubble.color}/>
                        </div>))
                        : <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Navigation]}
                        className={cn(s.swiper, "mySwiper")}
                      >
                        {bubbleInfoText.map((bubble, index) => (
                            <SwiperSlide key={index}>
                                <div className={cn(s.text_bubble)}>{bubble.text}</div>
                            </SwiperSlide>
                        ))}
                        
                      </Swiper>
                    }
                </div>
                {prop.isMobile && <Image src={mobileBody2ndPic} alt="" className={s.mobile_2nd_body_pic}/>
                }
            </section>
        </div>
    );
}

export default Abus4HelpfulInfo;
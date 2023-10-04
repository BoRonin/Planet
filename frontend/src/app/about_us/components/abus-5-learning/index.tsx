import cn from "classnames";
import s from "./styles.module.css"
import { tabletText } from "./z-tablet-info";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";



function Abus5Learning(prop: { isMobile: boolean }) {
    return (
        <div className={s.abus_5_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>ПОЗНАВАТЬ МИР ЛЕГКО</span>
                </div>
                <div className={s.learn_bubbles}>
                    {!prop.isMobile
                        ? tabletText.map((entry, index) => (
                            <ul className={cn(s.tablet, `tablet_${index}`)} key={index}>
                                <h1 className={cn("abus_title", s.entry_title)}>{entry.title}</h1>
                                <li className={cn("abus_text", s.entry_text)}>{entry.text}</li>
                            </ul>
                        ))
                        : <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className={cn(s.swiper)}
                        >
                            {tabletText.map((entry, index) => (
                                <SwiperSlide className={cn(s.swiper_slide)} key={index}>
                                    <ul className={cn(s.tablet)} key={index}>
                                        <h1 className={cn("abus_title", s.entry_title)}>{entry.title}</h1>
                                        <li className={cn("abus_text", s.entry_text)}>{entry.text}</li>
                                    </ul>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    }

                </div>
            </section>
        </div>
    );
}

export default Abus5Learning;
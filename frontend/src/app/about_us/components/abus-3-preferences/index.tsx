import cn from "classnames";
import s from "./styles.module.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PreferencesBox from "./components/pref-boxes";
import RocketIcon from "../../img/pref_boxes_rocket_icon.svg"
import TimeIcon from "../../img/pref_boxes_time_icon.svg"
import PenIcon from "../../img/pref_boxes_pen_icon.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


function Abus3Preferences(prop: { shownBoxes?: number }) {

    return (
        <div className={s.abus_3_container}>
            <section className={s.section}>
                <div className={s.abus_title_box}>
                    <span className={cn("abus_title", s.abus_title_box_span_title)}>ПЛАНЕТА ПРИКЛЮЧЕНИЙ УЧТЕТ ВСЕ ПОЖЕЛАНИЯ</span>
                    <span className={cn("abus_text", s.abus_title_box_span_text)}>Пригласите любимых героев из мультфильмов, видеоигр, сказок или фильмов. Веселое приключение гарантировано!</span>
                </div>
                <div className={s.abus_pref_boxes}>
                    {prop.shownBoxes && prop.shownBoxes > 1
                        ? <>
                            <div className={s.pref_box_rocket_box_cont}>
                                <PreferencesBox icon={<RocketIcon />} text="Все шоу-программы интерактивные! Полное погружение гарантирует незабываемое приключение в кругу друзей и любимых персонажей." color="yellow" />
                            </div>
                            <div className={s.pref_box_time_box_cont}>
                                <PreferencesBox icon={<TimeIcon />} text="Длительность приключения оговаривается индивидуально, от экспресс-поздравления до несколько часовой программы." color="purple" />
                            </div>
                            <div className={s.pref_box_pen_box_cont}>
                                <PreferencesBox icon={<PenIcon />} text="Мы учитываем пожелания и легко корректируем сценарии под возраст ребят, их количество, тематику события. Будет весело, смешно, а еще познавательно и полезно!" color="yellow" />
                            </div>
                        </>
                        : <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className={cn("mySwiper", s.swiper)}
                        >
                            <SwiperSlide className={s.swiper_slide}>
                                    <PreferencesBox icon={<RocketIcon />} text="Все шоу-программы интерактивные! Полное погружение гарантирует незабываемое приключение в кругу друзей и любимых персонажей." color="yellow" />
                            </SwiperSlide>
                            <SwiperSlide className={s.swiper_slide}>
                                    <PreferencesBox icon={<TimeIcon />} text="Длительность приключения оговаривается индивидуально, от экспресс-поздравления до несколько часовой программы." color="purple" />
                            </SwiperSlide>
                            <SwiperSlide className={s.swiper_slide}>
                                    <PreferencesBox icon={<PenIcon />} text="Мы учитываем пожелания и легко корректируем сценарии под возраст ребят, их количество, тематику события. Будет весело, смешно, а еще познавательно и полезно!" color="yellow" />
                            </SwiperSlide>

                        </Swiper>
                    }

                </div>
            </section>
        </div>
    );
}

export default Abus3Preferences;
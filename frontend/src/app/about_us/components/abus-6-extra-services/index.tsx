import cn from "classnames";
import s from "./styles.module.css"
import AquaMakeUpIcon from "../../img/Extra_aqua_make-up_icon.svg"
import BeautyBarIcon from "../../img/Extra_beauty_bar_icon.svg"
import CandyBarIcon from "../../img/Extra_candy_bar_icon.svg"
import PhotoVideoIcon from "../../img/Extra_photo_video_icon.svg"


function Abus6ExtraServices() {
    return (
        <div className={s.abus_6_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</span>
                </div>
                <div className={s.extraserv_text_box}>
                    <div className={s.extraserv_text_box_block}>
                        <div className={cn("abus_title", s.service_name_left)}>АКВАГРИМ</div>
                        <div className={cn("abus_text", s.service_text_left, s.service_text_two_rows)}>(гипоаллергенный, легко смывается и отстирывается)</div>
                    </div>
                    <div className={s.extraserv_text_box_block}>
                        <div className={cn("abus_title", s.service_name_right)}>BEAUTY БАР</div>
                        <div className={cn("abus_text", s.service_text_right)}>(мобильный салон красоты)</div>
                    </div>
                    <div className={s.extraserv_text_box_block}>
                        <div className={cn("abus_title", s.service_name_left)}>CANDY БАР</div>
                        <div className={cn("abus_text", s.service_text_left)}>(красивые тематические сладости)</div>
                    </div>
                    <div className={s.extraserv_text_box_block}>
                        <div className={cn("abus_title", s.service_name_right)}>ФОТО, ВИДЕО</div>
                        <div className={cn("abus_text", s.service_text_right)}>(фотограф и видеооператор)</div>
                    </div>
                </div>
            </section>
            <div className={cn(s.icon_box_extra_serv, s.aqua_icon_box)} style={{position: "absolute"}}><AquaMakeUpIcon/></div>
            <div className={cn(s.icon_box_extra_serv, s.beauty_icon_box)} style={{position: "absolute"}}><BeautyBarIcon/></div>
            <div className={cn(s.icon_box_extra_serv, s.candy_icon_box)} style={{position: "absolute"}}><CandyBarIcon/></div>
            <div className={cn(s.icon_box_extra_serv, s.photo_icon_box)} style={{position: "absolute"}}><PhotoVideoIcon/></div>

        </div>
    );
}

export default Abus6ExtraServices;
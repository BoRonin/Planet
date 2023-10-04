"use client";
import cn from "classnames";
import s from "./styles.module.css"
import PhoneIcon from "./icons/Phone_icon.svg"
import WhatsAppIcon from "./icons/WhatsApp_icon.svg"
import TelegramIcon from "./icons/Telegram_icon.svg"
import EmailIcon from "./icons/Email_icon.svg"
import ApplicationForm from "../components/application-form";
import Footer from "../components/footer-stamp";
import { useEffect, useState } from "react";
import MobileHeaderPic from "../../img/Mobile_version/about_us/mobile_abus_header.svg";
import MobileHeaderPic500 from "../../img/Mobile_version/about_us/mobile_ab_us_header_pic_500.svg";
import MobileFooter from "../components/footer-mobile";


function ContactsPage() {
    const [windowMobile, setWindowMobile] = useState(false);
    const [windowMobile950, setWindowMobile950] = useState(false);
    const [windowMobile700, setWindowMobile700] = useState(false);

    function getWindowWidth(): void {
        if (window.innerWidth <= 1200) setWindowMobile(true)
        else setWindowMobile(false);
        if (window.innerWidth <= 950) setWindowMobile950(true)
        else setWindowMobile950(false);
        if (window.innerWidth <= 700) setWindowMobile700(true)
        else setWindowMobile700(false);
    }
    useEffect(() => {
        getWindowWidth();
        window.addEventListener('resize', getWindowWidth, { passive: true });
        return () => {
            window.removeEventListener('resize', getWindowWidth);
        };
    }, [windowMobile])

    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <section className={s.header} style={{}}>
                    {windowMobile700
                        ? <MobileHeaderPic500 className={s.mobile_header_pic_svg} />
                        : windowMobile && <MobileHeaderPic alt="" className={s.mobile_header_pic_svg} />
                    }
                </section>
                <section className={s.contact_section}>
                    <div className={s.contact_info_box}>
                        <div className={cn("abus_title", s.contact_title_box)}>
                            <span className={s.contact_title_box_span_text}>КОНТАКТЫ</span>
                        </div>
                        <div className={cn("abus_text", s.abus_text_box)}>
                            <div className={s.contact_text_box_grid}>
                                <div className={s.grid_cell}>
                                    <PhoneIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>Телефон:&nbsp;</span>+7 (926) 458-15-35</div>
                                </div>

                                <div className={s.grid_cell}>
                                    <WhatsAppIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>WhatsApp:&nbsp;</span>+7 (926) 458-15-35</div>
                                </div>

                                <div className={s.grid_cell}>
                                    <TelegramIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>Telegram:&nbsp;</span>@alexandrboytsov</div>
                                </div>

                                <div className={s.grid_cell}>
                                    <EmailIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>E-mail:&nbsp;</span>planeta_priklu4eny@mail.ru</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className={s.form_section}>
                    <ApplicationForm />
                </section>
                <section className="footer_footer">
                    {!windowMobile
                        ? <Footer/>
                        : <MobileFooter />
                    }
                </section>
                {/* <section style={{ height: "49px" }} /> */}
            </div>
        </main>
    );
}

export default ContactsPage;
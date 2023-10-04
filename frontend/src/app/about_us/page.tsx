"use client"
import Image from "next/image";
import Footer from "../components/footer-stamp";
import Abus1Parties from "./components/abus-1-parties-block";
import Abus2Originality from "./components/abus-2-originality";
import Abus3Preferences from "./components/abus-3-preferences";
import Abus4HelpfulInfo from "./components/abus-4-helpful-info";
import Abus5Learning from "./components/abus-5-learning";
import Abus6ExtraServices from "./components/abus-6-extra-services";
import Abus7AppForm from "./components/abus-7-app-form";
import s from "./styles.module.css";
import cn from "classnames";
// import mobileHeaderPic from "../../img/Mobile_version/about_us/mobile_ab_us_header_pic.png";
import mobileBody1stPic from "../../img/Mobile_version/about_us/mobile_ab_us_1st_body_pic.png";
import MobileHeaderPic from "../../img/Mobile_version/about_us/mobile_abus_header.svg";
import MobileHeaderPic500 from "../../img/Mobile_version/about_us/mobile_ab_us_header_pic_500.svg";
// import MobileHeaderPic from "../../../public/mobile_ab_us_header_pic.svg";
import { useEffect, useState } from "react";
import MobileFooter from "../components/footer-mobile";

function AboutUsPage() {
    const [windowMobile, setWindowMobile] = useState(false);
    const [windowMobile700, setWindowMobile700] = useState(false);

    function getWindowWidth(): void {
        if (window.innerWidth <= 1200) setWindowMobile(true)
        else setWindowMobile(false);
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
                <div className={s.header_margin}>
                    {windowMobile700
                        ? <MobileHeaderPic500 className={s.mobile_header_pic_svg}/>
                        : windowMobile && <MobileHeaderPic alt="" className={s.mobile_header_pic_svg} />}
                </div>
                <section><Abus1Parties /></section>
                {windowMobile && <div className={s.mobile_body_1st_pic_div}>
                    <Image src={mobileBody1stPic} alt="" className={s.mobile_body_1st_pic} />
                </div>
                }
                <section><Abus2Originality /></section>
                <section><Abus3Preferences shownBoxes={windowMobile ? 1 : 3} /></section>
                <section><Abus4HelpfulInfo isMobile={windowMobile} /></section>
                <section className={s.abus_5_section}><Abus5Learning isMobile={windowMobile} /></section>
                <section><Abus6ExtraServices /></section>
                <section style={{}}><Abus7AppForm /></section>
                {!windowMobile
                    ? <footer className={cn("footer_footer", s.footer)}>
                        <Footer />
                    </footer >
                    : <footer className={cn("footer_footer", s.footer)}>
                        <MobileFooter />
                    {/* <Image src={mobileFooterBg} alt="" className={s.mobile_footer_bg} /> */}
                    </footer>
                }

            </div>
        </main>
    );
}

export default AboutUsPage;


{/* <section style={{height: "1125px"}}><Abus7AppForm/></section> */ }

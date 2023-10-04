"use client"
import cn from "classnames";
import ApplicationForm from "../components/application-form";
import SwiperReviews from "../components/swiper";
import s from "./styles.module.css";
import Footer from "../components/footer-stamp";
import { useEffect, useState } from "react";
import MobileHeaderPic from "../../img/Mobile_version/about_us/mobile_abus_header.svg";
import MobileHeaderPic500 from "../../img/Mobile_version/about_us/mobile_ab_us_header_pic_500.svg";
import SwiperReviewsPage950 from "../components/swiper-reviews-page-950";
import MobileFooter from "../components/footer-mobile";

function ReviewsPage() {
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
                <div className={s.header} style={{}}>
                {windowMobile700
                        ? <MobileHeaderPic500 className={s.mobile_header_pic_svg} />
                        : windowMobile && <MobileHeaderPic alt="" className={s.mobile_header_pic_svg} />
                    }
                </div>
                
                <section className={s.reviews_section}>
                    <h1 className={cn(s.title_div, "abus_title")}>
                        ОТЗЫВЫ
                    </h1>
                    <div className={s.reviews_div}>
                        {!windowMobile950
                            ? <SwiperReviews 
                            perView={3} 
                            slideShadows={false} 
                            depth={30} 
                            rotate={30}
                            reviewsPage
                        />
                            : <SwiperReviewsPage950 
                                perView={1} 
                            />
                        }
                    </div>
                </section>
                <section className={s.form_section}>
                    <ApplicationForm />
                </section>
                <footer className={cn("footer_footer", s.footer)}>
                    {!windowMobile
                        ? <Footer/>
                        : <MobileFooter />
                    }
                </footer>
                {/* <section style={{ height: "627px" }}></section> */}
            </div>
        </main>
    );
}

export default ReviewsPage;
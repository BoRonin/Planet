"use client"
import cn from "classnames";
import ApplicationForm from "../components/application-form";
import s from "./styles.module.css"
import SwiperGallery from "../components/swiper-gallery";
import { MouseEvent, ReactElement, useEffect, useState } from "react";
import ModalGallery from "../components/modal-gallery";
import Button from "../components/button/button";
import Image from "next/image";
import { galleryData, galleryDataIndex } from "../reviews-data";
import Footer from "../components/footer-stamp";
import MobileHeaderPic from "../../img/Mobile_version/about_us/mobile_abus_header.svg";
import MobileHeaderPic500 from "../../img/Mobile_version/about_us/mobile_ab_us_header_pic_500.svg";
import MobileFooter from "../components/footer-mobile";

function GalleryPage() {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
    // const [photoData, setPhotoData] = useState<number>(0);
    // const [photoClassList, setPhotoClassList] = useState<string[]>([]);
    // let photoRef: React.ReactNode;
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

    let num = 0, newie = 0;

    // function openGallery(): void {
    //     setIsModalOpen(true);
    // }
    // function zoomPhoto(e: any): void {
    //     setPhotoClassList(Array.from(e.target.classList))
    //     setPhotoData(Number(e.target.alt));
    //     setIsPhotoModalOpen(true);
    // }


    return (
        <main className={s.main} >
            <div className={s.sections_container}>
                <header className={s.header} >
                    {windowMobile700
                        ? <MobileHeaderPic500 className={s.mobile_header_pic_svg} />
                        : windowMobile && <MobileHeaderPic alt="" className={s.mobile_header_pic_svg} />
                    }
                </header>
                <section className={s.gallery_section}>
                    <div className={s.title_div}>
                        <h1 className={s.gallery_btn_cont}><button className={cn(s.gallery_button, "abus_title")}>ГАЛЕРЕЯ</button></h1>
                    </div>
                </section>
                <section className={s.gallery_pic_section}>
                    {!windowMobile
                        ? galleryData.map((dataItem, index) => {
                            if (dataItem.link2) num += 1;
                            return (
                                <div className={s.pics_frame} key={index}>
                                    {!dataItem.link2
                                        ? <Image src={dataItem?.link1} key={index} alt={`${index + num}`}
                                            width="270" height="370" unoptimized
                                            className={cn(s.gal_photo, s.gal_photo_vertical, "gal_photo", "gal_photo_vertical")} />
                                        : <p className={s.gal_photo_wide_container}>
                                            <Image src={dataItem?.link1} key={index} alt={`${index + num - 1}`}
                                                width="270" height="177" unoptimized
                                                className={cn(s.gal_photo, s.gal_photo_wide, "gal_photo", "gal_photo_wide")} />
                                            <Image src={dataItem?.link2} key={index + 1} alt={`${index + num}`}
                                                width="270" height="177" unoptimized
                                                className={cn(s.gal_photo, s.gal_photo_wide, "gal_photo", "gal_photo_wide")} />
                                        </p>}
                                </div>
                            )
                        })
                        : <div className={s.gallery_div}>
                            <SwiperGallery perView={1} />
                        </div>
                    }
                </section>
                <footer className={cn(s.footer, "footer_footer")} style={{}}>
                    {!windowMobile
                        ? <>
                            <ApplicationForm />
                            <div className={s.footer_tablet}>
                                <Footer />
                            </div>
                        </>
                        : <>
                            <div className={s.form_sect} style={{}}>
                                <ApplicationForm />
                            </div>
                            <MobileFooter />
                        </>
                    }

                </footer>
            </div>

            {/* {isModalOpen && (
                <ModalGallery
                    isOpen={isModalOpen}
                    handleClose={() => setIsModalOpen(!isModalOpen)}
                >
                    <div className={s.gallery_modal_div}>
                        <SwiperGallery perView={1} />
                    </div>
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className={cn("abus_text", s.btn_on_modal)}
                    >Закрыть</button>
                </ModalGallery>
            )} */}

            {/* {isPhotoModalOpen && (
                <ModalGallery
                    isOpen={isPhotoModalOpen}
                    handleClose={() => setIsPhotoModalOpen(!isPhotoModalOpen)}
                >
                    <div className={cn(s.photo_zoom_modal_div, "photo_zoom_modal_div")}>
                        <Image src={galleryDataIndex[photoData]} alt="" width={270} height={370} unoptimized className={cn(...photoClassList)}/>
                        <button
                            onClick={() => setIsPhotoModalOpen(!isPhotoModalOpen)}
                            className={cn("abus_text", s.btn_on_modal, s.btn_in_modal_photo_solo)}
                        >Закрыть</button>
                    </div>

                </ModalGallery>
            )} */}

        </main>
    );
}

export default GalleryPage;


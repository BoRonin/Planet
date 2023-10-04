"use client"
import { useRef } from 'react';
import s from './styles.module.css';
import { galleryData, mediaShowPageData_Tesla, mediaShowPageData_Paper, mediaShowPageData_Cryo, mediaShowPageData_Science, mediaShowPageData_Bubble, mediaShowPageData_Animation, mediaShowPageData_Tesla_video } from '@/app/reviews-data';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';
register();


function SwiperShowsSections(prop: { perView: number, showTag: string, windowMobile: boolean, windowMobile700: boolean }) {
    
    return (
        <Swiper
            modules={[Navigation]}
            className={cn(s.swiper_container, 'gallery_swiper_container', "mySwiper")}
            grabCursor={true}
            slidesPerView={prop.perView}
            spaceBetween={prop.windowMobile700 ? 55 : 95}
            navigation={true}
            loop={true}
        >
            {prop.showTag === "teslaShow" && mediaShowPageData_Tesla_video.map((vidSrc, ind) => (
                    <SwiperSlide key={ind} className={cn(s.gallery_slide, s.video_slide)} >
                    <video width="100%" height="auto" controls className={s.video_frame}>
                        <source src={vidSrc} type="video/mp4" />
                    </video>
                </SwiperSlide>
            ))}
            {chooseTag(prop.showTag).map((dataItem, index) => (
                <SwiperSlide key={index} className={s.gallery_slide}>
                <Image width="300" height="300" src={dataItem} alt="ава" className={s.photo_slide} unoptimized />
            </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperShowsSections;

function chooseTag(showTag: string): StaticImageData[] {
    let photoVidBase: StaticImageData[]= [];

    switch (showTag) {
        case "teslaShow":
            photoVidBase = mediaShowPageData_Tesla;
            break;
        case "paperShow":
            photoVidBase = mediaShowPageData_Paper;
            break;
        case "cryoShow":
            photoVidBase = mediaShowPageData_Cryo;
            break;
        case "scienceShow":
            photoVidBase = mediaShowPageData_Science;
            break;
        case "bubblesShow":
            photoVidBase = mediaShowPageData_Bubble;
            break;
        case "animationShow":
            photoVidBase = mediaShowPageData_Animation;
            break;
    
        default:
            break;
    }

    return photoVidBase;
}


// --swiper-navigation-size
// --swiper-navigation-color

// swiper-wrapper // HTMLSourceElement

// class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"

// swiper-button-prev, swiper-button-next


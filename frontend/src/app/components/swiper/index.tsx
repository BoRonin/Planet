"use client"
import { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import s from './styles.module.css';
import { reviewsData } from '@/app/reviews-data';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import SwiperCard from '../swiper-card';
import cn from 'classnames';
register();

function SwiperReviews(prop: { 
    perView: number, 
    slideShadows: boolean, 
    depth: number, 
    rotate: number, 
    reviewsPage?: boolean 
}) {
    const swiperElRef = useRef<SwiperRef>(null);

    const [windowMobile, setWindowMobile] = useState(false);
    const [windowMobile600, setWindowMobile600] = useState(false);
    const [windowMobile950, setWindowMobile950] = useState(false);

    function getWindowWidth(): void {
        if (window.innerWidth <= 1200) setWindowMobile(true)
        else setWindowMobile(false);
        if (window.innerWidth <= 950) setWindowMobile950(true)
        else setWindowMobile950(false);
        if (window.innerWidth <= 600) setWindowMobile600(true)
        else setWindowMobile600(false);
    }

    useEffect(() => {
        getWindowWidth();
        window.addEventListener('resize', getWindowWidth, { passive: true });
        return () => {
            window.removeEventListener('resize', getWindowWidth);
        };
    }, [windowMobile, setWindowMobile950])

    useEffect (() => {
        swiperElRef.current?.swiper.slideNext();
    }, [])

    console.log(prop.reviewsPage);
    

    return (<>
        {!prop.reviewsPage
            ? <Swiper
            modules={[EffectCoverflow, Pagination]}
            ref={swiperElRef}
            navigation={true}
            pagination={true}
            className={cn(s.swiper_container, 'reviews_swiper_container')}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={prop.slideShadows ? true : false}
            slidesPerView={prop.perView}
            coverflowEffect={{ 
                rotate: prop.rotate,
                stretch: 1,
                depth: prop.depth,
                modifier: 1,
                slideShadows: prop.slideShadows,
            }}
            spaceBetween={2}
        >
            {reviewsData.length && reviewsData.map((dataItem, index) => (
                <SwiperSlide key={index}>
                    <SwiperCard data={dataItem} key={index} />
                </SwiperSlide>
            ))}
        </Swiper>
            : prop.reviewsPage && !windowMobile 
                ? <Swiper
            modules={[EffectCoverflow, Pagination]}
            ref={swiperElRef}
            navigation={true}
            pagination={true}
            className={cn(s.swiper_container_page, 'reviews_swiper_container')}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={prop.perView}
            coverflowEffect={{
                rotate: prop.rotate,
                stretch: 1,
                depth: prop.depth,
                modifier: 1,
                slideShadows: prop.slideShadows,
            }}
            spaceBetween={!windowMobile950 ? 0 : 60}
        >
            {reviewsData.length && reviewsData.map((dataItem, index) => (
                <SwiperSlide key={index}>
                    <SwiperCard data={dataItem} key={index} />
                </SwiperSlide>
            ))}
        </Swiper>
                : <Swiper
            modules={[Pagination, Navigation]}
            pagination={true}
            navigation={true}
            className={cn(s.swiper_container_page_950, "swiper_container_page_950")}
            grabCursor={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={!windowMobile950 ? 0 : 60}
        >
            {reviewsData.length && reviewsData.map((dataItem, index) => (
                <SwiperSlide key={index}>
                    <SwiperCard data={dataItem} key={index} />
                </SwiperSlide>
            ))}
        </Swiper>
        }
        </>
    );
}

export default SwiperReviews;



            // spaceBetween={!windowMobile
            //                 ? 2
            //                 : !windowMobile600
            //                     ? 50 /*190*/
            //                     : 30
            //             }

// --swiper-navigation-size
// --swiper-navigation-color

// swiper-wrapper

// class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"

// swiper-button-prev, swiper-button-next

    // useEffect(() => {
    //     // listen for Swiper events using addEventListener
    //     swiperElRef?.current.addEventListener('progress', (e: React.UIEvent<HTMLElement>) => {
    //         const [swiper, progress] = e.detail;
    //         console.log(progress);
    //     });

    //     swiperElRef?.current.addEventListener('slidechange', (e: React.UIEvent<HTMLElement>) => {
    //         console.log('slide changed');
    //     });
    // }, []);


    // spaceBetween={window.innerWidth>1200 
    //     ? 2 
    //     : window.innerWidth>600 ? 190 : 30}
// autoHeight={true}
// pagination-dynamic-bullets={true}
// loop={true}
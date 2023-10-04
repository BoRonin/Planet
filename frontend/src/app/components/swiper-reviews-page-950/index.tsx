"use client"
import React, { useEffect, useRef } from 'react';
import s from './styles.module.css';
import cn from 'classnames';
import { reviewsData } from '@/app/reviews-data';
// import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { SwiperRef } from 'swiper/react';
import SwiperCard from '../swiper-card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// register();

function SwiperReviewsPage950(prop: {
    perView: number,
}) {
    const swiperElRef = useRef<SwiperRef>(null);

    // useEffect (() => {
    //     swiperElRef.current?.swiper.slideNext();
    // }, [])



    return (<div className={cn(s.swiper_container_mobile_950_swiper, 'swiper_container_mobile_950_swiper')}>
        <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            grabCursor={true}
            navigation={true}
            pagination={true}
            className={cn("mySwiper", s.swiper, "mobile_950_swiper")}
        >
            {reviewsData.length && reviewsData.map((dataItem, index) => (
                <SwiperSlide key={index} className={s.slide}>
                    <SwiperCard data={dataItem} key={index} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    );
}

export default SwiperReviewsPage950;



// {reviewsData.length && reviewsData.map((dataItem, index) => (
//     <SwiperSlide key={index}>
//         <SwiperCard data={dataItem} key={index} />
//     </SwiperSlide>
// ))}
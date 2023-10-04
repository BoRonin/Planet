import React, { Component } from 'react'
import teslaPhoto1 from '../photo-collection/Tesla_1_photo.jpg';
import teslaPhoto2_1 from "../photo-collection/Tesla_2_photo_1.jpg";
import teslaPhoto3_2 from "../photo-collection/Tesla_3_photo_2.jpg" ;
import teslaPhoto4 from '../photo-collection/Tesla_4_photo.jpg';
import teslaPhoto5 from '../photo-collection/Tesla_5_photo.jpg';
import teslaPhoto6_1 from "../photo-collection/Tesla_6_photo_1.jpg";
import teslaPhoto7_2 from "../photo-collection/Tesla_7_photo_2.jpg";
import teslaPhoto8 from '../photo-collection/Tesla_8_photo.jpg';
import teslaPhoto9 from '../photo-collection/Tesla_9_photo.jpg';
import teslaPhoto10_1 from "../photo-collection/Tesla_10_photo_1.jpg";
import teslaPhoto11_2 from "../photo-collection/Tesla_11_photo_2.jpg";
import teslaPhoto12 from '../photo-collection/Tesla_12_photo.jpg'
import teslaPhoto13 from '../photo-collection/Tesla_13_photo.jpg';
import teslaPhoto14 from '../photo-collection/Tesla_14_photo.jpg';
import teslaPhoto15_1 from "../photo-collection/Tesla_15_photo_1.jpg";
import teslaPhoto16_2 from "../photo-collection/Tesla_15_photo_2.jpg";
import paperPhoto1 from '../photo-collection/Paper_show_1_photo.jpg'
import cryoPhoto1 from '../photo-collection/Cryo_show_1_photo.jpg'
import cryoPhoto2 from '../photo-collection/Cryo_show_2_photo_collage.jpg'
import cryoPhoto3 from '../photo-collection/Cryo_show_3_photo.jpg'
import cryoPhoto4 from '../photo-collection/Cryo_show_4_photo_collage.jpg'
import sciencePhoto1 from '../photo-collection/Science_show_1_photo.jpg'
import sciencePhoto2_1 from "../photo-collection/Science_show_2_photo_1.jpg";
import sciencePhoto3_2 from "../photo-collection/Science_show_2_photo_2.jpg";
import sciencePhoto4 from '../photo-collection/Science_show_3_photo.jpg'
import sciencePhoto5_1 from "../photo-collection/Science_show_4_photo_1.jpg";
import sciencePhoto6_2 from "../photo-collection/Science_show_5_photo_2.jpg";
import bubblePhoto1 from '../photo-collection/Bubble_show_1_photo.jpg';
import bubblePhoto2 from '../photo-collection/Bubble_show_2_photo.jpg';
import animatorPhoto1 from '../photo-collection/Animator_1_kakie-to_animatory.jpg';

import Image, { StaticImageData } from 'next/image';
import cn from 'classnames';
import teslaVideo1 from "../photo-collection/Tesla_VID_1_IMG_9770.mp4";
import teslaVideo2 from "../photo-collection/Tesla_VID_2_IMG_0679.mp4";

export const reviewsData = [
    {
        name: "Светлана",
        text: "Работали с вашей компанией на новогоднем детском празднике. Сын в восторге, все друзья были вовлечены в ваше тесла-шоу. Мы, родители, были заинтересованы не меньше детей. Очень все интересно, продуманная программа, замечательный и талантливый аниматор. Желаем вашей компании процветания и дальнейшего развития!", 
        avatar: ""
    },
    {
        name: "мама Марина",
        text: "Спасибо большое Александру за прекрасный день рождения моей дочки. Было весело, оригинально! Больше всего понравились фокусы и мыльные пузыри. Теперь мы ваши постоянные клиенты.", 
        avatar: ""
    },
    {
        name: "Драгомир",
        text: "Как говорят, первые 40 лет в жизни мальчика – самые сложные. Под звуки Тесла-машин и бодрящего мозг напитка, я успевал только отмахиваться от молний и шаров. Такого дня рождения у моего 37-летнего сына еще не было!", 
        avatar: "https://m.media-amazon.com/images/I/61XQYHNhDIL._AC_UL960_QL65_.jpg"
    },
]

interface galleryDataProps {
    link1: StaticImageData,
    link2?: StaticImageData,
}


export const galleryDataIndex: StaticImageData[] = [teslaPhoto1, teslaPhoto2_1, teslaPhoto3_2, teslaPhoto4, teslaPhoto5, teslaPhoto6_1, teslaPhoto7_2, teslaPhoto8, teslaPhoto9, teslaPhoto10_1, teslaPhoto11_2, teslaPhoto12, teslaPhoto13, teslaPhoto14, teslaPhoto15_1, teslaPhoto16_2, paperPhoto1, cryoPhoto1, cryoPhoto2, cryoPhoto3, cryoPhoto4, sciencePhoto1, sciencePhoto2_1, sciencePhoto3_2, sciencePhoto4, sciencePhoto5_1, sciencePhoto6_2, bubblePhoto1, bubblePhoto2];

export const galleryData: galleryDataProps[] = [ {
        link1: teslaPhoto1, 
    }, {
        link1: teslaPhoto2_1,
        link2: teslaPhoto3_2,
    }, {
        link1: teslaPhoto4,
    }, {
        link1: teslaPhoto5,
    }, {
        link1: teslaPhoto6_1,
        link2: teslaPhoto7_2,
    }, {
        link1: teslaPhoto8,
    }, {
        link1: teslaPhoto9,
    }, {
        link1: teslaPhoto10_1,
        link2: teslaPhoto11_2,
    }, {
        link1: teslaPhoto12,
    }, {
        link1: teslaPhoto13,
    }, {
        link1: teslaPhoto14,
    }, {
        link1: teslaPhoto15_1,
        link2: teslaPhoto16_2,
    }, {
        link1: paperPhoto1,
    }, {
        link1: cryoPhoto1,
    }, {
        link1: cryoPhoto2,
    }, {
        link1: cryoPhoto3,
    }, {
        link1: cryoPhoto4,
    }, {
        link1: sciencePhoto1,
    }, {
        link1: sciencePhoto2_1,
        link2: sciencePhoto3_2,
    }, {
        link1: sciencePhoto4
    }, {
        link1: sciencePhoto5_1,
        link2: sciencePhoto6_2,
    }, {
        link1: bubblePhoto1,
    }, {
        link1: bubblePhoto2,
    },  
];

export const galleryDataSelectionMainPage: galleryDataProps[] = [ {
        link1: teslaPhoto1, 
    }, {
        link1: sciencePhoto1,
    }, {
        link1: teslaPhoto7_2,
        link2: sciencePhoto6_2,
    }, {
        link1: teslaPhoto4,
    }, {
        link1: teslaPhoto10_1,
        link2: teslaPhoto3_2,
    }, {
        link1: cryoPhoto1,
    }, {
        link1: bubblePhoto2,
    }, {
        link1: cryoPhoto4,
    }, {
        link1: paperPhoto1,
    }, {
        link1: bubblePhoto1,
    }, {
        link1: sciencePhoto2_1,
        link2: teslaPhoto11_2,
    }, {
        link1: teslaPhoto13,
    }, {
        link1: sciencePhoto4
    },{
        link1: teslaPhoto2_1,
    },   
];
// teslaVideo1, teslaVideo2,

export const mediaShowPageData_Tesla: (StaticImageData)[] = [teslaPhoto1, teslaPhoto2_1, teslaPhoto3_2, teslaPhoto4, teslaPhoto5, teslaPhoto6_1, teslaPhoto7_2, teslaPhoto8, teslaPhoto9, teslaPhoto10_1, teslaPhoto11_2, teslaPhoto12, teslaPhoto13, teslaPhoto14, teslaPhoto15_1, teslaPhoto16_2, ];
export const mediaShowPageData_Tesla_video: string[] = [teslaVideo1, teslaVideo2]

export const mediaShowPageData_Paper: StaticImageData[] = [paperPhoto1];
export const mediaShowPageData_Cryo: StaticImageData[] = [cryoPhoto1, cryoPhoto2, cryoPhoto3, cryoPhoto4];
export const mediaShowPageData_Science: StaticImageData[] = [sciencePhoto1, sciencePhoto2_1, sciencePhoto3_2, sciencePhoto4, sciencePhoto5_1, sciencePhoto6_2];
export const mediaShowPageData_Bubble: StaticImageData[] = [bubblePhoto1, bubblePhoto2];
export const mediaShowPageData_Animation: StaticImageData[] = [animatorPhoto1];




// function pickGalleryImage(photo: StaticImageData, type: string) {
//     switch (type) {
//         case "hori":
//             return <Image src={photo} alt="" width="270" height="370" unoptimized className={cn("gal_photo", "gal_photo_vertical")} key={1}/>;
//             break;
//         case "vert":
//             return <Image src={photo} key={2_1} alt="" width="270" height="177" unoptimized className={cn("gal_photo", "gal_photo_wide")} />;
//             break;
//         default:
//             break;
//     }
// }

// export const galleryData: galleryDataProps[] = [ {
//         link1: 'https://thumbs.dreamstime.com/b/mad-professor-thinks-result-experiment-his-laboratory-40737410.jpg',
//     }, {
//         link1: "https://kartinki.pibig.info/uploads/posts/2023-04/1680376296_kartinki-pibig-info-p-prikolnie-kartinki-laboratoriya-arti-82.jpg",
//         link2: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_cientista_maluco.jpg" ,
//     }, {
//         link1: 'https://i.pinimg.com/736x/b3/0c/01/b30c011204db512963fdf3f213e6542a.jpg',
//     }, {
//         link1: 'http://cdt5.ru/images/WxBQ5mbKt-8_1.jpg',
//     }, {
//         link1: 'https://thumbs.dreamstime.com/b/партия-фейерверков-61199658.jpg',
//     }, {
//         link1: "https://9355.ru/wp-content/uploads/2023/06/06.jpg",
//         link2: "https://avatars.dzeninfra.ru/get-zen_doc/4488125/pub_6090fc65b8e935293cfcd14d_6090ff0f4461ec746c749cf8/scale_1200",
//     }, {
//         link1: 'https://i.ebayimg.com/images/g/auEAAOSwTbphYL4D/s-l400.jpg',
//     }, {
//         link1: 'https://i.pinimg.com/474x/2c/96/96/2c96961f6bc6ff7de211b6cfc224a497--science-illustration-vintage-illustration.jpg'
//     },
// ]

// export const galleryData: (string|object)[] =
// export const galleryData: galleryDataProps|string[] [
// export const galleryData: (string|React.ReactNode)[]




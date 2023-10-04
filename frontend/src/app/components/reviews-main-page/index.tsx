import Button from '../button/button';
import s from './styles.module.css';
import ReviewsRings from "../../../img/Reviews rings.svg"
import SwiperReviews from '../swiper';

function ReviewsMain(prop: {
    windowMobile: boolean, 
    windowMobile768: boolean
}) {

    return ( 
        <div className={s.container}>
            <h1 className={s.title}>ОТЗЫВЫ</h1>
            <div className={s.carousel}>
                <SwiperReviews 
                    perView={!prop.windowMobile 
                        ? 3 
                        : 1
                    } 
                    slideShadows={true} 
                    depth={100} 
                    rotate={50} 
                />
            </div>
            {!prop.windowMobile && <Button round={false} text="ВСЕ ОТЗЫВЫ" link="/reviews"/> }
            {!prop.windowMobile && <ReviewsRings className={s.rev_rings} /> }
            
        </div>
    );
}

export default ReviewsMain;

// perView={!prop.windowMobile 
//     ? 3 
//     : !prop.windowMobile768
//         ? 2
//         : 1
//     } 
import Button from "../button/button";
import SwiperGallery from "../swiper-gallery";
import s from "./styles.module.css"


function GalleryMainPage(prop: {windowMobile: boolean}) {
    return (
        <div className={s.gallery_container}>
            <div className={s.gallery_title}>ГАЛЕРЕЯ</div>
            <div className={s.gallery_carousel}>
                <SwiperGallery perView={!prop.windowMobile ? 4 : 1} />
            </div>
            <Button round={false} text="БОЛЬШЕ ФОТО" link="/gallery" />
        </div>

    );
}

export default GalleryMainPage;
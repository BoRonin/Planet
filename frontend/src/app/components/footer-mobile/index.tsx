import Footer from "../footer-stamp";
import s from "./indo-styles.module.css"
import MobileFooterBg from "../../../img/bg_main_footer_mobile2.svg";
import cn from "classnames";


function MobileFooter() {
    return (
        <section className={cn("footer_footer", s.sect_footer)}>
            <Footer />
            <MobileFooterBg alt="" className={s.mobile_footer_bg} />
        </section>
    );
}

export default MobileFooter;


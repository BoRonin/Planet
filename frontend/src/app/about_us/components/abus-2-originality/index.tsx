import cn from "classnames";
import s from "./styles.module.css"
import Button from "@/app/components/button/button";



function Abus2Originality() {
    return (
        <div className={s.abus_2_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>НАША ПЛАНЕТА ПРЕДЛАГАЕТ МНОЖЕСТВО ОРИГИНАЛЬНЫХ ПРОГРАММ</span>
                </div>
                <div className={s.orig_buttons}>
                    <div className="button_1"><Button round={true} text="ФОКУСНИКИ" /></div>
                    <div className="button_2"><Button round={true} text="КВЕСТЫ" /></div>
                    <div className="button_3"><Button round={true} text="МАСТЕР-КЛАССЫ" /></div>
                </div>
                <Button round={true} text="ЗАКАЗАТЬ" />
            </section>
        </div>
    );
}

export default Abus2Originality;
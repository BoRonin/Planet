import Link from "next/link";
import s from "./styles.module.css"
import cn from 'classnames'

function Button( prop: {round: boolean, text: string, link?: string } ) {
    
    return (
        <Link href={prop.link || "#"} className={cn(s.buttons, {
            [s.button_round]: prop.round,
            [s.button_standart]: !prop.round,
        })}>
            <span>{prop.text}</span>
        </Link>
    );
}

export default Button;


{/* <button className={cn(s.button_round, s.buttons)}>
<a href="#" type="button" className={s.buttons_a}>{prop.btn_text}</a>
</button> */}
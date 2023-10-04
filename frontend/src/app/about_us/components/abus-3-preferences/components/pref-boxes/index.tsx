import cn from "classnames";
import s from "./styles.module.css"


function PreferencesBox(prop: {icon: JSX.Element, text: string, color: string}) {

    return ( 
        <div className={s.pref_box_cont}>
            <div className={cn(s.pref_box_boxes, s.pref_box_real_box)}>
                <div className={cn(s.box_icon_div, {
                    [s.box_icon_bg_yellow]: prop.color === "yellow",
                    [s.box_icon_bg_purple]: prop.color === "purple",
                })} >{prop.icon}</div>
                <div className={cn("abus_text", s.box_text_div)}>{prop.text}</div>
            </div>
            <div className={cn(s.pref_box_boxes, s.pref_box_shadow_box,)} style={{backgroundColor: `var(--${prop.color})`}} />
        </div>
    );
}

export default PreferencesBox;
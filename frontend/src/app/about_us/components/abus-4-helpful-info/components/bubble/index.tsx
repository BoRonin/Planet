import cn from "classnames";
import s from "./styles.module.css"



function InfoBubble(prop: {hw: string, text: string, color: string}) {
    return (
        <div className={s.info_bubble_circle} 
        style={{ 
            height: `${prop.hw}`, 
            width: `${prop.hw}`, 
            backgroundColor: "var(--white)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            borderRadius: "50%" 
        }}>
            <div className={s.info_bubble_text} 
            style={{
                textAlign: "center",
                fontSize: "16px", 
                lineHeight: "18.68px", 
                color: `${prop.color}`,
                // padding: "0 19px"
            }}>
                {prop.text}
            </div>
        </div>

    );
}

export default InfoBubble;


import cn from "classnames";
import s from "./indo-styles.module.css";
import { useState, useEffect } from "react";
import { useElementSize } from "@/hooks/useElementSize";
import OpenAccordTick from "/public/opening_tick.svg"


function LittleAccordionForMobile(prop: {
    checkText: boolean,
    textList: string | React.ReactNode[] | undefined,
    textPiece: string | React.ReactNode,
    head: string,
    children: React.ReactNode,
    moreHeight: (num: number) => void,
} ) {
    const [selected, setSelected] = useState(false);
    const [contentRef, { width, height }] = useElementSize();

    const toggleAccordionState = () => {
        setSelected(!selected);
    };
    useEffect(() => {
        selected && prop.checkText ? prop.moreHeight(height+20) : prop.moreHeight(-height);
    }, [selected])

    return (
        <>
            <ul className={cn(s.grid_cell_info, {
                [s.grid_cell_info_flex]: prop.checkText,
            })}>
                {prop.children}
                <li className={cn(s.cell_head, {
                    [s.tick_clicked]: selected && prop.checkText,
                })} 
                    onClick={toggleAccordionState}>
                    {prop.head}
                    {prop.checkText && <span className={s.open_tick_div}>
                        <OpenAccordTick className={s.open_tick}/>
                        </span>}
                </li>
                
            </ul>
            {prop.checkText && <li className={cn(s.cell_text)}
                style={{ height: selected ? height : "0", overflow: "hidden", transition: "height 0.6s ease" }}
            >
                <div className="" ref={contentRef}>
                    {prop.textList && prop.textPiece}
                </div>
            </li>}
        </>
    );
}

export default LittleAccordionForMobile;



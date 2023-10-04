"use client"
import cn from "classnames";
import s from "./styles.module.css";
import { partiesAdventureBlock } from "./z-data";
import { useEffect } from "react";



function Abus1Parties(): JSX.Element {
    
    return ( 
        <div className={s.abus_1_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>ПЛАНЕТА ПРИКЛЮЧЕНИЙ ОРГАНИЗУЕТ ПРАЗДНИКИ ЛЮБОГО ФОРМАТА</span>
                </div>
                <div className={cn("abus_text", s.abus_text_box)}>
                    <div className={s.abus_text_box_grid_text}>
                        {partiesAdventureBlock.map((entry,index) => (
                            <div key={index} className={cn(s.grid_cell, `grid_cell_${index}`)}>
                                <div className={s.grid_cell_icon_div}>{entry.jxsElem}</div>
                                <span>{entry.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
 
            </section>
        </div>
     );
}

export default Abus1Parties;

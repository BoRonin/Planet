"use client"
import cn from "classnames";
import s from "./styles.module.css";
import { showsFeatures as showFeat } from "../../show-features-info";
import showsIconsDataBase from "../../shows-icons-bundle";
import TimeIcon from "../../img/z_gallery_time.svg";
import MoneyIcon from "../../img/z_gallery_money.svg";
import InfoIcon from "../../img/z_gallery_info.svg";
import ClownIcon from "../../img/z_gallery_clown.svg";
import { showsIconsDataBaseProps } from "../../shows-icons-bundle";
import { showFeaturesProps, showFeaturesPropsObjects } from "../../show-features-info";
import LittleAccordionForMobile from "../mobile-accordion";


function ShowsDetailBlock(prop: {
    showTag: string,
    windowMobile: boolean, 
    windowMobile700: boolean,
    closeInfo: () => void,
    moreHeight: (num: number) => void,
}) {
    const headingList: string[] = findFeatText("headingList") as string[];
    const textList = findFeatText("textList");
    const duration = findFeatText("duration");
    const cost = findFeatText("cost");
    const icons = findIcons();

    function checkTextPresence(num: number) {
        return textList && textList[num as keyof (string | React.ReactNode)] !== undefined && textList[num] !== ""
    }
    
    function findIcons() {
        for (let tag in showsIconsDataBase) {
            if (tag === prop.showTag) return showsIconsDataBase[tag as keyof showsIconsDataBaseProps]
        }
    };
    function findFeatText(partition: any) {
        for (let tag in showFeat) {
            if (tag === prop.showTag) return showFeat[tag as keyof showFeaturesProps][partition as keyof showFeaturesPropsObjects]
        }
    };

    const blueStroke: boolean = prop.showTag === "paperShow" || prop.showTag === "scienceShow";


    return (
        <section className={s.show_page_section}>
            <h1 className={cn("abus_title", s.title)}>В ПРОГРАММЕ:</h1>
            <div className={cn("abus_text", s.text_grid)}>
                {headingList && headingList.map((head, index) => (
                    <div className={cn(s.grid_cell, `show_page_info_grid_cell_${prop.showTag}_${index}`)} key={index}>
                        
                        {!prop.windowMobile
                            ? <>
                            <div className={s.grid_cell_icon}>{icons && icons[index]}</div>
                            <ul className={cn(s.grid_cell_info, {
                            [s.grid_cell_info_flex]: checkTextPresence(index),
                        })}>
                            <li className={s.cell_head}>
                                {head}
                            </li>
                            {checkTextPresence(index) && <li className={cn(s.cell_text)} >
                                {textList && textList[index]}
                            </li>}
                        </ul>
                        </>
                            :  <LittleAccordionForMobile 
                                checkText={!!checkTextPresence(index)}
                                textList={textList}
                                textPiece={textList && textList[index]}
                                head={head}
                                moreHeight={prop.moreHeight} 
                            ><div className={s.grid_cell_icon}>{icons && icons[index]}</div></LittleAccordionForMobile>
                        }
                    </div>
                ))}
            </div>

            {prop.showTag !== "animationShow"
                ? <div className={cn("abus_text", s.prices_grid, {
                    [s.icons_stroke_blue]: blueStroke,
                })}>
                    <li className={s.grid_cell}>
                        <span className={s.grid_cell_icon}><TimeIcon /></span>
                        <p className={s.prices_grid_text}>Продолжительность:&nbsp;
                            <span className={s.prop_number}>{duration}</span>&nbsp;минут
                        </p>
                    </li>
                    <li className={s.grid_cell}>
                        <span className={s.grid_cell_icon}><MoneyIcon /></span>
                        <p className={s.prices_grid_text}>Стоимость: от&nbsp;<span className={s.prop_number}>{cost}</span>&nbsp;₽
                        </p>
                    </li>
                    {prop.windowMobile && <button className={s.shrink_btn} onClick={prop.closeInfo}>Свернуть</button>}
                </div>
                : <>
                    {Array.of(["1", "час", "3 500"], ["1,5", "часа", "4 500"], ["2", "часа", "7 000"]).map((e, index) => (
                        <div className={cn("abus_text", s.prices_grid, `prices_grid_anima_${index}`, s.icons_stroke_blue, s.prices_grid_anima)} key={index}>
                            <li className={s.grid_cell}>
                                <span className={s.grid_cell_icon}><TimeIcon /></span>
                                <p className={s.prices_grid_text}>Продолжительность:&nbsp;
                                    <span className={s.prop_number}>{e[0]}</span>&nbsp;{e[1]}
                                </p>
                            </li>
                            <li className={s.grid_cell}>
                                <span className={s.grid_cell_icon}><MoneyIcon /></span>
                                <p className={s.prices_grid_text}>Стоимость: от&nbsp;<span className={s.prop_number}>{e[2]}</span>&nbsp;₽
                                </p>
                            </li>
                        </div>
                    ))}
                    <div className={cn("abus_text", s.prices_grid, s.prices_grid_add_info)}>
                        <li className={s.grid_cell_extra_info}>
                            <span className={s.grid_cell_icon}><ClownIcon /></span>
                            <p className={cn(s.cell_head, s.prices_grid_extra_clown_info)}>Можно выбрать любого персонажа из фильма, мультфильма или видео игры
                            </p>
                        </li>
                        <li className={s.grid_cell_extra_info}>
                            <span className={s.grid_cell_icon}><InfoIcon /></span>
                            <span className={s.grid_cell_extra_info_box}>
                                <p className={cn(s.cell_head, s.prices_grid_text)}>АНИМАЦИЯ + ШОУ-ПРОГРАММА = СКИДКА
                                </p>
                                <p className={cn(s.prices_grid_text, s.cell_text)}>При заказе анимации и любой шоу программы предоставляется скидка. Подробности по телефону.
                                </p>
                            </span>

                        </li>
                    </div>
                    {prop.windowMobile && <button className={s.shrink_btn} onClick={prop.closeInfo}>Свернуть</button>}
                </>
            }

        </section>
    );
}

export default ShowsDetailBlock;


// function checkTextPresence(num: number) {
//  // @ts-ignore: Object is possibly 'null'.
//     return textList && textList[num as keyof (string | React.ReactNode)] !== undefined && !!textList[num]!.length
// }
       

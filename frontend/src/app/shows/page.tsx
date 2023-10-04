"use client"
import cn from "classnames";
import s from "./styles.module.css"
import { showListData } from "../show-list-database";
import { switchIcons } from "../components/mp-text-block/text-block";
import Accordion from "../components/accordion";
import ApplicationForm from "../components/application-form";
import Footer from "../components/footer-stamp";
import { useEffect, useState } from "react";
import MobileFooter from "../components/footer-mobile";


function ShowsPage() {
    const [windowMobile, setWindowMobile] = useState(false);
    const [windowMobile700, setWindowMobile700] = useState(false);

    function getWindowWidth(): void {
        if (window.innerWidth <= 1200) setWindowMobile(true)
        else setWindowMobile(false);
        if (window.innerWidth <= 700) setWindowMobile700(true)
        else setWindowMobile700(false);
    }
    useEffect(() => {
        getWindowWidth();
        window.addEventListener('resize', getWindowWidth, { passive: true });
        return () => {
            window.removeEventListener('resize', getWindowWidth);
        };
    }, [windowMobile])

    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin}></div>
                <section className={cn(s.shows_list, s.showpage_section)}>
                    <div className={s.showlist_box}>
                        <h1 className={cn("abus_title", s.title_div)}>ШОУ-ПРОГРАММЫ</h1>
                        <div className={cn("abus_text", s.list_grid)}>

                            {showListData.map((el, index) => (
                                <ul className={cn(s.cell, `shows_grid_cell_${index}`)} key={index}>
                                    <li className={s.cell_div}>
                                        <div className={s.icon_div}>{switchIcons(el)}</div>
                                        <a href={`#${el.block}`}>{el.title}</a>
                                    </li>
                                </ul>))
                            }

                        </div>
                    </div>
                </section>

                {showListData.map((blockInfo, index) => (
                    <Accordion
                        key={index}
                        showTag={blockInfo.block}
                        index={index}
                        title={blockInfo.title}
                        textList={blockInfo.text}
                        windowMobile={windowMobile}
                        windowMobile700={windowMobile700}
                    />
                ))}


                {!windowMobile
                    ? <footer className={cn(s.footer, "footer_footer")} style={{}}>
                        <Footer />
                        <div className={s.form_sect} style={{}}>
                            <ApplicationForm />
                        </div>
                    </footer>
                    : <footer className={cn(s.footer, "footer_footer")} style={{}}>
                        <div className={s.form_sect} style={{}}>
                            <ApplicationForm />
                        </div>
                        <MobileFooter />
                    </footer>
                }
            </div>
        </main>
    );
}

export default ShowsPage;

// style={{ height: "1125px" }}>
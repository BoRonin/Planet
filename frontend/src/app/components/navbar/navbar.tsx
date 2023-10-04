"use client"
import Link from "next/link";
import s from "./styles.module.css"
import cn from "classnames";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MobileOpenMenuIcon from "../../../img/Mobile_version/Mobile_LinesOpenMenu.svg";
import MobileCloseMenuIcon from "../../../img/Mobile_version/Mobile_CrossCloseMenu.svg";

export default function Navbar() {
    const [scrollStatus, setScrollStatus] = useState(false);
    const [callBtnBg, setCallBtnBg] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const pathname = usePathname();

    function closeMenu(): void {
        setOpenMenu(false);
    }

    function handleOpenMenu(): void {
        setOpenMenu(!openMenu);
    }

    function updateHeader(): void {
        if (window.scrollY > 0) setScrollStatus(true)
        else setScrollStatus(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateHeader, { passive: true });
        return () => {
            window.removeEventListener('scroll', updateHeader);
        };
    }, [])
    
    useEffect(() => {
        setTimeout(() => {
            setCallBtnBg(scrollStatus)
        }, 150)
    }, [scrollStatus])

    const themeAllDarkAndCallBg = pathname === "/shows" || pathname === "/reviews";
    const twoFirstLinksWhite = pathname === "/about_us" || pathname === "/gallery" || pathname === "/contacts" || pathname === "/policy";

    return (
        <>
            <header className={s.header} id="header">
                <div className={cn(s.container, {
                    [s.header_scrolled]: scrollStatus,
                    [s.header_scrolled_no_main]: pathname !== "/" && scrollStatus,
                })}>
                    <div className={s.call}>
                        <Link href="/contacts" className={cn(s.call_link, {
                            [s.call_div]: themeAllDarkAndCallBg,
                        })}>ЗАКАЗАТЬ ЗВОНОК</Link>
                    </div>

                    <div className={cn(s.links, {
                        [s.links_dark_all]: themeAllDarkAndCallBg && !scrollStatus,
                        [s.links_dark_aside_main]: twoFirstLinksWhite
                    })}>
                        <Link href="/" className="smtimes_white">Главная</Link>
                        <Link href="/about_us" className="smtimes_white">О нас</Link>
                        <Link href="/shows">Шоу-программы</Link>
                        <Link href="/gallery">Галерея</Link>
                        <Link href="/reviews">Отзывы</Link>
                        <Link href="/contacts">Контакты</Link>
                    </div>

                    <div className={cn(s.call_bg, {
                        [s.call_bg_btn_active]: themeAllDarkAndCallBg && !scrollStatus,
                        [s.call_bg_btn_active_delay]: !callBtnBg,
                    })} style={{ position: "absolute" }}></div>
                    <div className=""></div>
                    <a href="#" className={s.to_top_btn} />
                </div>

            </header>

            <header className={s.mobile_header}>
                <div className={s.mobile_header_fixed_hat}>
                    <div className={s.close_icon_div}>
                        {!openMenu 
                            ? <button onClick={handleOpenMenu}><MobileOpenMenuIcon /></button>
                            : <button onClick={handleOpenMenu}><MobileCloseMenuIcon /></button> 
                        }
                    </div>
                    <Link href="/contacts" className={s.order_link}>ЗАКАЗАТЬ ЗВОНОК</Link>
                </div>

                <section className={s.mobile_header_menu}>
                    <div className={cn(s.menu_cont_marker, {
                        [s.menu_cont_marker_opened]: openMenu,
                    })}>
                        <Link href="/" className={cn({
                            [s.page_name_active]: pathname === "/",
                        })} onClick={closeMenu}>Главная</Link>
                        <Link href="/about_us" className={cn({
                            [s.page_name_active]: pathname === "/about_us",
                        })} onClick={closeMenu}>О нас</Link>
                        <Link href="/shows" className={cn({
                            [s.page_name_active]: pathname === "/shows",
                        })} onClick={closeMenu}>Шоу-программы</Link>
                        <Link href="/gallery" className={cn({
                            [s.page_name_active]: pathname === "/gallery",
                        })} onClick={closeMenu}>Галерея</Link>
                        <Link href="/reviews" className={cn({
                            [s.page_name_active]: pathname === "/reviews",
                        })} onClick={closeMenu}>Отзывы</Link>
                        <Link href="/contacts" className={cn({
                            [s.page_name_active]: pathname === "/contacts",
                        })} onClick={closeMenu}>Контакты</Link>
                    </div>

                </section>
            </header>
        </>


    )

}

// event: React.MouseEvent<HTMLButtonElement>
// const handleScroll = (event: React.UIEvent<HTMLElement>)
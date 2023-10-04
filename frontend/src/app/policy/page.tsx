"use client"

import { useEffect, useState } from "react";
import Footer from "../components/footer-stamp";
import s from "./styles.module.css";
import cn from "classnames"
import MobileFooter from "../components/footer-mobile";



function PolicyPage() {
    // const [windowMobile, setWindowMobile] = useState(false);
    const [windowMobile900, setWindowMobile900] = useState(false);
    // const [windowMobile700, setWindowMobile700] = useState(false);

    function getWindowWidth(): void {
        // if (window.innerWidth <= 1200) setWindowMobile(true)
        // else setWindowMobile(false);
        if (window.innerWidth <= 900) setWindowMobile900(true)
        else setWindowMobile900(false);
        // if (window.innerWidth <= 700) setWindowMobile700(true)
        // else setWindowMobile700(false);
    }
    useEffect(() => {
        getWindowWidth();
        window.addEventListener('resize', getWindowWidth, { passive: true });
        return () => {
            window.removeEventListener('resize', getWindowWidth);
        };
    }, [windowMobile900])

    return (
        <main className={s.main} style={{ position: "relative" }}>
            <div className={s.sections_container}>
                <div className={s.header} style={{}}></div>
                <div className={s.sections}>

                    <ul className={cn(s.section_block, s.block_1)}>
                        <h1>Политика конфиденциальности и защиты информации</h1>
                        <p>Оставляя данные на сайте, Вы соглашаетесь с Политикой конфиденциальности и защиты информации.
                        </p>
                    </ul>
                    <ul className={cn(s.section_block, s.block_2)}>
                        <h2>Защита данных</h2>
                        <p>Администрация сайта adventure-planet.ru (далее Сайт) не может передать или раскрыть информацию,
                            предоставленную пользователем (далее Пользователь) при использовании функций сайта третьим лицам, кроме случаев,
                            описанных законодательством страны, на территории которой пользователь ведет свою деятельность. </p>
                    </ul>
                    <ul className={cn(s.section_block, s.block_3)}>
                        <h2>Получение персональной информации</h2>
                        <p>Для связи с администрацией Сайта (раздел "Заказ") пользователь обязан внести некоторую
                            персональную информацию: имя (или псевдоним) и адрес электронной почты. </p>
                    </ul>
                    <ul className={cn(s.section_block, s.block_4)}>
                        <h2>Использование персональной информации</h2>
                        <p>Сайт использует личную информацию Пользователя для обслуживания и для улучшения качества
                            предоставляемых услуг. Личная информация пользователя не хранится на серверах, так как нет функционала
                            регистрации Пользователя.</p>
                        <p>Личная информация может быть раскрыта в случаях, описанных законодательством, либо когда
                            администрация сочтет подобные действия необходимыми для соблюдения юридической процедуры, судебного распоряжения
                            или легального процесса необходимого для работы Пользователя с Сайтом, а также для выполнения обязательств перед
                            клиентом. В других случаях, ни при каких условиях, информация, которую Пользователь передает Сайту, не будет
                            раскрыта третьим лицам.</p>
                        <p>В случае, если вы хотите узнать, какими персональными данными о вас мы располагаем, либо
                            исправить, обезличить, прекратить обработку или удалить ваши персональные данные, обратитесь к нам по адресу
                            электронной почты planeta_priklu4eny@mail.ru.</p>
                    </ul>

                    <ul className={cn(s.section_block, s.block_5)}>
                        <h2>Ссылки</h2>
                        <p>На сайте могут содержаться ссылки на другие сайты. Сайт не несет ответственности за
                            содержание, качество и политику безопасности этих сайтов. Данное заявление о конфиденциальности относится только
                            к информации, размещенной непосредственно на Сайте.</p>
                    </ul>
                    <ul className={cn(s.section_block, s.block_6)}>

                        <h2>Уведомления об изменениях</h2>
                        <p>Сайт оставляет за собой право вносить изменения в Политику конфиденциальности без
                            дополнительных уведомлений. Нововведения вступают в силу с момента их опубликования. Пользователи могут
                            отслеживать изменения в Политике конфиденциальности самостоятельно.</p>

                    </ul>

                </div>
                <footer className={cn("footer_footer", s.footer)}>
                    {/* {!windowMobile900
                        ? <Footer />
                        : <MobileFooter />
                    } */}
                    <Footer />
                </footer>
            </div>


        </main>
    );
}

export default PolicyPage;



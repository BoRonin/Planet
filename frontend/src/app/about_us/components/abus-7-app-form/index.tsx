"use client"
import cn from "classnames";
import s from "./styles.module.css"
import AquaMakeUpIcon from "../../img/Extra_aqua_make-up_icon.svg"
import ApplicationForm from "@/app/components/application-form";



function Abus7AppForm() {
    return (
        <div className={s.abus_7_container}>
            <section className={s.section}>
                <ApplicationForm />
            </section>
        </div>
    );
}

export default Abus7AppForm;
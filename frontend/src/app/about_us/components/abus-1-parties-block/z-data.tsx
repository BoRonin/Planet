import BirthdayCakeIcon from "../../img/abus_1st_bl_1_birthday_cake icon.svg"
import QuestHeroesIcon from "../../img/abus_1st_bl_2_quest_heroes icon.svg"
import GradKindergardenIcon from "../../img/abus_1st_bl_3_grad_kindergarden icon.svg"
import NewYearIcon from "../../img/abus_1st_bl_4_new_year icon.svg"
import PancakeDayIcon from "../../img/abus_1st_bl_5_pancake_day icon.svg"
import MensDayIcon from "../../img/abus_1st_bl_6_23_february icon.svg"
import WomansDayIcon from "../../img/abus_1st_bl_7_8_march icon.svg"
import VictoryDayIcon from "../../img/abus_1st_bl_9_victory_day icon.svg"
import SchoolDayIcon from "../../img/abus_1st_bl_10_1st_sept_schoolday icon.svg"
import NameDayIcon from "../../img/abus_1st_bl_11_name_day icon.svg"

interface AdventureGrid {
    jxsElem: React.ReactNode,
    text: string
}

export const partiesAdventureBlock: AdventureGrid[] = [
    {jxsElem: <BirthdayCakeIcon />, text: "День Рождения"},
    {jxsElem: <QuestHeroesIcon />, text: "квест с героями вселенной"},
    {jxsElem: <GradKindergardenIcon />, text: "выпускной в садике"},
    {jxsElem: <NewYearIcon />, text: "Новогоднее торжество"},
    {jxsElem: <PancakeDayIcon />, text: "масленица"},
    {jxsElem: <MensDayIcon />, text: "23 февраля"},
    {jxsElem: <WomansDayIcon />, text: "8 марта"},
    {jxsElem: <VictoryDayIcon />, text: "День Победы"},
    {jxsElem: <SchoolDayIcon />, text: "1 сентября"},
    {jxsElem: <NameDayIcon />, text: "именины"},
]

// export const partiesAdventureBlock: (string|React.ReactNode)[] = [
//     [<>{BirthdayCakeIcon}</>, "День Рождения"],
//     [<>{QuestHeroesIcon}</>, "квест с героями вселенной"],
//     [<>{GradKindergardenIcon}</>, "выпускной в садике"],
//     [<>{NewYearIcon}</>, "Новогоднее торжество"],
//     [<>{PancakeDayIcon}</>, "масленица"],
//     [<>{MensDayIcon}</>, "23 февраля "],
//     [<>{WomansDayIcon}</>, "8 марта"],
//     [<>{VictoryDayIcon}</>, "День Победы"],
//     [<>{SchoolDayIcon}</>, "1 сентября "],
//     [<>{NameDayIcon}</>, "именины"],
// ]

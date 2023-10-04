"use client"
import Link from "next/link";
import s from "./styles.module.css"
import Button from "../button/button";
import cn from "classnames";
import Image from 'next/image'
import teslaPic from '../../../img/(main page) pic 1st Tesla Show.png'; 
import paperPic from '../../../img/(main page) pic 2 Paper Show.png'; 
import cryoPic from '../../../img/(main page) pic 3 Cryo Show.png'; 
import sciencePic from '../../../img/(main page) pic 4 Science Show.png'; 
import soapBubblesPic from '../../../img/(main page) pic 5 Soap bubbles Show.png';
import animationPic from '../../../img/(main page) pic 6 Animation.png'; 
import TeslaIcon from '../../../img/Tesla icon.svg'; 
import PaperIcon from '../../../img/Paper icon.svg'; 
import CryoIcon from '../../../img/Cryo icon.svg'; 
import ScienceIcon from '../../../img/Science icon.svg'; 
import SoapBubblesIcon from '../../../img/Soap bubble icon.svg'; 
import AnimationIcon from '../../../img/Animation icon.svg';

interface textBlockProps {
    alignLeft?: boolean, 
    title: string, 
    text: (string|React.ReactNode)[], 
    icon: string
    windowMobile?: boolean,
}
let titleSign: React.ReactNode;
let blockPic: React.ReactNode;
let link: string;


export default function MainPageTextBlock(prop: textBlockProps) {

    switchIcons(prop);
    const BlocksForMobile3 = prop.title === "ТЕСЛА ШОУ" || prop.title === "БУМАЖНОЕ ШОУ" || prop.title === "КРИО ШОУ";

    return (
        <>
        {!prop.windowMobile && <div className={cn(s.container)}>
                <div className={s.cont_img}>
                    {blockPic}
                </div>
                <div className={cn(s.cont_text, {
                    [s.container_left]: prop.alignLeft,
                    [s.container_right]: !prop.alignLeft,
                })}>
                    <h1 className={s.tb_title}>
                        { prop.alignLeft
                            ? <>{prop.title}{titleSign}</>
                            : <>{titleSign}<span className={cn({
                                [s.cont_wide_bg_color_media]: prop.icon === "teslaIcon",
                            })}>{prop.title}</span></> 
                        }
                    </h1>
                    <ul className={s.tb_text}>
                        { prop.text.map((el,i) => <li key={i}>{el}</li>) }
                    </ul>
                    <div className={s.tb_button}>
                        <Button round={false} text="ПОДРОБНЕЕ" link={link} />
                    </div>
                </div>
            </div>
        }
        {prop.windowMobile && BlocksForMobile3 && <div className={cn(s.container)}>
            <div className={cn(s.cont_text)}>
                <h1 className={s.tb_title}>
                    {titleSign}{prop.title}
                </h1>
                <ul className={s.tb_text}>
                    { prop.text.map((el,i) => <li key={i}>{el}</li>) }
                </ul>
                <div className={s.tb_button}>
                    <Button round={false} text="ПОДРОБНЕЕ" link={link} />
                </div>
            </div>
        </div>
        }
        </>
        
    )
}


export const switchIcons = (prop: textBlockProps) => {

    switch (prop.icon) {
        case "teslaIcon":
            titleSign = <TeslaIcon className={"tb_icons"} />;
            blockPic = <Image style={{translate: -180}} className={s.pic_move} src={teslaPic} alt="" priority={true} />;
            link = "/shows#teslaShow";
            break;
        case "paperIcon":
            titleSign = <PaperIcon className={"tb_icons"} />;
            blockPic = <Image style={{translate: 60}} src={paperPic} alt="" />;
            link = "/shows#paperShow";
            break;
        case "cryoIcon":
            titleSign = <CryoIcon className={"tb_icons"} />;
            blockPic = <Image style={{translate: -60}} src={cryoPic} alt="" />;
            link = "/shows#cryoShow";
            break;
        case "scienceIcon":
            titleSign = <ScienceIcon className={"tb_icons"} />;
            blockPic = <Image src={sciencePic} alt="" />;
            link = "/shows#scienceShow";
            break;
        case "soapBubblesIcon":
            titleSign = <SoapBubblesIcon className={"tb_icons"} />;
            blockPic = <Image style={{translate: -180}} className={s.pic_move} src={soapBubblesPic} alt="" />;
            link = "/shows#bubblesShow";
            break;
        case "animationIcon":
            titleSign = <AnimationIcon className={"tb_icons"} />;
            blockPic = <Image style={{translate: 50, zIndex: 3}} src={animationPic} alt="" />;
            link = "/shows#animationShow";
            break;
    
        default:
            break;
    }

    return titleSign;
}


    // const [widthWideStatus, setWidthWideStatus] = useState(false);

    // function updateHeader(): void {
    //     if (window.innerWidth > 1375) setWidthWideStatus(true)             
    //     else setWidthWideStatus(false);
    // }
    // useEffect(() => {
    //     updateHeader();
    //     // window.addEventListener('resize', updateHeader, { passive: true });
    //     // return () => {
    //     //     window.removeEventListener('resize', updateHeader);
    //     // };  
    // }, [])


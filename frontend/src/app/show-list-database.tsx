import TeslaPlusIcon from '../img/tesla_plus_icon.svg';
import TeslaMinusIcon from '../img/tesla_minus_icon.svg';

interface showListProps {
    block: string,
    title: string, 
    text: (string|React.ReactNode)[], 
    icon: string,
    alignLeft: boolean,
};

export const showListData: showListProps[] = [
    {
        block: "teslaShow",
        title: "ТЕСЛА ШОУ",
        text: ["У вас есть уникальная возможность зарядить себя и своих друзей позитивной энергией настоящих молний.",
        <div key={1}><span key={2} className="tb_bold">Примечание:</span>&nbsp;В результате проведения Тесла шоу у людей открываются <span key={3} className="tb_yellow tb_bold">SUPER</span>&nbsp;способности!</div>,
        <div key={4} className="div_icons_in_text_right">Меняем жизненный заряд с&nbsp;<span className="div_icons_in_text"><TeslaMinusIcon /></span>&nbsp;на&nbsp;<span className="div_icons_in_text"><TeslaPlusIcon /></span>&nbsp;уже 10 лет.</div>,
        "Программа для тех, кто хочет зарядиться чистой энергией и обрести супер способности."],
        icon: 'teslaIcon',
        alignLeft: false,
    },
    {
        block: "paperShow",
        title: "БУМАЖНОЕ ШОУ",
        text: ["Более 10 кг бумаги разлетается по всему пространству приводя в восторг всех детей и взрослых.",
        <div key={1}>Ведущий при помощи воздушной пушки&nbsp;<span key={2} className="tb_blue tb_bold">БАХ</span>ает в воздух бумагу низкой плотности, приправляя безудержное веселье залпами конфетти.</div>,
        <div key={3} className="div_icons_in_text_left">Затем организует бумажный бой, прыжки в&nbsp;<span className="tb_blue tb_bold">«БУМСУГРОБ»</span>&nbsp;и&nbsp;<span>танцы.</span></div>,
        <div key={4} className="div_icons_in_text_left">В завершение на праздник влетает огромный&nbsp;<span className="tb_blue tb_bold">ШАР-СЮРПРИЗ</span>.</div>],
        icon: 'paperIcon',
        alignLeft: true,
    },
    {
        block: "cryoShow",
        title: "КРИО ШОУ",
        text: [<div key={1}>В программе приготовление настоящего&nbsp;<span key={2} className="tb_bold tb_yellow">Азотного Мороженого</span>. В восторге останутся не только дети, но и взрослые. Вкусно, весело и безумно интересно!</div>,
        <div key={4} className="div_icons_in_text">Эксперименты с жидким азотом. Температура&nbsp;<span key={5} className="tb_bold tb_yellow">-195 С°</span></div>,
        <div key={6} className="div_icons_in_text">В завершение программы азотный взрыв-туман вокруг и зажигательный&nbsp;<span key={7} className="tb_bold tb_yellow">COOLDANCE</span>.</div>],
        icon: 'cryoIcon',
        alignLeft: false,
    },
    {
        block: "scienceShow",
        title: "НАУЧНОЕ ШОУ",
        text: ["Вас ждут интерактивные опыты с сухим льдом.",
        <div key={1}>Вместе с ребятами мы изготавливаем мини-водородную <span key={2} className="tb_blue tb_bold">БОМБУ-ХЛОПУШКУ</span>.</div>,
        <div key={4} className="div_icons_in_text">Разноцветные веселые&nbsp;<span className="tb_blue tb_bold">«ЧЕРВЯЧУШКИ»</span>&nbsp;появляются в результате опыта профессора Менделея.</div>,
        "Делаем музыку погромче и высыпаем сухой лед в резервуар с теплой водой - густой туман."],
        icon: 'scienceIcon',
        alignLeft: true,
    },
    {
        block: "bubblesShow",
        title: "ШОУ МЫЛЬНЫХ ПУЗЫРЕЙ",
        text: ["Шоу мыльных пузырей с погружением в мыльный пузырь.", "Путешествие на планету мыльных пузырей вместе с маленькими и взрослыми. Нас ждут мыльно-пузырчатый батут и настоящая карусель.",
        "Делаем модные прически мыльных пузырей, вызываем мыльно-пузырчатого джина и загадываем желание!"],
        icon: 'soapBubblesIcon',
        alignLeft: false,
    },
    {
        block: "animationShow",
        title: "АНИМАЦИЯ",
        text: ["Можно выбрать любого персонажа из фильма, мультфильма или видео-игры!",
        <div key={1}>Играем в активные игры, отгадывает викторины-загадки, делаем&nbsp;<span key={2} className="tb_bold tb_yellow">ШАРИКИ-СОСИСКИ</span>&nbsp;(собачки, мечи, цветочки).</div>,
        <div key={3} className="div_icons_in_text">Всех присутствующих гостей обязательно порадуют легкий&nbsp;<span key={4} className="tb_bold tb_yellow">АКВАГРИМ</span>&nbsp;и классные оригинальные фокусы.</div>,
        "Весь праздник сопровождается музыкой."],
        icon: 'animationIcon',
        alignLeft: true,
    },
]



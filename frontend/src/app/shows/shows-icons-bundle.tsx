import LightningIcon from "./img/1_tesla_1_lightning.svg";
import HatIcon from "./img/1_tesla_2_hat.svg";
import HandIcon from "./img/1_tesla_3_hand.svg";
import NotesIcon from "./img/1_tesla_4_notes.svg";
import BulbIcon from "./img/1_tesla_5_bulb.svg";
import FlameIcon from "./img/1_tesla_6_flame.svg";
import PlasmaBallsIcon from "./img/1_tesla_7_plasma_balls.svg";
import ThunderIcon from "./img/1_tesla_8_thunder_lightning.svg";
import SparklesIcon from "./img/1_tesla_9_sparkles_wands.svg";
import SuperLightningIcon from "./img/1_tesla_10_super_lightning.svg";

import DiscoIcon from "./img/2_paper_1_disco.svg";
import MusicAccIcon from "./img/2_paper_2_notes.svg";
import CloudIcon from "./img/2_paper_3_cloud.svg";
import BattleSwordsIcon from "./img/2_paper_4_battle_swords.svg";
import ConfettiIcon from "./img/2_paper_5_confetti.svg";
import BalloonIcon from "./img/2_paper_6_balloon.svg";
// 
import SnowflakeIcon from "./img/3_cryo_1_snowflake.svg";
import SnowmanIcon from "./img/3_cryo_2_snowman.svg";
import ColdFlameIcon from "./img/3_cryo_3_flame.svg";
import BallsIcon from "./img/3_cryo_4_baloon.svg";
import CrystalRoseIcon from "./img/3_cryo_5_crystal_rose.svg";
import BombIcon from "./img/3_cryo_6_bomb.svg";
import PopcornIcon from "./img/3_cryo_7_popcorn.svg";
import IceCreamIcon from "./img/3_cryo_8_ice-cream.svg";
import ExplosionIcon from "./img/3_cryo_9_explosion.svg";
// 
import IceCubeIcon from "./img/4_science_1_ice_cube.svg";
import TeethCleaningIcon from "./img/4_science_2_teeth_cleaning.svg";
import GunfireIcon from "./img/4_science_3_gunfire.svg";
import CocktailIcon from "./img/4_science_4_cocktail.svg";
import HydrogenBombIcon from "./img/4_science_5_hydrogen_bomb.svg";
import WormsIcon from "./img/4_science_6_worms.svg";
import DiscoBallIcon from "./img/4_science_7_disco_ball.svg";
// 
import RouteIcon from "./img/5_bubbles_1_route.svg";
import BubblesIcon from "./img/5_bubbles_2_bubbles.svg";
import FlagIcon from "./img/5_bubbles_3_flag.svg";
import FishIcon from "./img/5_bubbles_4_fish.svg";
import BubblePopIcon from "./img/5_bubbles_5_bubble_pop.svg";
import CombIcon from "./img/5_bubbles_6_comb.svg";
import SmokeBubblesIcon from "./img/5_bubbles_7_smoke_bubbles.svg";
import FireBubblesIcon from "./img/5_bubbles_8_fire_bubbles.svg";
import SoapRocketIcon from "./img/5_bubbles_9_soap_rocket.svg";
import SoapRaindropIcon from "./img/5_bubbles_10_soap_raindrop.svg";
// 
import ActiveGamesIcon from "./img/6_anima_1_active_games.svg";
import QuizIcon from "./img/6_anima_2_quiz_games.svg";
import MusicIcon from "./img/6_anima_3_music.svg";
import DancesIcon from "./img/6_anima_4_dances.svg";
import BubbleMiniShowsIcon from "./img/6_anima_5_bubble_mini_shows.svg";
import BalloonSausagesIcon from "./img/6_anima_6_balloon_sausages.svg";
import MagicTricksIcon from "./img/6_anima_7_magic_tricks.svg";
import CakeIcon from "./img/6_anima_8_presenting_cake.svg";
import AquaMakeupIcon from "./img/6_anima_9_light_aqua_makeup.svg";
// 

export interface showsIconsDataBaseProps {
    teslaShow: React.ReactNode[],
    paperShow: React.ReactNode[],
    cryoShow: React.ReactNode[],
    scienceShow: React.ReactNode[],
    bubblesShow: React.ReactNode[],
    animationShow: React.ReactNode[],
};

const showsIconsDataBase: showsIconsDataBaseProps = {
    teslaShow: [<LightningIcon key={1} />, <HatIcon key={1} />, <HandIcon key={1} />, <NotesIcon key={1} />, <BulbIcon key={1} />, <FlameIcon key={1} />, <PlasmaBallsIcon key={1} />, <ThunderIcon key={1} />, <SparklesIcon key={1} />,<SuperLightningIcon key={1} />],

    paperShow: [<DiscoIcon key={2} />, <MusicAccIcon key={2} />, <CloudIcon key={2} />, <BattleSwordsIcon key={2} />,<ConfettiIcon key={2} />, <BalloonIcon key={2} />],

    cryoShow: [<SnowflakeIcon key={3} />, <SnowmanIcon key={3} />, <ColdFlameIcon key={3} />, <BallsIcon key={3} />, <CrystalRoseIcon key={3} />, <BombIcon key={3} />, <PopcornIcon key={3} />, <IceCreamIcon key={3} />, <ExplosionIcon key={3} />],

    scienceShow: [<IceCubeIcon key={4} />, <TeethCleaningIcon key={4} />, <GunfireIcon key={4} />, <CocktailIcon key={4} />, <HydrogenBombIcon key={4} />, <WormsIcon key={4} />, <DiscoBallIcon key={4} />],

    bubblesShow: [<RouteIcon key={5} />, <BubblesIcon key={5} />, <FlagIcon key={5} />, <FishIcon key={5} />, <BubblePopIcon key={5} />, <CombIcon key={5} />, <SmokeBubblesIcon key={5} />, <FireBubblesIcon key={5} />, <SoapRocketIcon key={5} />, <SoapRaindropIcon key={5} />],

    animationShow: [<ActiveGamesIcon key={6} />, <QuizIcon key={6} />, <MusicIcon key={6} />, <DancesIcon key={6} />, <BubbleMiniShowsIcon key={6} />, <BalloonSausagesIcon key={6} />, <MagicTricksIcon key={6} />, <CakeIcon key={6} />, <AquaMakeupIcon key={6} />],
}

export default showsIconsDataBase;





// export const timeIcon: React.ReactNode = <TimeIcon key={1} />;



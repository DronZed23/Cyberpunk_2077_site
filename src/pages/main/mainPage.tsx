import styles from './styles.module.css';
import {CyberpunkLogo} from "./img/CyberpunkLogo";
import {YoutubeLogo} from "./img/YoutubeLogo";
import {FacebookLogo} from "./img/FacebookLogo";
import React from "react";
import {VKLogo} from "./img/VKLogo";
import {TwitterLogo} from "./img/TwitterLogo";
import {TwichLogo} from "./img/TwichLogo";
import {InstagramLogo} from "./img/InstagramLogo";
import  background23 from "./img/22 1.png"
import  picture61 from "./img/Rectangle 61.png"
import  picture62 from "./img/Rectangle 62.png"
import  picture63 from "./img/Rectangle 63.png"
export const MainPage = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <CyberpunkLogo />
                    <div className={styles.linksButtonsContainers}>
                        <a href={'https://www.youtube.com/channel/UC4zyoIAzmdsgpDZQfO1-lSA'}><YoutubeLogo /></a>
                        <a href={'https://vk.com/cyberpunkgame'}><VKLogo /></a>
                        <a><FacebookLogo /></a>
                        <a ><TwitterLogo /></a>
                        <a href={'https://www.twitch.tv/directory/category/cyberpunk-2077'}><TwichLogo/></a>
                        <a><InstagramLogo/></a>
                    </div>
                </div>
                <div className={styles.attantionLinckContainer}>
                    <div className={styles.attantionTextContainer}>
                        <p className={styles.attantionText}>Доступно на всех платформах</p>
                        <button className={styles.learnMoreButton}>Узнать больше</button>
                    </div>
                </div>
            </div>
            <div className={styles.cyberpunkDescriptionContainer}>
                <div className={styles.cyberpunkTextContainer}>
                    <p className={styles.cyberpunkTextTitle}>Найт-Сити изменит тебя навсегда!</p>
                    <p className={styles.cyberpunkDescription}><p className={styles.cyberpunkDescriptionCyber}>Cyberpunk 2077 </p>— приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
                </div>
                <div className={styles.allPictureContainer}>
                    <div className={styles.cyberpunkDescriptionImgContainer}>
                        <img src={picture62}/>
                        <img src={picture63}/>
                    </div>
                    <img src={picture61}/>
                </div>

            </div>

            <div className={styles.gameAndWinContainerBig}>
                <img src={background23} className={styles.background23}/>
                <div className={styles.gameAndWinContainerSmall}>
                    <div className={styles.gameAndWinTextContainer}>
                        <div className={styles.gameAndWinTitleContainer}>

                        </div>
                        <p>Играй в <p className={styles.cyberpunkDescriptionCyber}>Cyberpunk 2077</p> и получи возможность выиграть консоль <p className={styles.cyberpunkDescriptionCyber}>Xbox Series X</p> или <p className={styles.cyberpunkDescriptionCyber}>Sony PlayStation 5!</p> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    );
};
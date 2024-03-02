import styles from './styles.module.css';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
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
import {StockLogo} from "./img/stockLogo";
import PS from "./img/PSandXBOX.png"
import {Mark} from "./img/mark";
import {userData} from "../../untils/constants";
import {getDataLocalStorageForm, setDataLocalStorageForm} from "../../API/formLocalStorage";
import {PopUpNotifications} from "./PopUpNotifications";
export const MainPage = () => {
    console.log(getDataLocalStorageForm("userData"));
    const [file, setFile] = useState<File>();
    const [active, setactive] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [popUpVisibility, setPopupVisibility] = useState(false);
    const [popUpVisibility1, setPopupVisibility1] = useState(false);


    useEffect(() => {
        if(popUpVisibility) {
            const timer = setTimeout(() => {
                setPopupVisibility(false);
            }, 2000);

            return () => clearTimeout(timer);
        }

    }, [popUpVisibility]);


    useEffect(() => {
        if(popUpVisibility1) {
            const timer = setTimeout(() => {
                setPopupVisibility1(false);
            }, 2000);

            return () => clearTimeout(timer);
        }

    }, [popUpVisibility1]);


    const handleSendForm = () =>{
        if (email.length == 0){
            setPopupVisibility(true);
            return;
        }
        if (name.length == 0){
            setPopupVisibility(true);
            return;
        }
        if (getDataLocalStorageForm("userData").userEmail.length !== 0){
            setPopupVisibility1(true);
            return;
        }
        if (getDataLocalStorageForm("userData").username.length !== 0){
            setPopupVisibility1(true);
            return;
        }
        userData.username = name;
        userData.userEmail = email;
        setactive(0);
        setDataLocalStorageForm('userData', userData);
        console.log(getDataLocalStorageForm('userData'))
    };
    const handleUploadClick = () => {
        inputRef.current?.click();
    };
    const handleReturn = () => {
        return;
    }
    const doNotActivated = () =>{
        setactive(0)
    };

    const Activated = () =>{
        setactive(1);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        setFile(e.target.files[0]);

    };


    return (
        <div>
            <PopUpNotifications ide={1} popUpVisibility={popUpVisibility} setPopupVisibility={setPopupVisibility} classname0={styles.popUpContainer} classname1={styles.popUpText}/>
            <PopUpNotifications ide={2} popUpVisibility={popUpVisibility1} setPopupVisibility={setPopupVisibility1} classname0={styles.popUpContainer} classname1={styles.popUpText}/>
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
                            <StockLogo/>
                            <p className={styles.gameAndWinTitleText}>Играй и выигрывай!</p>
                        </div>
                        <p className={styles.gameAndWinDescriptionText}>Играй в <p className={styles.cyberpunkDescriptionCyber}>Cyberpunk 2077</p> и получи возможность выиграть консоль <p className={styles.cyberpunkDescriptionCyber}>Xbox Series X</p> или <p className={styles.cyberpunkDescriptionCyber}>Sony PlayStation 5!</p> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                    </div>
                    <div className={styles.gameAndWinFormContainer}>
                        <div className={styles.gameAndWinForm}>
                            <input className={styles.user} placeholder={"Как тебя зовут?"} onChange={e => setName(e.target.value)}/>
                            <input className={styles.user} placeholder={"Твой е-mail"} onChange={e => setEmail(e.target.value)}></input>
                            <div>
                                <div>Upload a file:</div>

                                {/* 👇 Our custom button to select and upload a file */}
                                <button className={styles.fileUploader} onClick={handleUploadClick}><p className={styles.takePhoto}>Прикрепить скриншот</p>.png / .jpg / .pdf</button>

                                {/* 👇 Notice the `display: hidden` on the input */}
                                <input
                                    type="file"
                                    ref={inputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <button className={active === 1? styles.sendForm : styles.ContBtn} onClick={active == 1? () => handleSendForm() : handleReturn}>Отправить</button>
                            <div className={styles.MarkContainer}>
                                <label className={styles.borderActiveMark} onClick={active == 1? () => doNotActivated() : Activated}>
                                    <Mark className={active === 1? styles.ActiveMark : styles.DontActiveMark}/>
                                </label>
                                <p className={styles.markText}>Согласен на обработку персональных данных</p>
                            </div>
                        </div>
                        <img src={PS}/>
                    </div>
                </div>
            </div>
        </div>

    );
};
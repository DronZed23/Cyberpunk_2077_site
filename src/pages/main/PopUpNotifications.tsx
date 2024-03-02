
import {popUpData} from "../../untils/constants";

type Props ={
    ide: number;
    popUpVisibility: boolean;
    setPopupVisibility: (value: boolean) => void;
    classname0: string;
    classname1: string;

}

export const PopUpNotifications = ({ popUpVisibility, ide, classname0, classname1} : Props) => {
    return (popUpVisibility) ? (
        <>
            {popUpData.map(item => item.id === ide &&
                <div className={classname0}>
                    <p className={classname1}>{item.notificationMessage}</p>
                </div>
            )}
        </>
    ) : null
}
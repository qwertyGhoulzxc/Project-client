import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {AlertWindow} from "./styledAlert";
import {AlertActions} from "../../redux/reducers/Alert-slice";


const ActivateAlert = () => {
    const dispatch = useAppDispatch()
    const {isActivated,email} = useAppSelector(state=>state.UserInfoReducer.user)
    const {showAlert} = useAppSelector(state => state.AlertReducers)
    const {setAlertState}=AlertActions
    const [isHover,setIsHover] = useState<boolean>(false)
    const [anim,setAnim] = useState('fadeOut')
    useEffect(() => {
        let timeout:any;
        if (showAlert && !isHover) {
            timeout = setTimeout(() => {
                dispatch(setAlertState(false))
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [showAlert,isHover]);
    const closeAlert = ()=>{
        dispatch(setAlertState(false))
    }

    const handleHover = ()=>{
        setIsHover(true)
        setAnim('o')
        dispatch(setAlertState(true))
    }
    const handleOutHover = ()=>{
        setAnim('fadeOut')
        setIsHover(false)
        dispatch(setAlertState(true))
    }

if(showAlert &&!isActivated){
    return(
        <AlertWindow onMouseOver={handleHover} onMouseLeave={handleOutHover}  animation={anim}>
            <p>Ваш аккаунт не активирован<br/>Выслали вам ссылку на почту: {email}</p>
            <button onClick={closeAlert} className="noselect"><span className="text">Ок</span><span className="icon"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
            </button>
        </AlertWindow>
    )
}
    return (
   <></>
    );
};

export default ActivateAlert;
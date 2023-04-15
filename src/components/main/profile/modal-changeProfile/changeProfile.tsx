import React, {useEffect, useRef, useState} from 'react';
import {MainBlock, StateVisibility} from "./style";
import FileInput from "./FileInput";
import defaultLogo from "../../../../images/default-avatar.jpg";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {UserInfoActions} from "../../../../redux/reducers/user-slice";
import {
    changeDescriptionI, changeNameI,
    changeUsernameI,
    reloadReduxData,
    setAvatarServer
} from "../../../../redux/reducers/requests";
import Cookies from "js-cookie";
import {AlertActions} from "../../../../redux/reducers/Alert-slice";

const ChangeProfile:React.FC = () => {
    const {user} = useAppSelector(state => state.UserInfoReducer)
    const {img} = useAppSelector(state => state.UserInfoReducer.ChangeProfile)
    const {setChangeProfileAvatar,setErrorStatusChangeUsername} = UserInfoActions
    const dispatch = useAppDispatch()
    const [drag,setDrag] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const [modalChangeImg,setModalChangeImg] = useState<any>('')
const {setShowModalState} = AlertActions
    const {showModalState} = useAppSelector(state => state.AlertReducers)
    const dragStartHandler =(e:any)=>{
        e.preventDefault();
        setDrag(true)
    }
    const dragLeaveHandler = (e:any)=>{
        e.preventDefault()
        setDrag(false)
    }

    const dropHandler = (e:any)=>{
        e.preventDefault()
        let file = [...e.dataTransfer.files]
        setDrag(false)

        const url = URL.createObjectURL(file[0]);
        switch (file[0].type){
            case 'image/png':{setNewLogo(url);
                setModalChangeImg(file[0])
                return;
            }
            case 'image/jpeg':{setNewLogo(url);
                setModalChangeImg(file[0])
                return;
            }
            case 'image/jpg':{setNewLogo(url);
                setModalChangeImg(file[0])
                return;
            }
            default:return dispatch(setChangeProfileAvatar(true))
        }

    }

    const [newLogo,setNewLogo]  =useState<any>('')

    const handleFileChange = (selectedFile: File) => {
setModalChangeImg(selectedFile)
        const url = URL.createObjectURL(selectedFile);
        setNewLogo(url)
    };
const handleClear = ()=>{
    setNewLogo('')
    setModalChangeImg('')
}
const setNewAvatar = async()=>{
    try{
        const formData = new FormData()
        formData.append('avatar',modalChangeImg)
        dispatch(setAvatarServer(formData))
        dispatch(reloadReduxData(Cookies.get('id')))
        // Cookies.get('username')
    }catch (e) {

    }
}
const [changeUsername,setChangeUsername] = useState<string>(user.username)
const handleChangeUsername=(e:any)=>{
    setChangeUsername(e.target.value)
    dispatch(setLastErrorChangeUsername(e.target.value))
}

    const [newDescription,setNewDescription] = useState<string>(user.description)
    const handleDescriptionChange = (e:any)=>{
        setNewDescription(e.target.value)
    }

    const [newName,setNewName] = useState<string>(user.name)
    const handleNameChange = (e:any)=>{
        setNewName(e.target.value)
    }



const SendDataToServer = async(e:any)=>{
    e.preventDefault()
    if(changeUsername!==user.username){
        dispatch(changeUsernameI(Cookies.get('id'),changeUsername))
    }
    else{
        if(modalChangeImg!==''&&ChangeUsername.status<299)
        setNewAvatar()
        if(newName!==user.name&&ChangeUsername.status<299){
            dispatch(changeNameI(Cookies.get('id'),newName))
            dispatch(reloadReduxData(Cookies.get('id')))

        }
        if(newDescription!==user.description&&ChangeUsername.status<299){
            dispatch(changeDescriptionI(Cookies.get('id'),newDescription))
            dispatch(reloadReduxData(Cookies.get('id')))
        }
        if(ChangeUsername.status<299){
            dispatch(setShowModalState('none'))
        }
    }


    // if(changeUsername!==user.username||modalChangeImg!==''||newName!==user.name||newDescription!==user.description&&ChangeUsername.status<299) {
    //     console.log('da')
    //
    // }
}
    const ErrorMessageChUsername = useAppSelector(state => state.UserInfoReducer.ChangeUsername.status)
useEffect(()=>{
    if(modalChangeImg!==''&&ChangeUsername.status<299)
        setNewAvatar()
    if(newName!==user.name&&ChangeUsername.status<299){
        dispatch(changeNameI(Cookies.get('id'),newName))
        dispatch(reloadReduxData(Cookies.get('id')))

    }
    if(newDescription!==user.description&&ChangeUsername.status<299){
        dispatch(changeDescriptionI(Cookies.get('id'),newDescription))
        dispatch(reloadReduxData(Cookies.get('id')))
    }
    if(ChangeUsername.status<299){
        dispatch(setShowModalState('none'))
    }
},[ErrorMessageChUsername])
const {setLastErrorChangeUsername} = UserInfoActions
const {ChangeUsername,lastErrorName} = useAppSelector(state => state.UserInfoReducer)

//close modal
    const handleOutsideClick = (event:any) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            dispatch(setShowModalState('none'))
        }

    };



    return (
<StateVisibility onClick={handleOutsideClick} visibleState={showModalState}>
        <MainBlock ref={modalRef}>
            <div className={"compare-Img__Username"}>
            {newLogo===''?
            <div>
            {user.avatarImg===''?
                <img className={'logo'} src={defaultLogo}/>
                :<img className={'logo'} src={`${user.avatarImg}`}/>
            }

            </div>:<img className={'logo'} src={`${newLogo}`}/>}
                <div className={"ErrorUsername"}>
            <input maxLength={20} onChange={handleChangeUsername} defaultValue={ChangeUsername.status>299?lastErrorName:user.username} className={"chnageUsername"} type={"text"}/>
                {ChangeUsername.status>299?<div>{ChangeUsername.message}</div>:<div></div>}
                </div>
        </div>


            {modalChangeImg===''?<div className={"dragArea"}>
                {drag?<div className={'drop-area'}
                           onDragStart={dragStartHandler}
                           onDragLeave={dragLeaveHandler}
                           onDragOver={dragStartHandler}
                           onDrop={dropHandler}
                    > Отпустите файл</div>
                    :<div className={"area"}
                          onDragStart={dragStartHandler}
                          onDragLeave={dragLeaveHandler}
                          onDragOver={dragStartHandler}
                    >
                        <FileInput onChange={handleFileChange} accept=".jpg,.jpeg,.png"/>
                        Перетащите файл чтобы загрузить его</div>
                }
                {img?<p>Выберете картинку а не файл</p>:<div></div>}
            </div>:<p>{modalChangeImg.name}<span className={"DeleteNote"} onClick={handleClear}>✖</span></p>}
            <div className={'Flex'}>
            <label>name</label>
            <input  maxLength={30} onChange={handleNameChange} defaultValue={user.name} className={"chnageUsername"} type={"text"}/>
            </div>
            <div className={'Flex'}>
                <label>Description</label>
                <textarea onChange={handleDescriptionChange} defaultValue={user.description} rows={4} cols={50}></textarea>
            </div>
            <button onClick={SendDataToServer} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                <span>Save</span>
            </button>
        </MainBlock>
</StateVisibility>
    );
};

export default ChangeProfile;
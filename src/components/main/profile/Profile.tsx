import React, {useCallback, useEffect, useState} from 'react';
import {Block} from "./ProfileStyle";
import {changeUsername, reloadReduxData, setAvatarServer} from "../../../redux/reducers/requests";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import Cookies from "js-cookie";
import {set} from "react-hook-form";


const Profile = () => {
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'
    const dispatch = useAppDispatch()
    const [img,setImg] = useState<any>(null)
    const {user} = useAppSelector(state => state.UserInfoReducer)

    const handleChange = (e:any)=> {
       setImg(e.target.files[0])
    }
    const [change,setChange] = useState(false)
useEffect(()=>{
setChange(!change)
    },
    [user])

    const handleSendFile = useCallback(async ()=>{
        try{

            const formData = new FormData()

            formData.append('avatar',img)

            console.log(formData.get('avatar'))
            dispatch(setAvatarServer(formData))
            dispatch(reloadReduxData(Cookies.get('username')))
            // Cookies.get('username')



        }catch (e) {

        }
    },[img])
const handleChangeUsername = async(e:any)=>{
        dispatch(changeUsername(String(user.id),"user123"))
}

    return (

        <Block>
            <div className={"content"}>
            <div className={"avatar"}>
                {user.avatarImg===''?
                    <img className={'logo'} src={'https://img.myloview.com/posters/default-avatar-profile-image-vector-social-media-user-icon-400-228654854.jpg'}/>
                    :<img className={'logo'} src={`${user.avatarImg}`}/>
                }
            </div>
            <div className={'compare'}>
            <div className={'username'}>
                {user.username}
            </div>
            <button className={'editProfile'}>
                редактировать профиль
            </button>
                <svg className={'settings'}><circle cx="12" cy="12" fill={'none'} r="8.635" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" ></circle><path d={'M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096'} fill="white" stroke="white" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            </div>
            <div className={'content1'}>
                <p id={'name'}>{user.name}</p>
                <p>{user.description}</p>
            </div>
            {/*<input onChange={handleChange} type={"file"}/>*/}
            {/*<button onClick={handleSendFile}>изменить аватар</button>*/}
            {/*<button onClick={handleChangeUsername}>change username</button>*/}
        </Block>
    );
};

export default Profile;
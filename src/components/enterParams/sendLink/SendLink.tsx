import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {theme} from "../../../globalStyles/theme";
import {useForm} from "react-hook-form";
import { SendLink} from "../../../redux/reducers/requests";
import {FormContainer} from "../ChangePass/styles";
import {Login, SendLinkInt} from "../../../models/reg-interface";

const SendLinkForm:React.FC = () => {

    const dispatch = useAppDispatch()
    const {message,status} = useAppSelector(state => state.UserInfoReducer.SendLinkError)
    const changePassStatus  = useAppSelector(state => state.UserInfoReducer.ChangePassError.status)
    const navigate = useNavigate()
    const secondary = theme.colors.secondary
    const error = theme.colors.error
    const [lock,setLock] = useState(secondary)
    const [passwordInputType, setPasswordInputType] = useState('password');
    const handleShow = (e:any)=> {
        if (lock === secondary) {
            setPasswordInputType('text')
            setLock(error)
        } else {
            setLock(secondary)
            setPasswordInputType('password')
        }
    }
    const {
        register,
        formState:{
            errors,
        },
        handleSubmit,watch
    }=useForm({
        mode:'onChange'
    })
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit=(data:any):void=>{
        const check =(email:string):boolean=> {
            // Регулярное выражение для проверки электронной почты
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        const returnData:SendLinkInt ={}

        if(check(data.username)){
            returnData.email=data.username
            returnData.username=''
        }else{
            returnData.username=data.username
            returnData.email=''
        }
        dispatch(SendLink(String(returnData.email),String(returnData.username)))
    }
    useEffect(()=>{
        if(status===200&&changePassStatus==202){
            seeText(true)
        }

            // navigate('/')
    },[status])
const [text,seeText] = useState(false)

    return (
        <FormContainer color={lock}>

            <div className="login-box">
                {/*<p>Login</p>*/}

                <form  onSubmit={handleSubmit(onSubmit)}  >
                    <h2>Send Email</h2>
                    <div className={'user-box'}>
                        <input type={"text"} autoComplete='off'
                               {...register('username',{
                                   required:'Заполните поле',
                                   minLength:{
                                       value:2,
                                       message:'Минимум 2 символа'
                                   },
                                   maxLength:{
                                       value:40,
                                       message:'Максимум 40 символов'
                                   },
                                   validate:username=> {
                                       const usernameRegex = /^[a-zA-Z0-9_.@-]{2,40}$/;
                                       return usernameRegex.test(username);
                                   },

                               })}

                        />
                        <label>username or email</label>

                        <div className={'error'}>{errors?.username &&  <p>{String(errors?.username?.message) || 'Username может содержать латинские буквы и "-","_"'}</p> }</div>
                    </div>
                    <div className={'serverError'}>{message}</div>
                    <div className={'serverError'}>{text&&'Выслали вам письмо на email'}</div>
                    <button type={"submit"}>submit <span></span></button>

                </form>
                <p>Already have an account? <span onClick={()=>{navigate('/')}}>Sign in!</span></p>
                <p>Don't have an account? <span onClick={()=>{navigate('/reg')}}>Sign up</span></p>

            </div>


        </FormContainer>
    );


};
export default SendLinkForm;
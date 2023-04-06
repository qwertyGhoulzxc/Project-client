import React, {useEffect, useState} from 'react';
import {FormContainer} from './styles'
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";
import {theme} from "../../../globalStyles/theme";
import {login} from "../../../redux/reducers/requests";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Login} from "../../../models/reg-interface";
import {clearInterval} from "timers";


const LoginForm:React.FC = () => {
    const navigate = useNavigate()
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


const dispatch = useAppDispatch()
    const {message,status} = useAppSelector(state => state.UserInfoReducer.LoginError)
    const {username} = useAppSelector(state => state.UserInfoReducer.user)
    const onSubmit=(data:any) =>{
       const check =(email:string):boolean=> {
            // Регулярное выражение для проверки электронной почты
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        const returnData:Login ={password:data.password}

        if(check(data.username)){
            returnData.email=data.username
            returnData.username=''
        }else{
            returnData.username=data.username
            returnData.email=''
        }

        dispatch(login(String(returnData.username),String(returnData.password),String(returnData.email)))



    }




    useEffect(()=>{
        if(username!==''&&status<300)
        navigate('/')
    },[username])
    const secondary = theme.colors.secondary
    const error = theme.colors.error
const [lock,setLock] = useState(secondary)
    const [passwordInputType, setPasswordInputType] = useState('password');
const handleShow = (e:any)=>{
    if(lock===secondary){
        setPasswordInputType('text')
    setLock(error)}
    else{
    setLock(secondary)
        setPasswordInputType('password')
    }
}
    return (
        <FormContainer color={lock}>


            <div className="login-box">
                {/*<p>Login</p>*/}

                <form  onSubmit={handleSubmit(onSubmit)}  >
                    <h2>Login</h2>
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
                    {/*password*/}

                    <div className={'user-box '}>


                        <input
                            type={passwordInputType}
                            autoComplete='off'
                            {...register('password',{
                                required:'Заполните поле',
                                minLength:{
                                    value:8,
                                    message:'минимум 8 символов',
                                },
                                validate:password=>{
                                    // Регулярное выражение для проверки пароля
                                    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
                                    return passwordRegex.test(password);
                                }
                            })}
                        />

                                <svg className={'locker'}  onClick={handleShow} viewBox="0 0 24 24">
                                    <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                                        </svg>

                        <label> password</label>


                        <div className={'error'}>{errors?.password &&  <p>{String(errors?.password?.message) || 'Пароль должен содержать заглавные буквы цифры'}</p> }</div>
                    </div>
                    <div className={'serverError'}>{message}</div>
                    <button type={"submit"}>submit <span></span></button>

                </form>
                <p>Don't have an account? <span onClick={()=>{navigate('/reg')}}>Sign up</span></p>
                <p> <span onClick={()=>{navigate('/sendlink')}}>Forgot password</span></p>
            </div>


        </FormContainer>
    );


};

export default LoginForm;
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {theme} from "../../../globalStyles/theme";
import {useForm} from "react-hook-form";
import {changePassword, registration} from "../../../redux/reducers/requests";
import {FormContainer} from "./styles";
import {stat} from "fs";
import {UserInfoActions} from "../../../redux/reducers/user-slice";

const ChangePass = () => {
    let href = window.location.href
    const webhref = 'http://localhost:3000/'
    const name = href.slice(webhref.length).split('?')[1]
    const changePassLink = name.split('&')[0]
    const UserName = name.split('&')[1]

    const dispatch = useAppDispatch()
    const {setErrorStatusChangePass}=UserInfoActions
    const {message,status} = useAppSelector(state => state.UserInfoReducer.ChangePassError)
    const {username} = useAppSelector(state => state.UserInfoReducer.user)
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

    const onSubmit=(data:object):void=>{
        const fiqlteredObj = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => key !== 'confirmPassword')
        );
        // alert(JSON.stringify(fiqlteredObj.password))
        dispatch(changePassword(String(changePassLink),String(fiqlteredObj.password)))
    }
    const [showSuccess,setShowSuccess] = useState(false)
    useEffect(()=>{
        if(status===200){
            dispatch(setErrorStatusChangePass({
                status:202,
                message:''
            }))
            setShowSuccess(true)

        }
    },[status])


    return (

        <FormContainer color={lock}>

            <div className="login-box">
                {/*<p>Login</p>*/}

                <form  onSubmit={handleSubmit(onSubmit)}  >
                    <h2>Change Password for {UserName}</h2>
                    {/*password*/}
                    {!showSuccess?
                    <div>
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
                    <div className={'user-box '}>
                        <input
                            type={passwordInputType}
                            autoComplete='off'
                            {...register('confirmPassword',{
                                required: 'Заполните поле',
                                validate: (value) => value === password || 'Пароли не совпадают',
                            })}
                        />
                        <label>confirm password</label>
                        <div className={'error'}>
                            {errors?.confirmPassword && <p>{String(errors?.confirmPassword?.message)}</p>}
                        </div>
                    </div>
                    <div className={'serverError'}>{message}</div>
                    <button type={"submit"}>submit <span></span></button>
                    </div>:<h2>Пароль изменен</h2>}
                </form>
                <p>Already have an account? <span onClick={()=>{navigate('/')}}>Sign in!</span></p>
                <p>Don't have an account? <span onClick={()=>{navigate('/reg')}}>Sign up</span></p>

            </div>


        </FormContainer>
    );


};
export default ChangePass;
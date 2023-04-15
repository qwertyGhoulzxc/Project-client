import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import Registration from "./components/enterParams/registration/Registration";
import Login from "./components/enterParams/login/Login";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {checkAuth, reloadReduxData} from "./redux/reducers/requests";
import Error404 from "./components/Error404/Error404";
import ChangePass from "./components/enterParams/ChangePass/ChangePass";
import SendLinkForm from "./components/enterParams/sendLink/SendLink";
import {Container} from './globalStyles/container'
import Profile from './components/main/profile/Profile'
import Cookies from "js-cookie";
import Loading from "./components/loading/Loading";
import {LoadingActions} from "./redux/reducers/Loading-slice";
import ActivateAlert from "./components/unActivatedAccount/ActivateAlert";


const App =()=> {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {setGlobalLoadingStatus} = LoadingActions
    const {isAuth} = useAppSelector(state => state.UserInfoReducer)
    useEffect(()=>{
        if(localStorage.getItem('token')) {
            dispatch(checkAuth())
            dispatch(reloadReduxData(Cookies.get('id')))//!
        }
    },[])

    const {LoadingReducer} = useAppSelector(state=>state)
    useEffect(()=>{
        interface MyObject {
            [key: string]: boolean;
        }
        function hasTrueBooleanValue(obj: any): boolean {
            return Object.values(obj).some((value) => value === true);
        }
        dispatch(setGlobalLoadingStatus(hasTrueBooleanValue(LoadingReducer.loadingStatus)))
    }, [LoadingReducer.loadingStatus])

  if(LoadingReducer.LoadingStatus){
      return(
          <Loading/>
      )
  }
   if(!isAuth){
       return (

           <Container>

           <Routes>

               <Route path={'/reg'} element={<Registration/>}/>
               <Route path={'/'} element={<Login/>}/>
               <Route path={'/changepass'} element={<ChangePass/>}/>
               <Route path={'sendlink'} element={<SendLinkForm/>}/>
               <Route path={'/*'} element={<Error404/>}/>
           </Routes>
           </Container>
       )
   }




  return (
    <div className="App">
        <Container>

      <Routes>
          <Route path={'/'} element={<Profile/>}/>

          <Route path={'/*'} element={<Error404/>}/>
      </Routes>
            <ActivateAlert/>
        </Container>
    </div>
  );
}

export default App;

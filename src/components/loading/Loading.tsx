import React, {useEffect, useState} from 'react';
import {useAppSelector,useAppDispatch} from "../../hooks/redux";
import { LeapFrog } from '@uiball/loaders'
import {theme} from "../../globalStyles/theme";
import {LoadingActions} from "../../redux/reducers/Loading-slice";

const Loading:React.FC = (props) => {


    const {LoadingReducer} = useAppSelector(state=>state)


if(LoadingReducer.LoadingStatus){
    return (
        <div style={{height:"100vh",width:"100%",background:`${theme.backgrounds.greyBack}`,display:"grid",placeItems:'center' }}>
            <LeapFrog
                size={40}
                speed={2.5}
                color={theme.colors.secondary}
            />
        </div>
    )
}


    return (
        <div>

        </div>
    );
};

export default Loading;
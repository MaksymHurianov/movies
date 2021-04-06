import React from "react";
import {useHistory} from "react-router";
import s from './burgerNav.module.css'

function BurgerNav(){
    const history = useHistory()

    return(
        <div className={s.wrapper}>
            <div onClick={()=>history.push('/')}><span>Home</span></div>
            <div onClick={()=>history.push('/favorites')}><span>Favorite movies</span></div>
        </div>
    )
}
export default BurgerNav
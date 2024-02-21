import React from "react";
import Styles from "./Styles.module.css"

const Specials=[{
    image:'/image/GreekSalad.jpg',
    name:"Greek Salad",
    about:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
},
{
    image:'/image/Bruschetta.jpg',
    name:"Bruschetta",
    about:"Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."
},
{
    image:'/image/LemonCake.jpg',
    name:'Lemon Cake',
    about:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
}];
function Menu(){
    return(
    <div>
    <div className={Styles.Special}>
        <div className={Styles.SH}>
            <h1>Specials</h1>
            <button>Online Menu</button>
        </div>
    </div>
    <div className={Styles.Cards}>
    {
        Specials.map((item)=>(
                                <div key={Math.random()} className={Styles.Card}>
                                    <img className={Styles.CardImg} src={item.image} alt=""/>
                                    <div className={Styles.CBody}>
                                        <div className={Styles.CTitle}>{item.name}</div>
                                            <p className={Styles.CText}>{item.about}</p>
                                        <button className={Styles.Btn}>Order Delivery</button>
                                    </div>
                                </div>
                    ))
            }
            </div>
        </div>
    );
}

export default Menu;
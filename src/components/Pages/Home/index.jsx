import React from 'react';
import Styles from './Style.module.css';


const Testimonials= [{
    rate:5,
    image:"/image/female.webp",
    name:"Sarah",
    comment:"Wonderful restaurant"
},
{
    rate:5,
    image:"/image/male.webp",
    name:"Ahmad",
    comment:"Good service"
},
{
    rate:5,
    image:"/image/male.webp",
    name:"Daniel",
    comment:"Delicious food"
}]
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
}]
function Main(){
    return(
        <main>
            <div className={Styles.Main}>
                <div className={Styles.content}>
                    <h1>Lettle Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className={Styles.img}>
                    <img  src='/image/Main.jpg' alt=""/>
                </div>
            </div>
            <div>
            <div className={Styles.Specials}>
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

            <div className={Styles.Testimonials}>
                <div className={Styles.TestimonialsH}>
                    <h1>Testimonials</h1>
                </div>
                <div className={Styles.revCont}>
                {
                    Testimonials.map(
                        (item)=>(
                            <div key={Math.random()} className={Styles.Review}>
                            <img className={Styles.rat} src='/image/five-stars.jpg' alt=""/>
                            <img className={Styles.pro} src='/image/female.webp' alt=""/>
                            <h2>{item.name}</h2>
                            <p>{item.comment}</p>
                            </div>
                        ))
                }
                </div>
            </div>
        </main>
    );
}
export default Main;
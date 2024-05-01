import React from 'react';
import Styles from './Style.module.css';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const handleReserveClick = () => {
        navigate('/Booking');
      };
    return(
        <main role="main" aria-label="Main Content">
            {/* Main Content Section */}
            <section className={Styles.Main}>
                <div className={Styles.content}>
                    <h1>Lettle Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button 
                        onClick={handleReserveClick} aria-label="Reserve a Table">
                        Reserve a Table
                    </button>
                </div>
                <div className={Styles.img}>
                    <img  src='/image/Main.jpg' alt="Restaurant view"/>
                </div>
            </section>

            {/* Specials Section */}
            <section>
            <header className={Styles.Specials}>
             <div className={Styles.SH}>
              <h1>Specials</h1>
              <button aria-label="View Online Menu">Online Menu</button>
             </div>
            </header>

            <div className={Styles.Cards}>
              {Specials.map((item, index)=>(
                    <article key={index} className={Styles.Card}>
                        <img className={Styles.CardImg} src={item.image} alt={`${item.name}`}/>
                        <div className={Styles.CBody}>
                            <div className={Styles.CTitle}>{item.name}</div>
                            <p className={Styles.CText}>{item.about}</p>
                            <button className={Styles.Btn} aria-label={`Order ${item.name} for delivery`}>Order Delivery</button>
                        </div>
                    </article>
                    ))}
            </div>
            </section>

            {/* Testimonials Section */}
            <section className={Styles.Testimonials}>
                <header className={Styles.TestimonialsH}>
                    <h1>Testimonials</h1>
                </header>
                <div className={Styles.revCont}>
                    {Testimonials.map((item, index)=>(
                        <div key={index} className={Styles.Review} aria-label={`${item.name}'s Testimonial`}>
                            <img className={Styles.rat} src='/image/five-stars.jpg' alt="Five star rating"/>
                            <img className={Styles.pro} src='/image/female.webp' alt={`${item.name}'s profile`}/>
                            <h2>{item.name}</h2>
                            <p>{item.comment}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
export default Main;
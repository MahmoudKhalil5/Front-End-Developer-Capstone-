import React from 'react';
import Styles from './Main.module.css'
import MainImage from './image/Main.jpg'
import GreekSaladImage from './image/GreekSalad.jpg';
import BruschettaImage from './image/Bruschetta.jpg';
import LemonCakeImage from './image/LemonCake.jpg';
import FemaleImage from './image/female.webp';
import MaleImage from './image/male.webp';
import StarImage from './image/five-stars.jpg';
import RestaurantImage from './image/restaurant.jpg';
import MarioAndAdrianImage from './image/MarioAndAdrian.jpg';

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
                    <img  src={MainImage} alt=""/>
                </div>
            </div>
            <div className={Styles.Specials}>
                <div className={Styles.SH}>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
            </div>

                <div className={Styles.Cards}>
                <div className={Styles.Card}>
                        <img className={Styles.CardImg} src={GreekSaladImage}alt=""/>
                        <div className={Styles.CBody}>
                            <div className={Styles.CTitle}>Greek Salad</div>
                                <p className={Styles.CText}>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                                </p>
                            <button className={Styles.Btn}>Order Delivery</button>
                        </div>
                    </div>
                    <div className={Styles.Card}>
                        <img className={Styles.CardImg} src={BruschettaImage}alt=""/>
                        <div className={Styles.CBody}>
                            <div className={Styles.CTitle}>Bruschetta</div>
                                <p className={Styles.CText}>
                                Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.
                                </p>
                            <button className={Styles.Btn}>Order Delivery</button>
                        </div>
                    </div>
                    <div className={Styles.Card}>
                        <img className={Styles.CardImg} src={LemonCakeImage}alt=""/>
                        <div className={Styles.CBody}>
                            <div className={Styles.CTitle}>Lemon Cake</div>
                                <p className={Styles.CText}>
                                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                                </p>
                            <button className={Styles.Btn}>Order Delivery</button>
                        </div>
                    </div>
                </div>

                <div className={Styles.Testimonials}>
                    <div className={Styles.TestimonialsH}>
                        <h1>Testimonials</h1>
                    </div>
                    <div className={Styles.revCont}>
                        <div className={Styles.Review}>
                            <img className={Styles.rat} src={StarImage} alt=""/>
                            <img className={Styles.pro} src={MaleImage} alt=""/>
                            <h2>Name</h2>
                            <p>customer feedback </p>
                        </div>
                        <div className={Styles.Review}>
                            <img className={Styles.rat} src={StarImage} alt=""/>
                            <img className={Styles.pro} src={FemaleImage} alt=""/>
                            <h2>Name</h2>
                            <p>customer feedback </p>
                        </div>
                        <div className={Styles.Review}>
                            <img className={Styles.rat} src={StarImage} alt=""/>
                            <img className={Styles.pro} src={MaleImage} alt=""/>
                            <h2>Name</h2>
                            <p>customer feedback </p>
                        </div>
                        <div className={Styles.Review}>
                            <img className={Styles.rat} src={StarImage} alt=""/>
                            <img className={Styles.pro} src={FemaleImage} alt=""/>
                            <h2>Name</h2>
                            <p>customer feedback </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.about}>
                    <div className={Styles.Acontent}>
                        <h4>Little Lemon</h4>
                        <h5>Chicago</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
                    </div>
                    <div className={Styles.owner}>
                        <img className={Styles.chefs} src={MarioAndAdrianImage}width={250} height={300} alt=""/>
                        <img className={Styles.resturant} src={RestaurantImage} width={250} height={300} alt=""/>
                    </div>
                </div>
        </main>
    );
}
export default Main;
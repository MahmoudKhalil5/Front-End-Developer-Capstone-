import React from "react";
import Styles from './style.module.css';

export default function About(){
    return(
        <><div className={Styles.about}>
        <div className={Styles.Acontent}>
            <h4>Little Lemon</h4>
            <h5>Chicago</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
        </div>
        <div className={Styles.owner}>
            <img className={Styles.chefs} src='/image/MarioAndAdrian.jpg' width={250} height={300} alt=""/>
            <img className={Styles.resturant} src='/image/restaurant.jpg' width={250} height={300} alt=""/>
        </div>
    </div></>
    );
}

import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import styles from './Food.module.scss'

export function FoodPage() {
    return (
        <>
            <VikingBanner header="JavaZone 2021 Food Menu" subHeader=""/>
            <Section color="blue" header={<h1>Systek, R1</h1>}>
                <p>
                    <p>
                        <b>Sushi bowl</b>
                    </p>
                    <p>
                        Raw salmon, chili mayonnaise, pomegranate seeds, soybeans, and marinated sushi rice.
                        <span className={styles.allergies}>(Fish, Egg, Mustard)</span>
                        <br/>
                        <b>Vegan alternative:</b> with Umami marinated tofu and coconut ‘yoghurt’
                    </p>


                    <p><b>Salad bar:</b></p>

                    <ul>
                        <li>Kale salad with apple vinaigrette</li>
                        <li>Cous-cous salad with pomegranate.
                            <span className={styles.allergies}>(Gluten,Wheat)</span>
                        </li>
                        <li>
                            Caprese, with historic tomatoes and lovage.
                            <span className={styles.allergies}>(Milk products)</span>
                        </li>
                        <li>Grilled paprika & borlotti beans</li>
                        <li>
                            Creamy broccoli salad with cranberries.
                            <span className={styles.allergies}>(Milk products)</span>
                        </li>
                    </ul>

                </p>
            </Section>
            <Section color="blue" header={<h1>Bouvet, R2</h1>}>
                <p>
                    <p>
                        <b>Chicken wings</b>
                    </p>
                    <p>
                        «Diablo» smoked paprika, red chili and lime mayonnaise
                        <span className={styles.allergies}>(Egg, Mustard)</span>
                    </p>

                    <p>
                        <b>Baked pumpkin (Vegetarian)</b>
                    </p>
                    <p>Kale, pumpkin cream, and lime mayonnaise
                        <span className={styles.allergies}>(Milk products, Egg, Mustard)</span>
                    </p>

                </p>
            </Section>
            <Section color="blue" header={<h1>TietoEVRY, R3</h1>}>
                <p>
                    <p>
                        <b>Pizza Picante</b>
                    </p>
                    <p>
                        Pizza from the stone oven, mozzarella and Calabrese piccante, or vegetarian pizza with
                        artichoke, grilled paprika, mushroom, and onion.
                        <span className={styles.allergies}>(gluten, wheat, milk products)</span>
                        <br/>
                        Also available as gluten free
                    </p>

                    <p>
                        <b>Soft ice</b>
                        <span className={styles.allergies}>(Milk products, soy)</span>
                    </p>
                    <p>
                        with loads of different homemade toppings and served with a Belgian waffle
                        <span className={styles.allergies}>(Gluten, Wheat, Milk products, Soy)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Webstep, R4</h1>}>
                <p>
                    <p><b>Porchetta</b></p>
                    <p>
                        Peperonato & Sage<span className={styles.allergies}>(Egg, Mustard)</span>
                    </p>

                    <p>
                        <b>Smoothie and Milkshake Bar:</b> mango smoothie, berry smoothie, strawberry milkshake and
                        chocolate milkshake
                        <span className={styles.allergies}>(Milk products)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Accenture, R5</h1>}>
                <p>
                    <p>
                        <b>Soft Taco</b>
                    </p>
                    <p>
                        pulled chicken or baked sweet potato, pickled red onion, kale, coriander, chipotle-mayonnaise
                        and lime.
                        <span className={styles.allergies}>(Gluten, Wheat, Egg, Mustard)</span>
                    </p>

                    <p>
                        <b>Nachos (Vegetarian)</b>
                    </p>
                    <p>
                        Guacamole, salsa and chili-cheese sauce
                        <span className={styles.allergies}>(Milk products)</span>
                        <br/>
                        Vegan alternative: without cheese
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Knowit, R6</h1>}>
                <p>
                    <p>
                        <b>Sliders</b>
                    </p>
                    <p>
                        Pulled beef, kale salad, grilled corn cream and Bbq sauce.
                        <span className={styles.allergies}>(Gluten, Wheat, Milk products)</span>
                        <br/>
                        Also available as gluten free
                        <br/>
                        Vegetarian alternative: with pulled aubergine
                    </p>
                    <p>
                        <b>Saltbaked potatoes</b>
                    </p>
                    <p>
                        Parmesan and truffle mayonnaise
                        <span className={styles.allergies}>(Milk products, Egg, Mustard)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>BEKK, R7</h1>}>
                <p>
                    <p>
                        <b>Barley risotto</b>
                    </p>
                    <p>
                        Porcini mushroom, goat cheese, and crispy Parma ham
                        <span className={styles.allergies}>(Milk products, Gluten, Barley)</span>
                    </p>

                    <p>
                        <b>Hummus bowl (vegan)</b>
                    </p>
                    <p>
                        Grilled paprika, chickpeas and coconut yoghurt
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Capgemini, R8</h1>}>
                <p>
                    <p>
                        <b>Twice cooked Duck</b>
                    </p>
                    <p>
                        marinated sushi rice, pomegranate seeds, bok choy and Hoi Sin sauce
                        <span className={styles.allergies}>(Soy, Gluten, Wheat)</span>
                    </p>

                    <p>
                        <b>Baked beetroot (Vegetarian)</b>
                    </p>
                    <p>
                        Lentils, cottage cheese and lovage
                        <span className={styles.allergies}>(Milk products)</span>
                        <br/>
                        Vegan alternative: with coconut ‘yoghurt’
                    </p>
                </p>
            </Section>
        </>
    )
}

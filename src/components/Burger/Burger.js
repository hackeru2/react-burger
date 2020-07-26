import React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igkey => [...Array(props.ingredients[igkey])].map((_, i) => {
        return (<BurgerIngredient key={igkey + i} type={igkey} />
        )
    }
    )).reduce((arr, el) => arr.concat(el), [])
    if (transformedIngredients.length === 0) transformedIngredients = <p>Please start adding ingredients!</p>
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {transformedIngredients}
            {/* <BurgerIngredient type={"portabelo"} />
            <BurgerIngredient type={"tofu"} /> */}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    )
}

Burger.propTypes = {

}

export default Burger


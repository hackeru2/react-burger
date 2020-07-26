import propTypes from "prop-types";
import React, { Component } from 'react';
import classes from "./BurgerIngredient.module.css";
class BurgerIngredient extends Component {



    render() {



        let ingredient = null
        switch (this.props.type) {
            case ('bread-top'):
                ingredient = (<div className={classes.BreadTop}>
                    <div className={classes.Seeds1}> </div>
                    <div className={classes.Seeds2}> </div>
                </div>)
                break;
            case ('portabelo'):
                ingredient = (<div className={classes.Portabelo}></div>)
                break;
            case ('cheese'):
                ingredient = (<div className={classes.Cheese}></div>)
                break;
            case ('tofu'):
                ingredient = (<div className={classes.Tofu}></div>)
                break;
            case ('haze-of'):
                ingredient = (<div className={classes.Hazeof}></div>)
                break;
            case ('salad'):
                ingredient = (<div className={classes.Salad}></div>)
                break;
            case ('bread-bottom'):
                ingredient = (<div className={classes.BreadBottom}></div>)
                break;


        }
        return ingredient
    }
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired


}

export default BurgerIngredient
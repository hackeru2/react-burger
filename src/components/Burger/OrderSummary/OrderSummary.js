import React from 'react';
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => (<li key={igkey}>
            <span style={{ textTransform: 'capitalize' }}>{igkey}</span>
            :
            {props.ingredients[igkey]}</li>));

    return (
        <Aux >
            <h3>Your Order </h3>
            <p>A delicious burger with the following ingredients:  </p>
            <ul>
                {ingredientSummary}</ul>
            <p> <strong>Total Price: {props.price.toFixed(2)}</strong> </p>
            <p>Continue to Checkout ?  </p>
            <Button btnType="Danger"
                clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success"
                clicked={props.purchaseContinued}>
                Continue
            </Button>

        </Aux>
    )
}

OrderSummary.propTypes = {

}

export default OrderSummary

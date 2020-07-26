import React, { Component } from 'react'
import BuildControls from "../../components/BuildControls/BuildControls"
import Burger from "../../components/Burger/Burger"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import Modal from "../../components/UI/Modal/Modal"
import Aux from "../../hoc/Aux"

const INGREDIENT_PRICES = {
    'haze-of': 1.3,
    salad: 0.5,
    tofu: 0.6,
    cheese: 0.4,
    portabelo: 0.7
}
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            'haze-of': 0,
            salad: 0,
            tofu: 0,
            cheese: 0,
            portabelo: 0
        }
        , totalPrice: 4
        , purchasable: false
        , purchasing: false
    }
    updatePurchaseState(ingrediants) {
        // const ingrediants = {
        //     ...this.state.ingredients
        // }
        const sum = Object.keys(ingrediants)
            .map(igkey => ingrediants[igkey]).reduce((sum, el) => sum + el, 0)

        this.setState({ purchasable: sum > 0 })
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]

        const updatedCount = oldCount + 1
        const updatedIngredients = { ...this.state.ingredients }
        const priceAddition = INGREDIENT_PRICES[type]
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)
    }

    removedIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) return console.log("you dont have that ingredient")
        const updatedCount = oldCount - 1
        const updatedIngredients = { ...this.state.ingredients }
        const priceDeduction = INGREDIENT_PRICES[type]
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)
    }
    purchaseHandeler = () => {
        this.setState({ purchasing: true })
    }
    purchaseCancelHandeler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinuedHandeler = () => {
        alert("u continue")
        this.setState({ purchasing: false })
    }
    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;

        }
        return (
            <Aux>
                <Modal
                    modalClosed={this.purchaseCancelHandeler}
                    show={this.state.purchasing}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandeler}
                        purchaseContinued={this.purchaseContinuedHandeler}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                {/* <div>BBuilder controles</div> */}
                <BuildControls
                    ordered={this.purchaseHandeler}
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removedIngredientHandler} />
            </Aux>
        )
    }
}

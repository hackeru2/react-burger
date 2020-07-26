import React from 'react'
import { BuildControl } from "./BuildControl/BuildControl"
import classes from "./BuildControls.module.css"

const controls = [
    { label: 'Portabelo', type: 'portabelo' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Tofu', type: 'tofu' },
    { label: 'Haze-of', type: 'haze-of' },
    { label: 'Salad', type: 'salad' },
    // { label: 'Bread', type: 'bread' },
]

const BuildControls = (props) => {
    console.log({ purchasable: props.purchasable })
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <b>{props.price.toFixed(2)}</b></p>
            {controls.map(ctrl => (
                <BuildControl
                    disabled={props.disabled[ctrl.type]}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    key={ctrl.label}
                    label={ctrl.label} />))}
            <button
                disabled={!props.purchasable}
                onClick={props.ordered}
                className={classes.OrderButton} >ORDER NOW!</button>
        </div>
    )
}

export default BuildControls

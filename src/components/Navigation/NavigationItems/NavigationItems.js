import React from 'react'
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem nItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}

NavigationItems.propTypes = {

}

export default NavigationItems

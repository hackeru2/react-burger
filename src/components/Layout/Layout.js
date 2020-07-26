import React, { Component } from 'react'
import Aux from "../../hoc/Aux"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import classes from "./Layout.module.css"



class Layout extends Component {
    state = { showSideDrawer: true }
    sideDrawerOpenHandeler = () => {
        this.setState({ showSideDrawer: true })
    }
    sideDrawerClosedHandeler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerToggleHandeler = () => {
        this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } })
    }
    render() {

        return (
            <Aux>

                {/* <div>
                toolbar ,sidedrawer , backdrop
        </div> */}
                <Toolbar opened={this.sideDrawerOpenHandeler} drawerToggleClicked={this.sideDrawerToggleHandeler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandeler} />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }





}
export default Layout
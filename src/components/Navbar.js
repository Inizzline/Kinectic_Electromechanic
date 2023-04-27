import { Component } from "react";
import { MenuItem } from "./MenuItems";
import "./NavbarStyles.css"
import { Link } from "react-router-dom";

class Navbar extends Component {

    // Initial state of the mobile menu icon screen is set as FALSE
    state = {clicked: false}

    // Create a function handleClicked that changes the setState of the clicked to TRUE
    handleClicked = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                {/* <img className="img-logo" src="images/ke_logo.png" alt="Company logo"/> */}
                <h1 className="navbar-header">
                    I&I Group
                </h1>

                {/* We call the handleClicked function with the onClick to trigger the expression  */}
                <div className="menu-icons" onClick={this.handleClicked}>

                    {/* This is an expression that toggles the menu and close icon in the mobile view */}
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

                {/* A space is added in the javascript expression because you cannot use a . in a className in javascript  */}
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

                {/* This is a map function that maps items saved in the MenuItem */}
                    {MenuItem.map((item, id) => {
                        return (
                            <li key={id}>
                              <Link className={item.cName} to={item.url}><i className={item.icons}></i>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button className="">Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;


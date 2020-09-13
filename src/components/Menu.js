import React from "react";
import PropTypes from "prop-types"
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return (

        <ul className="navbar-nav mr-auto">
            {props.menuList.map((menuItem, index) => (
                <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={menuItem.menuLink}>
                        {menuItem.menuLabel}
                    </NavLink>

                </li>
            ))}
        </ul>

    )

}
export default Menu;

Menu.propTypes = {
    menuList: PropTypes.array
}
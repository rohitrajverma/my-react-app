import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context";

function Column(props) {

    //use context to access the context data
    const theme = React.useContext(ThemeContext);

    const size = 12 / props.colSize;
    let cls = 'col-md-' + size;

    cls += theme === 'light' ? ' text-dark' : ' text-light';

    return (
        <div className={cls}>
            {props.children}
        </div>
    )
}

export default Column;
Column.propTypes = {
    colSize: PropTypes.number
}

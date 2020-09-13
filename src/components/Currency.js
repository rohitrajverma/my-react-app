import React from "react";
import PropTypes from "prop-types"   // prop validation
import { connect } from "react-redux";
import { updateCurr } from "../store/actions/currency-actions";

class Currency extends React.Component {
    render() {
        const currencyCodes = ['INR', 'USD', 'GBP', 'EUR'];
        return (
            <select style={{ padding: '5px', margin: '20px', float: 'right' }} onChange={(event) => this.props.currencyChange(event.target.value)}>
                {
                    currencyCodes.map(item => <option key={item}> {item} </option>)
                }
            </select >
        );
    }

}

// connect(what to retrieve, what to modify/change)(component)
const mapDispatchToProps = (dispatch) => {
    return {
        currencyChange: (code) => dispatch(updateCurr(code)),
    };
};

export default connect(null, mapDispatchToProps)(Currency);


Currency.propType = {
    currencyChange: PropTypes.func.isRequired
}
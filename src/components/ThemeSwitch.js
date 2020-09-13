import React from "react";
import PropTypes from "prop-types";

function ThemeSwitch(props) {
    let [theme, switchTheme] = React.useState('light');
    
    //useEffect----------- mount, unmount, update
    React.useEffect(() => {
        document.body.className = 'bg-' + theme;
    });


    if (theme === 'light') {
        return (
            <i className="fas fa-moon text-dark fa-2x" style={{
                float: 'right',
                padding: '20px'
            }} onClick={() => {
                switchTheme('dark')
                props.changeTheme('dark')
            }}></i >
        )
    }

    return (
        <i className="fas fa-sun text-warning fa-2x" style={{
            float: 'right',
            padding: '20px'
        }} onClick={() => {
            switchTheme('light')
            props.changeTheme('light')
        }}></i >
    )


}

export default ThemeSwitch;
ThemeSwitch.propTypes = {
    changeTheme: PropTypes.func.isRequired
}

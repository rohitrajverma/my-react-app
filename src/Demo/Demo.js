import React from 'react';
import { ThemeContext } from '../context';

class Demo extends React.Component {

    static contextType = ThemeContext; //Context api in class component

    render() {
        const name = 'Rohit';
        return (
            <div className={this.context === 'light' ? 'text-dark' : 'text-light'}>
                <h2>E-commerce Website</h2>
                <h5>Hello {name}</h5>
            </div >
        )
    }
}

export default Demo;
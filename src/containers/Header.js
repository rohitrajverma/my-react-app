import React from "react"
import Axios from "axios";
import Menu from "../components/Menu";
import { ThemeContext } from "../context";

class Header extends React.Component {
    static contextType = ThemeContext;
    state = { menuItem: [] };

    async componentDidMount() {
        try {
            const res = await Axios.get('/menu.json');
            const menuItem = res.data;
            this.setState({ menuItem })
        } catch (error) {
            console.log('error', error);
        }
    }

    // componentDidMount() {
    //     Axios.get('/menu.json').then(res => this.setState({ menuItem: res.data }))
    // }

    render() {
        const theme = this.context ==='dark'
            ? "navbar-dark bg-dark"
            : "navbar-light bg-light";

        return (

            <nav className={"navbar navbar-expand-lg " + theme}>
                <div className="navbar-brand">E-Com</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Menu menuList={this.state.menuItem} />
                    {this.props.children}
                </div>
            </nav>

        )
    }

}

export default Header;
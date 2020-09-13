import React from "react";
import Axios from "axios";
import { signInSuccess, signInError } from "../store/actions/user-actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Column from "../components/Column";

class Login extends React.Component {

    state = { email: '', password: '' }

    doLogin(e) {
        e.preventDefault();
        const API_KEY = "AIzaSyDWfrv25m9J6u-D-xl4xZ5TpvlPCtRWy4Q"
        const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
        const data = { "email": this.state.email, "password": this.state.password, "returnSecureToken": true }

        Axios.post(endpoint, data)
            .then(res => {
                console.log(res)
                this.props.loginSuccess(res.data);
            })
            .catch(err => {
                console.log(err)
                this.props.loginError(err.response.data.error.message);

            })
    }

    render() {

        if (this.props.isLoggedIn) {
            let lastPage = "/";
            if (this.props.location.state && this.props.location.state.from) {
                lastPage = this.props.location.state.from;
            }
            return <Redirect to={lastPage} />
        }


        return (
            <Column colSize={1}>
                <form className="container-fluid col-12 col-md-4" onSubmit={(e) => this.doLogin(e)}>
                    <div className=" form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                            ref={(r) => this.emailRef = r}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                        <label>Password</label>
                        <input type="password" className="form-control"
                            onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <button className="btn btn-block btn-success">Login</button>
                </form >
            </Column>
        );
    }
}

const mapStateToProps = (storeData) => {
    return {
        isLoggedIn: !!storeData.userSession.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginSuccess: (user) => dispatch(signInSuccess(user)),
        loginError: (err) => dispatch(signInError(err))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
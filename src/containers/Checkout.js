import React from "react";
import Column from "../components/Column";

class Checkout extends React.Component {
    state = { name: 'rohit' }
    emailRef = null;
    saveData(e) {
        e.preventDefault();
        console.log('test', this.state.name, this.emailRef.value);
    }

    render() {
        return (
            <Column colSize={1}>
                <form className="container-fluid col-12 col-md-4" onSubmit={(e) => this.saveData(e)}>
                    <div className=" form-group">
                        {/* controlled Component */}
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={(e) => this.setState({ name: e.target.value })} />
                        {/* uncontrolled component */}
                        <label>Email</label>
                        <input type="text" className="form-control" ref={(r) => this.emailRef = r} />
                    </div>
                    <button className="btn btn-primary">Submit</button>


                    {/* Router Params */}
                    {/* for getting params (url/12345) */}
                    {/* <div>{this.props.match.params.id}</div> */}
                    {/* for getting query parameters (url?name:rohit&age:29) */}
                    {/* <div>{this.props.location.search}</div> */}

                </form>
            </Column>
        );
    }
}
export default Checkout;
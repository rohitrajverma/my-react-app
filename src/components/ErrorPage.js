import React from "react"
import Column from "./Column";
//import { ThemeContext } from "../context";

function ErrorPage(props) {

    // const theme = React.useContext(ThemeContext);

    return (
        <Column col={4}>
            <div className="align-center">
                <h1>404 Error</h1>
                <p>Page not found</p>
            </div>
        </Column>
    )

}
export default ErrorPage;
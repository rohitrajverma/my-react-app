
import React from "react"
import PropTypes from "prop-types"   // prop validation
import Column from "./Column";
import ImageWithFallback from "./ImageWithFallback";
class Product extends React.Component {

    renderStock(stock, wishlist) {
        if (stock) {
            return (
                <button className="btn btn-primary"
                    onClick={() => this.props.btnClick()}>
                    Add to {wishlist ? 'wishlist' : 'cart'}
                </button>);
        } else {
            return (<p>Out Of Stock</p>);
        }
    }

    render() {
        //const pData = this.props.pData;
        const { pData, wishlist, code } = this.props; //destructuring
        return (
            <Column colSize={4} >

                <div style={this.productStyle}>
                    {/* <img style={this.imageStyle} src={pData.productImage} alt="product" onError={(ev) => ev.target.src = '/logo192.png'} /> */}
                    <ImageWithFallback source={pData.productImage}></ImageWithFallback>
                    <h2>{pData.productName}</h2>
                    <h5> {code}{pData.productPrice}</h5>
                    <div>
                        {this.renderStock(pData.productStock, wishlist)}
                    </div>
                </div>

            </Column>
        );
    }


    productStyle = {
        padding: '5px',
        margin: '5px',
        borderRadius: '3px',
        border: '1px solid gray'
    }
    imageStyle = {
        height: '220px',
        width: '220px',
        borderRadius: '3px',
    }

}

export default Product;
//prop validation
Product.propTypes = {
    pData: PropTypes.object.isRequired,
    wishlist: PropTypes.bool
}
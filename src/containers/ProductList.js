import React from "react"
import "./ProductList.css"
import Product from "../components/Product"
import Axios from "axios";
import { connect } from "react-redux";

class ProductList extends React.Component {
    componentDidMount() {
        this.getData();
    }
    state = { pList: [] }
    getData() {
        const url = 'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
        Axios.get(url).then(res => {
            console.log('success', res.data);
            this.setState({ pList: res.data })
        }).catch(err => console.log('falure', err));
    }
    addItem() {
        //add to cart logic
        // navigate to cart logic

        this.props.history.push('/cart')
    }
    render() {
        return (
            <div className="row">
                {this.state.pList.map(x => <Product pData={x} key={x.productId} code={this.props.currentCode} btnClick={() => this.addItem()} />)}

                {this.state.pList[0] ? <Product pData={this.state.pList[1]} wishlist={true} code={this.props.currencyCode} /> : null}
            </div>
        )
    }
}

// export default ProductList;


const mapStoreDataToProps = (storeData) => {
    return {
        currentCode: storeData.currency
    };
};

//connect(how to connect)(what to connect)
export default connect(mapStoreDataToProps)(ProductList);
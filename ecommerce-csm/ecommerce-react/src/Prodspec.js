import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Product extends Component {
    constructor() {
        super()
        this.state= {
            product: null
        }
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        const url = "http://localhost:8080/api/collections/get/products?token=account-26de3aeea82819bf3322bae3e14ec6&filter[_id]="+id;
        fetch (url)
            .then((collections) => collections.json())
            .then((data) => {
            this.setState({
                product: data.entries[0]
            })
        })
    }

    render () {
        console.log(this.state.product);
        const product = this.state.product;
        if (!this.state.product) {
            return null;
        }
        // let imageURL = `http://localhost:8080${product.Image.url}`;

        console.log(product)
        return (
            <NavLink to={"/product/"+product._id}>
                <div className="container">

                    <div className="App">
                        <h2>{product.Name} </h2>
                        <p>Category: {product.Category}  </p>
                        <h4>Price: {product.Price} </h4>

                    </div>
                </div>
            </NavLink>

        )
    }
}

export default Product;
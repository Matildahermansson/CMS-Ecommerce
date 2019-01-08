import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import AddToCartButton from "./AddToCartButton";



class Product extends Component {
    constructor(props) {
        super(props);
    }


    addToCart() {
        let itemsInCart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
        itemsInCart.push(this.props.product);
        localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
        console.log("your item: ", itemsInCart)
        this.props.addToCart(itemsInCart)

    }

    render() {

        const product = this.props.product;
        let imageURL = `http://localhost:8080/api/collections/get${product.Image.url}`;
        console.log(product)
        return (
            <div className="container">


            <NavLink to={"/product/"+product._id}>


                    <div className="App">
                        <h2>{product.Name} </h2>
                        <p>Description {product.Description}</p>
                        <p>Category: {product.Category} </p>
                        <h4>Price: {product.Price} </h4>
                        <p>In Stock: {product.Stock} </p>
                        <img src={imageURL} alt="image" />


                    </div>


            </NavLink>
             <AddToCartButton addToCart={this.addToCart.bind(this, product)}/>

            </div>

        )
    }
}

export default Product;
import React, { Component } from 'react';
import './App.css';
import Product from  './Product.js';
import Filtering from './Filtering'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.state = {
            itemsInCart: [],
        }
    }
    componentDidMount() {
        this.getProducts();
        let itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));
        this.setState({
            itemsInCart,
        })
    }

    getProducts(sortOnPrice=false) {
        let append = "";

        if (sortOnPrice === 0) {
            //append = "?_sort=Price:asc";
            append = "&sort[Price]=1";
        }
        if (sortOnPrice === 1) {
            //append = "?_sort=Stock:asc";
            append = "&sort[Stock]=1";

        }
        if (sortOnPrice === 2) {
            //append = "?_sort=Category:asc";
            append = "&sort[Category]=1";

        }

        //http://localhost:8080/api/collections/get/products?token=account-26de3aeea82819bf3322bae3e14ec6
        //add append
        fetch("http://localhost:8080/api/collections/get/products?token=account-26de3aeea82819bf3322bae3e14ec6"+append)
            .then((collections) => collections.json())
            .then((data) => {
                console.log("data is", data)
                this.setState({
                    products:  data.entries,
                });
            })
    }
    sortProducts(index) {
        this.getProducts(index)
    }

    updateCart(itemsInCart) {
        this.setState({
            itemsInCart,
        })
    }


    render() {
        console.log("products are", this.state.products);
        if (!this.state.products) {
            return null;
        }
        const prodList = this.state.products.map((product) => {
            return <Product addToCart={ (ev) => this.updateCart(ev) }product={product} />;
        });

        const itemsInCart = this.state.itemsInCart;
    


        return (
            <div>
                <h1>Welcome</h1>
                <p>Items in Cart: {(itemsInCart && itemsInCart.length) ? itemsInCart.length : 0}</p>
                <Filtering onToggleSort={this.sortProducts.bind(this)}/>
                <div className="App">
                    {prodList}
                </div>
                <h1>This is a footer</h1>
            </div>
        );
    }
}

export default App;






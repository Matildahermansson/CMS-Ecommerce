import React, { Component } from 'react';

class AddToCartButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.addToCart()}>Add to Cart</button>
        )
    }
}
export default AddToCartButton;







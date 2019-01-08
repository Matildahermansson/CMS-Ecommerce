import React, { Component } from 'react';
import UserComment from './UserComment'

class Review extends Component {
    constructor() {
        super()

    }


    render() {
        const review = this.props.reviews || [];

        if (!review)
            return null;
        console.log("reviews are", this.props);

        const li = [review].map((review) => {

            return <div><h4>User comment:</h4> {review.Review} <h4>User rating: {review.Rating}</h4>  </div>
        });


        return (
            <div>
                {li}
            </div>
        )
    }
}


export default Review;
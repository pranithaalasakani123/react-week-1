import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

export default class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className={"row"}>
                    <div className={"col-12 col-md-5 m-1"}>
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={"col-12 col-md-5 m-1"}>
                        <h1>Comments</h1>
                        {this.renderCommments(dish)}
                    </div>

                </div>

            );
        else
            return (
                <div></div>
            );
    }

    renderCommments(dish) {
        console.log(dish);
        const comments = dish.comments.map(comment => {
            return (
                <div>
                    <li className="list-unstyled">{comment.comment}</li>
                    <li className="list-unstyled">{"--" + comment.author + ", " + comment.date}</li>
                </div>
            )
        })

        return comments;
    }

    render() {
        return this.renderDish(this.props.dish);
    }
}
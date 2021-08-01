import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle
} from 'reactstrap';

import DishDetails from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {
                    this.state.selectedDish != null ? <DishDetails dish={this.state.selectedDish} /> : <div></div>
                }

            </div>
        );
    }
}

export default Menu;

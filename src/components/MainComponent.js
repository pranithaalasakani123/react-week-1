
// LIBS
import React, { Component } from 'react';

// SHARED 
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments'

// COMPONENTS
import Menu from './MenuComponent';
import { DishDetail } from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            selectedDish: null,
            selectedComments: null
        }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        })

        this.onCommentSelect(dishId);
    }

    onCommentSelect(dishId) {

        let commentList = [];

        COMMENTS.filter((comment) => {
            return comment.dishId === dishId ? commentList.push(comment) : null;
        });

        this.setState({
            selectedComments: commentList
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                />
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                    comments={this.state.selectedComments}
                />
                <Footer />
            </div>
        )
    }

}

export default Main;
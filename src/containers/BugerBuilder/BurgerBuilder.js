import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES={
    salad: 0.8,
    cheese: 0.5,
    meat: 1.5,
    bacon: 0.75
}

class BurgerBuilder extends Component{
    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3,
        purchasable: false
    }

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
            .map(ingKey => {
                return ingredients[ingKey];//I return numbers for types/keys here
            })
            .reduce((sum,e) => {
                return sum + e;
            },0);
        this.setState({purchasable: sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount= this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]=updatedCount;

        const addedPrice = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + addedPrice;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount= this.state.ingredients[type];

        if(oldCount <=0 ){
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]=updatedCount;

        const substractedPrice = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - substractedPrice;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <= 0
        }
        //{salad: true, cheese: true, meat: false, ...}
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    />
            </Fragment>
        );
    }
}

export default BurgerBuilder;
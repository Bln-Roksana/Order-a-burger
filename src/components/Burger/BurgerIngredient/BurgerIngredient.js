import React from 'react';
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.css';


const burgerIngredient = (props) => {

    let ingredient = null ; // initally not rendering anything
    switch (props.type){
        case ('bread-bottom'):
            ingredient= <div className={classes.BreadBottom}> </div>;
            break;
        case ('bread-top'):
            ingredient =(
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient= <div className={classes.Meat}></div>;
            break;
        case('cheese'):
            ingredient= <div className={classes.Cheese}></div>;
            break;
        case('salad'):
            ingredient= <div className={classes.Salad}></div>;
            break;
        case('bacon'):
            ingredient= <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient=null; //if something goes wrong

    }
    return ingredient;
}//curly brackets because I would like to return some logic.

burgerIngredient.propTypes ={
    type: PropTypes.string.isRequired
}

export default burgerIngredient;

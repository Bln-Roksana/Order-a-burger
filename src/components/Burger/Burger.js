import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transIngredients=Object.keys(props.ingredients) // this gives an array of keys
        .map(e => {
            return [...Array(props.ingredients[e])].map((_, i) => {
                return <BurgerIngredient key={e+i} type={e} />
            });
        })
        .reduce((prevVal, currVal) => {
            return prevVal.concat(currVal)
        },[])

        //console.log(transIngredients);
    if (transIngredients.length===0){
        transIngredients=<p>Please start addinng ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger;
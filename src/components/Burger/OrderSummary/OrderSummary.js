import React,{Fragment} from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey=>{
            return <li key={ingKey}><span style={{textTansform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li>
        })
        console.log("I am in Order Summary")
    return (
    <Fragment>
        <h3>Your order</h3>
        <p>Your delicious burger will have the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Fragment>
    )}

export default orderSummary;
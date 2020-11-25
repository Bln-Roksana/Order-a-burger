import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
];

const buildControls =(props) => (
    <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(e => (
          <BuildControl 
            key={e.label} 
            label={e.label}
            added={ () => props.ingredientAdded(e.type) } 
            removed={ () => props.ingredientRemoved(e.type)}
            disabled={props.disabled[e.type]}
            />
      ))}  
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

export default buildControls;
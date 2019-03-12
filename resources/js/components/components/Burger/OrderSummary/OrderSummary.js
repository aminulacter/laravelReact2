import React from 'react';
import Aux from '../../../Hoc/Aux1';
import Button from '../../UI/Button1/Button1';


const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    console.log(props.ingredients["meat"]);
    console.log(ingredientSummary);
    return (
      <Aux>
        <h3>Your Order</h3>
        <p> A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
}
 
export default OrderSummary;
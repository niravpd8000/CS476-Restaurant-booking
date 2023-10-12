import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import ItemQuantity from "../../../reusable/ItemQuantity";

const MealItemForm = (props) => {
    const [amountIsvalid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumbber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumbber < 1 ||
            enteredAmountNumbber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumbber);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <ItemQuantity
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!amountIsvalid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;

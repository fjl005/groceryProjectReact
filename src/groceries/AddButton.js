import { Button } from 'reactstrap';
import { useState } from 'react';

const AddButton = ({ price, setBudgetValue, budgetValue }) => {

    const updateBudget = (price) => {
        if (budgetValue >= price) {
            setBudgetValue(budgetValue - price);
        } else {
            setButtonText('No $$');
            setButtonColor('danger');
            resetButton();
        }
    }

    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonText, setButtonText] = useState('Add');

    const updateButton = (clicked, price) => {
        if (clicked) {
            setButtonColor('success');
            setButtonText('Added!');
            resetButton();
            console.log('hello');
            updateBudget(price);
        }
    }

    const resetButton = () => {
        setTimeout(setButtonColor, 2000, 'primary');
        setTimeout(setButtonText, 2000, 'Add');
    }


    return (
        <Button
            color={buttonColor}
            onClick={() => {
                updateButton(true, price);
            }}>
            {buttonText}
        </Button>
    )
}

export default AddButton;
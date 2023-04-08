import { Button } from 'reactstrap';
import { useState } from 'react';
import { updateBudget } from './groceriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { currentBudget } from './groceriesSlice';
import { addItem } from '../summary/summarySlice';

const AddButton = ({ price, itemName, groceryType }) => {
    // Button styling
    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonText, setButtonText] = useState('Add');
    
    // Redux Code
    const dispatch = useDispatch();
    const currentBudgetVal = useSelector(currentBudget);

    const changeBudget = (price, itemName) => {
        if (currentBudgetVal >= price) {
            dispatch(updateBudget(price));
            dispatch(addItem({
                price: price,
                itemName: itemName,
                groceryType: groceryType
            }));
        } else {
            setButtonText('No $$');
            setButtonColor('danger');
            resetButton();
        }
    }

    const updateButton = (clicked, price, itemName) => {
        if (clicked) {
            setButtonColor('success');
            setButtonText('Added!');
            resetButton();
            changeBudget(price, itemName);
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
                updateButton(true, price, itemName);
            }}>
            {buttonText}
        </Button>
    )
}

export default AddButton;
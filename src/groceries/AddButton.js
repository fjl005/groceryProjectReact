import { Button } from 'reactstrap';
import { useState } from 'react';
import { updateBudget } from './groceriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { currentBudget } from './groceriesSlice';

const AddButton = ({ price }) => {
    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonText, setButtonText] = useState('Add');

    const dispatch = useDispatch();
    const currentBudgetVal = useSelector(currentBudget);

    const changeBudget = (price) => {
        if (currentBudgetVal >= price) {
            dispatch(updateBudget(price));
        } else {
            setButtonText('No $$');
            setButtonColor('danger');
            resetButton();

        }
    }

    const updateButton = (clicked, price) => {
        if (clicked) {
            setButtonColor('success');
            setButtonText('Added!');
            resetButton();
            changeBudget(price);
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
import React, {useState} from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText, Button } from 'reactstrap';

const GroceryCard = ({ cardImage, setBudgetValue, budgetValue}) => {
    const { image, name, items } = cardImage;
    const updateBudget = (price) => {
        if (budgetValue >= price) {
            setBudgetValue(budgetValue-price);
        }
    }

    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonText, setButtonText] = useState('Add');

    const updateButtonColor = (clicked) => {
        if (clicked) {
            setButtonColor('success');
            setButtonText('Added!');
            setTimeout(setButtonColor, 2000, 'primary');
            setTimeout(setButtonText, 2000, 'Add')
        } 
    }
    
    return (
        <Card>
            <CardImg src={image} alt='idk yet' />
            <CardBody>
                <CardTitle>
                    <h3>{name}</h3>
                </CardTitle>
                <CardText>
                    <ul>
                        {items.map((item, ind) => (
                            <li key={ind}>
                                <div className='d-flex justify-content-between'>
                                    <span>{`${item.name} ($${item.price})`} </span>
                                    <Button 
                                    className='align-self-start'
                                    color={buttonColor}
                                    onClick={() => {
                                        updateBudget(item.price);
                                        updateButtonColor(true);
                                        }}
                                    >{buttonText}</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default GroceryCard
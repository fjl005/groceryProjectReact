import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText, Button } from 'reactstrap';

const GroceryCard = ({ cardImage, setBudgetValue, budgetValue}) => {
    const { image, name, items } = cardImage;
    const updateBudget = (price) => {
        if (budgetValue >= price) {
            setBudgetValue(budgetValue-price);
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
                                    // onClick={() => {setBudgetValue(budgetValue-item.price)}}
                                    onClick={() => updateBudget(item.price)}

                                    >Add</Button>
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
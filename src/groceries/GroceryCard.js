import React, {useState} from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText, Button } from 'reactstrap';
import AddButton from './AddButton';

const GroceryCard = ({ cardImage, setBudgetValue, budgetValue}) => {
    const { image, name, items } = cardImage;
    
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
                                    <AddButton 
                                        price={item.price}
                                        setBudgetValue={setBudgetValue}
                                        budgetValue={budgetValue}
                                    />
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
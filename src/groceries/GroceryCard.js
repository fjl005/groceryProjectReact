import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText, Container, Row, Col } from 'reactstrap';


const GroceryCard = ({cardImage}) => {
    const {id, image, name, items} = cardImage;

    return (
        <Card>
            <CardImg src={image} alt='idk yet'/>
            <CardBody>
                <CardTitle>
                    <h3>{name}</h3>
                </CardTitle>
                <CardText>
                    {/* {console.log('the items list type is: ' + typeof(items))} */}
                    <ul>
                        {items.map((item) => (
                            <li className='text-left'>{`${item.name} ($${item.price})`}</li>
                        ))}
                    </ul>
                </CardText>
            </CardBody>
        </Card>

    )
}

export default GroceryCard
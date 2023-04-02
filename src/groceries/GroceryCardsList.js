import { Card, CardTitle, CardBody, CardText, Container, Row, Col } from 'reactstrap';
import React from 'react';
import GroceryCard from './GroceryCard';
import { produceArray } from './groceriesSlice';
import { proteinArray } from './groceriesSlice';

const GroceryCardsList = () => {
    return (
        <Container>
            <h2>Produce</h2>
            <Row>
                {produceArray.map((cardImage) => (
                    <Col md='4' key={cardImage.id}>
                        <GroceryCard cardImage={cardImage} />
                    </Col>
                ))}
            </Row>
            
            <br />
            <h2>Protein</h2>
            <Row>
                {proteinArray.map((cardImage) => (
                    <Col md='4' key={cardImage.id}>
                        <GroceryCard cardImage={cardImage}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GroceryCardsList;
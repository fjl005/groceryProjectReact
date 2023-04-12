import { Card, CardTitle, CardBody, CardText, Container, Row, Col } from 'reactstrap';
import React from 'react';
import GroceryCard from './GroceryCard';
import { useSelector } from 'react-redux';
import { findCategory } from './groceriesSlice';

const GroceryCardsList = () => {
    const produce = useSelector(findCategory('Produce'));
    const protein = useSelector(findCategory('Protein'));

    return (
        <Container>
            <h2>Produce</h2>
            <Row>
                {produce.map((cardImage) => (
                    <Col md='4' key={cardImage.id}>
                        <GroceryCard cardImage={cardImage} category='Produce'/>
                    </Col>
                ))}
            </Row>
            
            <br />
            <h2>Protein</h2>
            <Row>
                {protein.map((cardImage) => (
                    <Col md='4' key={cardImage.id}>
                        <GroceryCard cardImage={cardImage} category='Protein'/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GroceryCardsList;
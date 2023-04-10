import { currentList, currentFruitList, currentVegetableList, currentDairyList } from "./summarySlice";
import { useSelector } from "react-redux";
import AddedGrocery from "./AddedGrocery";
import { Container, Row, Col } from "reactstrap";



function Summary() {
    const currentListVal = useSelector(currentList);
    const currentFruitListVal = useSelector(currentFruitList);
    const currentVegetableListVal = useSelector(currentVegetableList);
    const currentDairyListVal = useSelector(currentDairyList);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Summary</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Produce</h4>
                        <ul className="ul-summary">
                            <li>Fruits</li>
                            <ul>
                                {currentFruitListVal.map((item) => (
                                    <AddedGrocery item={item} />
                                ))}
                            </ul>
                            <li>Vegetables</li>
                            <ul>
                                {currentVegetableListVal.map((item) => (
                                    <AddedGrocery item={item} />
                                ))}
                            </ul>
                            <li>Dairy</li>
                            <ul>
                                {currentDairyListVal.map((item) => (
                                    <AddedGrocery item={item} />
                                ))}
                            </ul>
                        </ul>
                    </Col>

                    <Col>
                        <h4>Protein</h4>
                    </Col>
                </Row>

            </Container>




        </>
    )
}

export default Summary;
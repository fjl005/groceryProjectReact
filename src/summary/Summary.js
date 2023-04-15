import { currentList, currentFruitList, currentVegetableList, currentDairyList, findCurrentSpecificList } from "./summarySlice";
import { useSelector } from "react-redux";
import AddedGrocery from "./AddedGrocery";
import { Container, Row, Col } from "reactstrap";



function Summary() {
    const currentFruitList = useSelector(findCurrentSpecificList('Fruits'));
    const currentVegetableList = useSelector(findCurrentSpecificList('Vegetables'));
    const currentDairyList = useSelector(findCurrentSpecificList('Dairy'));

    const currentLeanMeatList = useSelector(findCurrentSpecificList('Lean Meat'));
    const currentRedMeatList = useSelector(findCurrentSpecificList('Red Meat'));
    const currentVegetarianProteinList = useSelector(findCurrentSpecificList('Vegetarian Protein'));

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: "left"}}>Summary</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 style={{textAlign: "left"}}>Produce</h3>
                        <ul className="ul-summary">
                            <h5>Fruits</h5>
                            <ul>
                                {currentFruitList ?
                                    currentFruitList.map((item, idx) => {
                                        return <AddedGrocery item={item} key={idx} />
                                    }) : null}

                            </ul>
                            <h5>Vegetables</h5>
                            <ul>
                                {currentVegetableList ?
                                    currentVegetableList.map((item, idx) => {
                                        return <AddedGrocery item={item} key={idx} />
                                    }) : null}
                            </ul>
                            <h5>Dairy</h5>
                            <ul>
                                {currentDairyList ?
                                    currentDairyList.map((item, idx) => {
                                        return <AddedGrocery item={item} key={idx} />
                                    }) : null}
                            </ul>
                        </ul>
                    </Col>

                    <Col>
                        <h3 style={{textAlign: "left"}}>Protein</h3>
                        <ul className="ul-summary">
                            <h5>Lean Meat</h5>
                            <ul>
                                {currentLeanMeatList ?
                                    currentLeanMeatList.map((item, idx) => {
                                        return <AddedGrocery item={item} key={idx} />
                                    }) : null}

                            </ul>
                            <h5>Red Meat</h5>
                            <ul>
                                {currentRedMeatList ?
                                    currentRedMeatList.map((item, idx) => {
                                        return <AddedGrocery item={item} key={idx} />
                                    }) : null}
                            </ul>
                            <h5>Vegetarian Protein</h5>
                            <ul>
                                {currentVegetarianProteinList ?
                                    currentVegetarianProteinList.map((item, idx) => {
                                        return <AddedGrocery item={item} key={idx} />
                                    }) : null}
                            </ul>
                        </ul>
                    </Col>
                </Row>

            </Container>




        </>
    )
}

export default Summary;
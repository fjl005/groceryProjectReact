import { currentList, currentFruitList, currentVegetableList, currentDairyList} from "./summarySlice";
import { useSelector } from "react-redux";
import AddedGrocery from "./AddedGrocery";



function Summary() {
    const currentListVal = useSelector(currentList);
    const currentFruitListVal = useSelector(currentFruitList);
    const currentVegetableListVal = useSelector(currentVegetableList);
    const currentDairyListVal = useSelector(currentDairyList);

    return (
        <>
            <h2>Summary</h2>
            <h4>Produce</h4>
            <ul>
                <li>Fruits</li>
                <ul>
                    {currentFruitListVal.map((item) => (
                        <AddedGrocery item={item}/>
                    ))}
                </ul>
                <li>Vegetables</li>
                <ul>
                    {currentVegetableListVal.map((item) => (
                        <AddedGrocery item={item}/>
                    ))}
                </ul>
                <li>Dairy</li>
                <ul>
                    {currentDairyListVal.map((item) => (
                        <AddedGrocery item={item}/>
                    ))}
                </ul>
            </ul>

        </>
    )
}

export default Summary;
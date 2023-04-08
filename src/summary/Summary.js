import { currentList } from "./summarySlice";
import { useDispatch, useSelector } from "react-redux";


function Summary() {
    const currentListVal = useSelector(currentList);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Summary</h2>
            <h4>Produce</h4>
            <ul>
                <li>Fruits</li>
                <ul>
                    <li>{currentListVal}</li>
                </ul>
                <li>Vegetables</li>
                <li>Dairy</li>
            </ul>

        </>
    )
}

export default Summary;
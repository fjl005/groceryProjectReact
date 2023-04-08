import { currentList, findQuantity, findPrice, findGroceryName } from "./summarySlice";
import { useDispatch, useSelector } from "react-redux";

const AddedGrocery = ({item}) => {

  return (
    <li>
        {item.groceryName} (${item.price})
        <ul>
            <li>Quantity: {item.quantity}</li>
        </ul>
    </li>
    
  )
}

export default AddedGrocery
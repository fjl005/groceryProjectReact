import { FormGroup, Col, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateBudgetInput } from '../utils/validateBudgetInput';
import { currentBudget } from '../groceries/groceriesSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBudget } from '../groceries/groceriesSlice';

const BudgetInput = () => {
    const currentBudgetVal = useSelector(currentBudget);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setBudget(e.target.value));
        validateBudgetInput(e.target.value);
    }

    return (
        <Formik
        initialValues={{
            budgetInput: currentBudgetVal
        }}
        validate={validateBudgetInput}>
            <Form>
                <FormGroup row>
                    <Col>
                        {/* <Label name='budgetInput'>
                            Enter Budget: 
                        </Label> */}
                        <Field
                            name='budgetInput'
                            placeholder='Enter Budget (min. $1)'
                            onKeyUp={handleChange}
                            >
                        </Field>
                        <ErrorMessage name='budgetInput'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        <h1>Budget: ${currentBudgetVal}</h1>

                    </Col>

                </FormGroup>

            </Form>
        </Formik>
    )
}

export default BudgetInput
import { FormGroup, Col, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useState} from 'react';
import { validateBudgetInput } from '../utils/validateBudgetInput';

const BudgetInput = ({setBudgetValue, budgetValue}) => {
    const handleChange = (e) => {
        setBudgetValue(e.target.value);
        validateBudgetInput(e.target.value);
    }

    return (
        <Formik
        initialValues={{
            budgetInput: budgetValue
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
                        <h1>Budget: ${budgetValue}</h1>

                    </Col>

                </FormGroup>

            </Form>
        </Formik>
    )
}

export default BudgetInput
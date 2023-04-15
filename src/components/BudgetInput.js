import { Container, Row, Col, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateBudgetInput } from '../utils/validateBudgetInput';
import { currentBudget } from '../groceries/groceriesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setBudget } from '../groceries/groceriesSlice';
import { useState } from 'react';

const BudgetInput = () => {
    const currentBudgetVal = useSelector(currentBudget);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        dispatch(setBudget(e.target.value));
        validateBudgetInput(e.target.value);
    }

    return (
        <div className='header'>

        
        <Container className='container-fluid'>
            <Row>
                <Col className='header'>
                    <Label htmlFor='budgetInput'>Enter Budget (Minimum $1)</Label>

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
                                        id='budgetInput'
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
                </Col>
            </Row>

        </Container>
        </div>

    )
}

export default BudgetInput;
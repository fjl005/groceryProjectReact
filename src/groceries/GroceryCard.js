import React, { useState } from 'react';
import {
    Card, CardTitle, CardBody, CardImg, CardText, Button,
    Modal, ModalHeader, ModalBody, FormGroup, Label
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import AddButton from './AddButton';
import { addGrocery } from './groceriesSlice';
import { useDispatch } from 'react-redux';

const GroceryCard = ({ cardImage, category }) => {
    const { image, name, items } = cardImage;
    const [newGroceryModal, setNewGroceryModal] = useState(false);
    const [updateGroceryModal, setUpdateGroceryModal] = useState(false);
    const [modifyGroceryModal, setModifyGroceryModal] = useState(false);
    const dispatch = useDispatch();


    const addNewGrocery = (values) => {
        const newGrocery = {
            name: values.newGroceryName,
            price: values.newGroceryPrice,
            // I should change the variable from the PRODUCE file, from name to groceryType.
            groceryType: name,
            category: category
        }

        dispatch(addGrocery(newGrocery));
        setNewGroceryModal(false);

    }

    const updateGrocery = (values) => {

    }

    return (
        <>
            <Card>
                <CardImg src={image} alt='idk yet' />
                <CardBody>
                    <CardTitle>
                        <h3>{name}</h3>
                    </CardTitle>
                    <CardText>
                        <ul>
                            {items.map((item, ind) => (
                                <li key={ind}>
                                    <div className='d-flex justify-content-between'>
                                        <span>{`${item.name} ($${item.price})`} </span>
                                        <AddButton
                                            price={item.price}
                                            itemName={item.name}
                                            groceryType={name}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button onClick={() => setNewGroceryModal(true)}
                                style={{ color: 'white', border: '1px solid white' }}
                            >
                                New </Button>
                            <Button>Update</Button>
                            <Button>Delete</Button>
                        </div>



                    </CardText>
                </CardBody>
            </Card>

            <Modal isOpen={newGroceryModal}>
                <ModalHeader toggle={() => setNewGroceryModal(false)}>
                    Add New Grocery
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={
                        {
                            newGroceryName: '',
                            newGroceryPrice: '',
                        }}
                        onSubmit={addNewGrocery}
                    // validate={}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='newGroceryName'>
                                    New Grocery Name
                                </Label>
                                <Field id='newGroceryName' name='newGroceryName' placeholder='Grocery' className='form-control' />
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='newGroceryPrice'>
                                    Price
                                </Label>
                                <Field id='newGroceryPrice' name='newGroceryPrice' placeholder='$$' className='form-control' />
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <Button type='submit' color='primary'>
                                Add
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>

            <Modal isOpen={updateGroceryModal}>
                <ModalHeader toggle={() => setUpdateGroceryModal(false)}>
                    Update Existing Grocery
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={
                        {
                            selectedGroceryName: '',
                            updatedGroceryPrice: ''
                        }}
                        onSubmit={updateGrocery}
                    // validate={}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='newGroceryName'>
                                    New Grocery Name
                                </Label>
                                <Field id='newGroceryName' name='newGroceryName' placeholder='Grocery' className='form-control' />
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='newGroceryPrice'>
                                    Price
                                </Label>
                                <Field id='newGroceryPrice' name='newGroceryPrice' placeholder='$$' className='form-control' />
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <Button type='submit' color='primary'>
                                Add
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default GroceryCard
import React, { useState } from 'react';
import {
    Card, CardTitle, CardBody, CardImg, CardText, Button,
    Modal, ModalHeader, ModalBody, FormGroup, Label
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import AddButton from './AddButton';
import { addGroceryReducer, findCategory, findGroceryType, updateGroceryReducer, deleteGroceryReducer } from './groceriesSlice';
import { useDispatch, useSelector } from 'react-redux';

const GroceryCard = ({ cardImage, category }) => {
    const { image, groceryType, items } = cardImage;

    const [newGroceryModal, setNewGroceryModal] = useState(false);
    const [updateGroceryModal, setUpdateGroceryModal] = useState(false);
    const [deleteGroceryModal, setDeleteGroceryModal] = useState(false);

    const categoryObject = useSelector(findCategory(category));
    const groceryTypeObject = useSelector(findGroceryType(categoryObject, groceryType));

    const dispatch = useDispatch();


    const addNewGrocery = (values) => {
        const newGrocery = {
            name: values.newGroceryName,
            price: values.newGroceryPrice,
            // I should change the variable from the PRODUCE file, from name to groceryType.
            groceryType: groceryType,
            category: category
        }

        dispatch(addGroceryReducer(newGrocery));
        setNewGroceryModal(false);

    }

    const updateGrocery = (values) => {
        const updatedGrocery = {
            name: values.updatedGroceryName,
            price: values.updatedGroceryPrice,
            groceryType: groceryType,
            category: category
        }

        dispatch(updateGroceryReducer(updatedGrocery));
        setUpdateGroceryModal(false);
    }

    const deleteGrocery = (values) => {
        const deletedGrocery = {
            name: values.updatedGroceryName,
            groceryType: groceryType,
            category: category
        }

        dispatch(deleteGroceryReducer(deletedGrocery));
        setDeleteGroceryModal(false);
    }

    return (
        <>
            <Card>
                <CardImg src={image} alt='idk yet' />
                <CardBody>
                    <CardTitle>
                        <h3>{groceryType}</h3>
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
                                            groceryType={groceryType}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button onClick={() => setNewGroceryModal(true)}
                                style={{ color: 'white', border: '1px solid white' }}>
                                New </Button>
                            <Button onClick={() => setUpdateGroceryModal(true)}
                                style={{ color: 'white', border: '1px solid white' }}>
                                Update</Button>
                            
                            <Button onClick={() => setDeleteGroceryModal(true)}
                                style={{ color: 'white', border: '1px solid white' }}>
                                Delete</Button>
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
                                <Field id='newGroceryName' 
                                    name='newGroceryName' 
                                    placeholder='Grocery' 
                                    className='form-control' />
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='newGroceryPrice'>
                                    Price
                                </Label>
                                <Field 
                                    id='newGroceryPrice' 
                                    name='newGroceryPrice' 
                                    placeholder='$$' 
                                    className='form-control' />
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
                            updatedGroceryName: '',
                            updatedGroceryPrice: ''
                        }}
                        onSubmit={updateGrocery}
                    // validate={}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='updatedGroceryName'>
                                    Select Current Grocery
                                </Label>

                                <Field 
                                    name='updatedGroceryName'
                                    as='select'
                                    className='form-control'>
                                    <option>Select...</option>

                                    {/* Trying to make the first option default */}
                                    {groceryTypeObject.items.map((grocery, idx) => {
                                        if (idx === 0) {
                                            return <option default key={idx}>{grocery.name}</option>
                                        } else {
                                            return <option key={idx}>{grocery.name}</option>
                                        }
                                        
                                    })}

                                </Field>
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='updatedGroceryPrice'>
                                    Updated Price
                                </Label>
                                <Field 
                                    id='updatedGroceryPrice' 
                                    name='updatedGroceryPrice' 
                                    placeholder='$$' 
                                    className='form-control' />
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <Button type='submit' color='primary'>
                                Update
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>

            <Modal isOpen={deleteGroceryModal}>
                <ModalHeader toggle={() => setDeleteGroceryModal(false)}>
                    Update Existing Grocery
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={
                        {
                            deletedGroceryName: ''
                        }}
                        onSubmit={deleteGrocery}
                    // validate={}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='deleteGroceryName'>
                                    Select Grocery to Delete
                                </Label>

                                <Field 
                                    name='deletedGroceryName'
                                    as='select'
                                    className='form-control'>
                                    <option>Select...</option>

                                    {/* Trying to make the first option default */}
                                    {groceryTypeObject.items.map((grocery, idx) => {
                                        if (idx === 0) {
                                            return <option default key={idx}>{grocery.name}</option>
                                        } else {
                                            return <option key={idx}>{grocery.name}</option>
                                        }
                                        
                                    })}

                                </Field>
                                {/* <ErrorMessage name='newGroceryName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage> */}
                            </FormGroup>

                            <Button type='submit' color='primary'>
                                Delete
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default GroceryCard;
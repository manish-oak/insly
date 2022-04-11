import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import './style.css';

const UserForm = ({initialData = {}, ...props}) => {
    const [data, setData] = useState(initialData);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({id: data.id ? data.id : Math.floor(Math.random()*90000) + 10000, ...data});
    }

    const handleChange = (e) => {
        const { value, id } = e.target;
        setData({
            ...data,
            [id]: value
        })
    }

    return(
        <Form className="user-form__container" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={data.firstName} type="text" placeholder="Enter First Name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={data.lastName} type="text" placeholder="Enter Last Name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={data.email} type="email" placeholder="Enter Email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={data.address} type="text" placeholder="Enter Address"  required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={(value) => setData({
                        ...data,
                        country: value
                    })}
                    options={props.countries}
                    placeholder="Choose a country..."
                    selected={data.country || []}
                />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="primary" type="submit" onClick={props.handleClose}>
                Cancel
            </Button>
        </Form>
    )
}

export default UserForm;
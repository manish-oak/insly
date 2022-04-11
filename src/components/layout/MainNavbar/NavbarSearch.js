import React from "react";
import {
  Form,
  InputGroup
} from "react-bootstrap";

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <InputGroup type="prepend">
        <InputGroup.Text>
          <i className="material-icons">search</i>
        </InputGroup.Text>
      </InputGroup>
      <Form.Control
        type="text"
        placeholder="Search for something..."
        aria-label="Disabled input example"
      />
      {/* <FormInput
        className="navbar-search"
        placeholder="Search for something..."
      /> */}
    </InputGroup>
  </Form>
);

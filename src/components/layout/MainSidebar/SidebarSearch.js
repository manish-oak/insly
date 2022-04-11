import React from "react";
import {
  Form,
  InputGroup
} from "react-bootstrap";

export default () => (
  <Form className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none" style={{ display: "flex", minHeight: "45px" }}>
    <InputGroup seamless className="ml-3">
      <InputGroup type="prepend">
        <InputGroup.Text>
          <i className="material-icons">search</i>
        </InputGroup.Text>
        <Form.Control
          className="navbar-search"
          placeholder="Search for something..."
          aria-label="Search"
        />
      </InputGroup>
    </InputGroup>
  </Form>
);

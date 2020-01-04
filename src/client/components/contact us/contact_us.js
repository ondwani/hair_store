import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Contact_us = () => {
  const [contact, setContact] = useState(null);
  const handlechange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  //   const sendMessage=()=>(
  //       <Redirect to="/" />
  //   )
  return (
    <div>
      <div className="split right">
        <div className="split contactleft"></div>
        <div className="centered contactus">
          <h3>Send us a Message</h3>
          <Form>
            <h5 align="left">TELL US YOUR NAME*</h5>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Input type="text" name="fname" placeholder="First name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input type="text" name="lname" placeholder="Last name" />
                </FormGroup>
              </Col>
            </Row>
            <h5 align="left">ENTER YOUR EMAIL*</h5>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Eg. example@email.com"
              />
            </FormGroup>
            <h5 align="left">ENTER PHONE NUMBER*</h5>
            <FormGroup>
              <Input
                type="number"
                name="phoneNumber"
                placeholder="Eg. +254721000000"
              />
            </FormGroup>
            <h5 align="left">MESSAGE*</h5>
            <FormGroup>
              <Col md={15}>
                <Input
                  type="textarea"
                  name="text"
                  placeholder="Write us a message"
                />
              </Col>
            </FormGroup>
            <Link to="/">
              <Button style={{ width: "40%" }} >
                Send Message
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;

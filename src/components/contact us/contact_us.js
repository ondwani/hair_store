import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Input } from "reactstrap";

const Contact_us = () => {
  const [contact, setContact] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState(null);
  const handlechange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const onSubmit = () => {
    axios
      .post("/api/contact", contact)
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => console.error(err));
  };
  //   const sendMessage=()=>(
  //       <Redirect to="/" />
  //   )
  console.log(contact)
  return (
    <div>
      <div className="split right">
        <div className="split contactleft">
          <h5>Address</h5>
          <h6>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</h6>
          <h5>Let's talk</h5>
          <h6>+254727000000</h6>
          <h5>General Support</h5>
          <h6>contact@example.com</h6>
        </div>
        <div className="centered contactus">
          <h3>Send us a Message</h3>
          <Form>
            <h5 align="left">TELL US YOUR NAME*</h5>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Input type="text" name="fname" placeholder="First name" 
                  onChange={handlechange}/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input type="text" name="lname" 
                  onChange={handlechange}placeholder="Last name" />
                </FormGroup>
              </Col>
            </Row>
            <h5 align="left">ENTER YOUR EMAIL*</h5>
            <FormGroup>
              <Input
                type="email"
                name="email"
                onChange={handlechange}
                placeholder="Eg. example@email.com"
              />
            </FormGroup>
            <h5 align="left">ENTER PHONE NUMBER*</h5>
            <FormGroup>
              <Input
                type="number"
                name="phoneNumber"
                onChange={handlechange}
                placeholder="Eg. +254721000000"
              />
            </FormGroup>
            <h5 align="left">MESSAGE*</h5>
            <FormGroup>
              <Col md={15}>
                <Input
                  type="textarea"
                  name="text"
                  onChange={handlechange}
                  placeholder="Write us a message"
                />
              </Col>
            </FormGroup>
            <Link to="/">
              <Button onClick={onSubmit} style={{ width: "40%" }}>Send Message</Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;

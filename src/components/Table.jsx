import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function BasicExample({ data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Job No</th>
          <th>Job Name</th>
          <th>Job Description</th>
          <th>Click For Apply</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.job_name}</td>
            <td>{item.job_description}</td>
            <button variant="primary" onClick={handleShow}>
              Apply
            </button>

            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton className="mx-auto ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Name" />
                  <Form.Control type="decimal" placeholder="Enter Your CGPA" />
                  <Form.Control type="text" placeholder="Enter Your Skills" />
                  <Form.Control type="number" placeholder="Enter Your Age" />
                  <Form.Control type="number" placeholder="Enter Your Year Of Exprience" />
                </Form.Group>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;

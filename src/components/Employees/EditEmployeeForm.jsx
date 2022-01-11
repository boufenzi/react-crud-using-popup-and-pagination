import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../../contexts/Employeecontext";

const EditEmployeeForm = ({ handleClose, employee }) => {
  const { updateEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState(employee.name);
  const [address, setAddress] = useState(employee.address);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);

  const id = employee.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(employee.id, { id, name, email, address, phone });
    handleClose();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" rows={3}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            name="address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            name="phone"
          />
          <Form.Text className="text-muted">**.**.**.**.**</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit
        </Button>
        <Button onClick={handleClose} className="m-2 btn-danger">
          Cancel
        </Button>
      </Form>
    </>
  );
};

export default EditEmployeeForm;

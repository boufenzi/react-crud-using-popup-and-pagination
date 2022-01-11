import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../../contexts/Employeecontext";

const AddEmployeeForm = ({ handleClose, handleShowAlert }) => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  // permet de binder tout les champs avec l'attribut name et la valeur du champ value
  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const { name, email, phone, address } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, phone, address);
    handleClose();
    handleShowAlert();
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
            name="name"
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" rows={3}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter address"
            value={address}
            name="address"
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={(e) => onInputChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter phone number"
            value={phone}
            name="phone"
            onChange={(e) => onInputChange(e)}
          />
          <Form.Text className="text-muted">**.**.**.**.**</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={handleClose} className="m-2 btn-danger">
          Cancel
        </Button>
      </Form>
    </>
  );
};

export default AddEmployeeForm;

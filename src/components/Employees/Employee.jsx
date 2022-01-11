import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../contexts/Employeecontext";
import { Modal } from "react-bootstrap";
import EditEmployeeForm from "./EditEmployeeForm";
const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button
          className="btn text-warning btn-act"
          data-toggle="modal"
          onClick={handleShow}
        >
          <i className="material-icons">edit</i>
        </button>
        <button
          className="btn text-danger btn-act"
          data-toggle="modal"
          onClick={() => deleteEmployee(employee.id)}
        >
          <i className="material-icons">delete</i>
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditEmployeeForm handleClose={handleClose} employee={employee} />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Employee;

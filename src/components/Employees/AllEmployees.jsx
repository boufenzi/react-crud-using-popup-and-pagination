import Employee from "./Employee";
import { useContext, useState } from "react";
import { EmployeeContext } from "../../contexts/Employeecontext";
import AddEmployeeForm from "./AddEmployeeForm";
import { Modal, Alert } from "react-bootstrap";
import Pagination from "../Pagination";
const AllEmployees = () => {
  const { employees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [employeePerPage] = useState(3);
  const indexOfLastEmployee = currentPage * employeePerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(employees.length / employeePerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-success"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </button>
          </div>
        </div>
      </div>
      <Alert
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
        show={showAlert}
      >
        the add was successful
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        nbrPerPage={currentEmployees.length}
        totalNbr={employees.length}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddEmployeeForm
            handleClose={handleClose}
            handleShowAlert={handleShowAlert}
          />
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

export default AllEmployees;

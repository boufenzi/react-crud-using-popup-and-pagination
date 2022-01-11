import { createContext, useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees().then((res) => {
      console.log(res.data);
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = (name, email, phone, address) => {
    EmployeeService.saveEmploye({ id: "", name, email, phone, address });
    setEmployees([...employees, { id: "", name, email, phone, address }]);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployeeById(id);
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // first we are mapping all employee then we select the employee qui a le id à modifier et on le modifie avec l'objet modifié sinon on retourne le meme employe
  const updateEmployee = (id, updatedEmployee) => {
    EmployeeService.updateEmploye(updatedEmployee);
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;

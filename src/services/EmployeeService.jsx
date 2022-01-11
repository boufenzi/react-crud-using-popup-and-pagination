import axios from "axios";
import ENVIRONMENT from "./Environment";

class EmployeeService {
  getAllEmployees() {
    return axios.get(ENVIRONMENT + "getAllEmployees");
  }
  saveEmploye(employee) {
    return axios.post(ENVIRONMENT + "createEmploye", employee);
  }
  updateEmploye(employee) {
    return axios.put(ENVIRONMENT + "updateEmployee", employee);
  }
  GetEmployeById(id) {
    return axios.get(ENVIRONMENT + "getEmployeeById/" + id);
  }

  deleteEmployeeById(id) {
    return axios.delete(ENVIRONMENT + "deleteEmployeeById/" + id);
  }
}

export default new EmployeeService();

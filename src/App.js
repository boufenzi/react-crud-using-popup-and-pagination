import "./App.css";
import AllEmployees from "./components/Employees/AllEmployees";
import EmployeeContextProvider from "./contexts/Employeecontext";
function App() {
  return (
    <div className="container-x1">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <AllEmployees />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

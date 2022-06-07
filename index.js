// Write your solution in this file!
const employee = {
    name: "Temba",
    streetAddress: "Kariobangi South",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // here we return { ...employee, ...{ [key]: value } }
    return Object.assign({}, employee, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
  
    // we create a const newObj = { the employee}
    const newObj = Object.assign({}, employee);
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }

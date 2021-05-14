const employee = {
    name: 'Tenzing',
    streetAddress: '54 Amsterdam Ave'
};
employee.name;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = { ...employee };
    newemployee[key] = value;
    return newemployee;
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
updatedEmployee.name;


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
employee.name = "Sam";
employee.streetAddress = "11 Broadway";
employee;

function deleteFromEmployeeByKey(employee, key) {
    const anotherEmployee = Object.assign({}, employee);
    delete anotherEmployee.name;
    return anotherEmployee;
}
const deleteEmployee = deleteFromEmployeeByKey(anotherEmployee);
deleteEmployee;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
const employeeDelete = destructivelyDeleteFromEmployeeByKey(employee);
employeeDelete;
const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];
function displayEmployees(){
    const totalEmployees = employees
    .map(function(employee){
        return `<p>${employee.id}:${employee.name}- ${employee.department} - ${employee.salary}</p>`
    })
    .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
function calculateTotalSalaries(){
    const totalsalaries = employees
    .reduce((totalsalary,employee) =>  totalsalary + employee.salary, 0)
    alert(`The total salary is : ${totalsalaries}`);
}
function displayHREmployees(depOfEmployee) {
     const hrEmployees = employees.filter(employee => employee.department === depOfEmployee);
     const hrEmployeesDisplay = hrEmployees
        .map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

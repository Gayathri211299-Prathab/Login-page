import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-outer',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './employee-outer.component.html',
  styleUrls: ['./employee-outer.component.css']
})
export class EmployeeOuterComponent {
  
  updateemployee: number = 0;

  employeeObj: any = {
    EmployeeName: '',
    EmployeeID: '',
    EmployeeidNumber: 0 // Ensure this matches the primary key from the API
  };

  employeeList: any[] = [];

  constructor(private http: HttpClient) {
    this.getEmployees();
  }

  // Add Employee
  addEmployee() {
    if (this.employeeObj.EmployeeName && this.employeeObj.EmployeeID) {
      this.http.post("https://retoolapi.dev/EGgO0Q/employeeDetails", this.employeeObj)
        .subscribe((res: any) => {
          if (res) {
            alert("Employee details added successfully");
            this.getEmployees();
            this.resetForm();
          }
        });
    } else {
      alert("Please fill out all fields");
    }
  }

  
  // Fetch Employees
  getEmployees() {
    this.http.get("https://retoolapi.dev/EGgO0Q/employeeDetails")
      .subscribe((res: any) => {
        this.employeeList = res;
      });
  }

  // Edit Employee
  onEdit(employee: any) {
    this.employeeObj = { ...employee }; // Copy the selected employee details
    this.updateemployee = 1;           // Switch mode to "Update"
  }
  // Update Employee
onUpdate() {
  if (this.employeeObj.EmployeeID) { // Ensure EmployeeID is provided
    // Fetch the list of employees to find the one to update
    this.http.get<any[]>("https://retoolapi.dev/EGgO0Q/employeeDetails")
      .subscribe((employees: any[]) => {
        const employeeToUpdate = employees.find(emp => emp.EmployeeID === this.employeeObj.EmployeeID );

        if (employeeToUpdate) {
          
          // Use the unique identifier from the API (e.g., 'id') to perform the update
          const url = `https://retoolapi.dev/EGgO0Q/employeeDetails/${employeeToUpdate.id}`;
          this.http.put(url, this.employeeObj)
            .subscribe((res: any) => {
              if (res) {
                alert("Employee details updated successfully");
                this.getEmployees(); // Refresh the employee list
                this.resetForm();    // Reset the form
              }
            });
        } else {
          alert("Employee not found with the given EmployeeID");
        }
      });
  } else {
    alert("Please provide a valid EmployeeID");
  }
}
//delete the employee

onDelete(employeeID: string) {
  // Fetch the employee list and find the employee by EmployeeID
  this.http.get<any[]>("https://retoolapi.dev/EGgO0Q/employeeDetails")
    .subscribe((employees: any[]) => {
      const employeeToDelete = employees.find(emp => emp.EmployeeID === employeeID);

      if (employeeToDelete) {
        // Use the unique identifier from the API to delete
        const url = `https://retoolapi.dev/EGgO0Q/employeeDetails/${employeeToDelete.id}`;
        this.http.delete(url)
          .subscribe((res: any) => {
            alert("Employee deleted successfully");
            this.getEmployees(); // Refresh the list
          });
      } else {
        alert("Employee not found with the given EmployeeID");
      }
    });
}


  // Reset Form
  resetForm() {
    this.employeeObj = { EmployeeName: '', EmployeeID: '', EmployeeidNumber: 0 }; // Clear input fields
    this.updateemployee = 0; // Reset to "Add" mode
  }
}

import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.employeeService.form.controls; 

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    if(this.employeeService.form.valid) {
    if(this.employeeService.form.get('$key').value == null)
      this.employeeService.insertEmployee(this.employeeService.form.value);
    else
        this.employeeService.updateEmployee(this.employeeService.form.value)
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000)
    this.submitted = false;
    this.employeeService.form.reset();
    }
    
    
  }
}

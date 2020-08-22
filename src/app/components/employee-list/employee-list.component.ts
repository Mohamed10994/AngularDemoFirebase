import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  employeeArray = [];
  showDeletedMessage: boolean;
  searchText: string= "";


  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe( list => {
      this.employeeArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        }
      })
    });
  }
  onDelete($key){
    if (confirm('Are you sure to delete this employee ?')){
      this.employeeService.deleteEmployee($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000)
    }
  }

  filterCondition(employee){
    return employee.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}

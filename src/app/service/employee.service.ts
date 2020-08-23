import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  constructor(public fireBase: AngularFireDatabase) { }
  employeeList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl(''),

  });

  getEmployees(){
    this.employeeList = this.fireBase.list('employees')
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee){
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      location: employee.location,
    });
  }
  editForm(employee) {
    this.form.setValue(employee);
  }
  updateEmployee(employee){
    this.employeeList.update(employee.$key, 
      {
        fullName: employee.fullName,
        email: employee.email,
        mobile: employee.mobile,
        location: employee.location
      });
  }
  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }


}

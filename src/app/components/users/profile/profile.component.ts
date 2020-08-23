import { EmployeeService } from './../../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public storge: AngularFireStorage) { }

  ngOnInit(): void {
  }



}

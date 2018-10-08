import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UsersService } from "../../../services/users.service";
import { Router } from "@angular/router";
// import {NgbModal} from "./modal";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apptable',
  templateUrl: './apptable.component.html',
  styleUrls: ['./apptable.component.css']
})
export class ApptableComponent implements OnInit {

  editDisplay='none';
  
  angularForm:FormGroup;
  editForm:FormGroup;

  user:any;
  users:any;

  constructor(private usersData:UsersService, private fb: FormBuilder, private router:Router) {

    this.usersData.getAllUsers().subscribe(data=>{
      this.users=data;
      console.log(data);
    });

    this.angularForm = this.fb.group({
      id:[],
      name:new FormControl(),
      age:new FormControl(),
      phoneNumber:new FormControl()
    });

    this.editForm = this.fb.group({
      id:[],
      name:new FormControl(),
      age:new FormControl(),
      phoneNumber:new FormControl()
    });

   }

  ngOnInit() {
    this.usersData.getAllUsers().subscribe(data=>{
      this.users=data;
      console.log(data);
    });
  }

  editUser(user:any){
    this.editDisplay='block';
    this.usersData.getUserById(user.id).subscribe(data=>{
      this.editForm.setValue(data);});
    // this.editForm.setValue(this.user);
    this.router.navigateByUrl('/');
  }

  updateUser(){
    this.usersData.updateUser(this.editForm.value).subscribe(data=>this.users=data);
    this.editDisplay='block';
    this.router.navigateByUrl('/');
  }

   addUser() {
     this.user=this.angularForm.value;
     this.usersData.addUser(this.user).subscribe(data=>this.users=data);
    this.closeEdit();
    //  this.router.navigateByUrl('/');
  }

  deleteUser(user:any){
    console.log(user);
    this.usersData.deleteUser(user.id).subscribe(data=>this.users=data);
    this.router.navigateByUrl('/');
  }

  closeEdit(){
    this.editDisplay='none';
  }

}

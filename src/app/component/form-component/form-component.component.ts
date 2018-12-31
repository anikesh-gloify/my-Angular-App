import { Component, OnInit } from '@angular/core';
/*importing form-group and form control to make reactive from*/
import {FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent implements OnInit {

  user:User = {
    firstName: '',
    lastName: '',
    age: null,
    gender:''
  }
  users:User[];

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.users = [
      {
        firstName: '',
        lastName: '',
        age: null,
        gender:''
      },
    ];
  }

  onSubmit(event){
    event.preventDefault();
  }

  addUser(){
    console.log(this.user);
    this.users.push(this.user);

    this.user ={
      firstName: '',
      lastName: '',
      age: null,
      gender:''
    }
  }


  clearAll(){
    alert("hello");
    $("#myTable td").empty();
  }
}

interface User{
  firstName:string,
  lastName:string,
  age: number,
  gender:string
}


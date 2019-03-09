import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;

  constructor( private fb : FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({

      name : ['', Validators.required],
      age : ['', Validators.required],
      location : ['', Validators.required],
      uname : ['', Validators.required,],
       pass : ['', Validators.required]

    })
  }

  onSubmit() : void{
    console.log(this.registerForm);

    if(this.registerForm.valid){

    }
    else{
      
    }

  }

}

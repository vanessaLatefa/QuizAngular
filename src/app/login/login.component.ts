import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor( private fb : FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group(
      {
        username : ['', [Validators.required, Validators.minLength(3)]],
        password : ['', Validators.required]
      }
    )

  }

  onSubmit() : void{
    console.log(this.loginForm);
    if(this.loginForm.valid){
      //send data
    }
    else{
      //show error
    }

  }

}

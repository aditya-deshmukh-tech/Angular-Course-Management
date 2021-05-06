import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SpaceValodators } from '../space.validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;
  loadButton = false;
  constructor(private router: Router, private forms: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = this.forms.group({
      email:['', [Validators.required,Validators.minLength(2),SpaceValodators.canNotContainSpace]],
      password:['', [Validators.required,Validators.minLength(2),SpaceValodators.canNotContainSpace]]
    });
  }

  signup(){
    this.loadButton = true;
    const data = this.form.value;
    this.authService.signup(data.email, data.password)
      .then(
        responce =>{
          alert("user created succesfully");
          this.router.navigate(['/home']);
        },
        error => console.log(error)
      );
    }

    

}

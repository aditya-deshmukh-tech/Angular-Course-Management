import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 errorMes;
  constructor(private route: Router, private authService: AuthService) { }

  loadButton = false;
  ngOnInit() {
      this.authService.State
      .subscribe(user =>{
        if(user){
          this.route.navigate(['/courses']);
        }
      },
      error => console.log(error)
      );
  }


  login(form){
    this.loadButton = true;
    this.errorMes=null;
    const data = form.value;
    this.authService.login(data.email,data.pswd)
      .then(responce => {
        this.route.navigate(['/home']);
      },
      error => this.errorMes = error.message
      );
  }

  

}

import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { slideInAnimation } from './app.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit{
  

  isLogin;
  title = 'ACM';
  
  constructor(private router: Router){

  }

  ngOnInit(){
    this.checkLogin();
  }

  
  

  checkLogin(){
   this.router.events.subscribe(
     event => {
      if(event instanceof NavigationEnd){
        if(event.url === '/login' || event.url === '/' || event.url === '/signup'){
          this.isLogin=true;
        }else{
          this.isLogin=false;
        }
      }
     }
   );
  }

  
}

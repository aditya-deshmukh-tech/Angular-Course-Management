import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    
  }

  logout(){
    this.authService.logout()
      .then(
        responce => {
          alert("continue log out");
          this.route.navigate(['/login']);
        },
        error => alert("error")
      );
  }

}

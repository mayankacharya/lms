import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms';

  username : any ="";
password : any ="";
show: boolean= false;
constructor(private router: Router) { }


submit(){
  console.log("user name is " + this.username)
  this.clear();
  this.router.navigateByUrl('/userdashboard');
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
}

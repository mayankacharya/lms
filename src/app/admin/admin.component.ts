import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username : any ="";
password : any ="";
show: boolean= false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
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

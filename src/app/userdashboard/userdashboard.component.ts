import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {NgForm} from '@angular/forms';



export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: any;
  RequestDate:any;
  RequestedUser: any
  LMSStatus:any
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '1233', weight: 'mayank', symbol: 'Hlearning', RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 2, name: '234', weight: 'mayagh', symbol: 'learning', RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 3, name: '234', weight: 'jndwjq', symbol: 'learning', RequestDate:'02-02-2020' , RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 4, name: '2354', weight: 'nfjenw', symbol: 'learniong',RequestDate:'02-02-2020' , RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 5, name: '55', weight: 'jdkewjd', symbol: 'Blfkckdj', RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 6, name: '667', weight: 'hjjkhd', symbol: 'Clearning', RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 7, name: '7889', weight: 'ejdie', symbol: 'learning plan', RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 8, name: '5677', weight: 'ndjkenwmd', symbol: 'plan',RequestDate:'02-02-2020'  , RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 9, name: '45', weight: 'ndjn', symbol: 'plan' , RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
  {position: 10, name: '667', weight: 'fnjhjfc', symbol: 'learning paln', RequestDate:'02-02-2020', RequestedUser:'nagargan', LMSStatus:'Enrolled'},
];



@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})





export class UserdashboardComponent implements OnInit {

  search : String ="";

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'RequestDate','RequestedUser','LMSStatus'  ];
  dataSource = ELEMENT_DATA;


  constructor(private api: ApiService) {
    api.get_data().subscribe((data)=>{
      console.log("show_data", data);

    })
   }




  ngOnInit(): void {

  }

}

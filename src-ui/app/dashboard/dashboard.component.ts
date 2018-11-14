import { Component, OnInit } from '@angular/core';
import { CommonService } from "../CommonService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  RepData;
  constructor(private commonService:CommonService) { }
  ngOnInit() {
    this.commonService.getAllCustomers().subscribe(data => { 
      this.RepData = data.length ;
      debugger;
    })
    
    //var x=this.commonService.getUser() ;
   // debugger;
  }

}

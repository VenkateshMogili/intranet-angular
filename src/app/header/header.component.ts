import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthserviceService) {
    service.getAPI('getEmployees').subscribe
    ((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    });
   }

  ngOnInit() {
  }

}

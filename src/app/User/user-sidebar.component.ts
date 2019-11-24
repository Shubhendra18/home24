import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styles: []
})
export class UserSidebarComponent implements OnInit {


  constructor(private service:ApihandlerService) { }
 
  ngOnInit() {
    
  }

}

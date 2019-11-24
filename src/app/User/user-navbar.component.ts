import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  pic=true;

  constructor() { }

  ngOnInit() {
  }
  getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).join('');
  }

}

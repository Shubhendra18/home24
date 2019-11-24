import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  //fullName="Amit Singh";
  pic=false;

  constructor() { }

  ngOnInit() {
  }
  getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).join('');
  }
}

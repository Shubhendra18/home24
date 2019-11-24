import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApihandlerService } from '../apihandler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['../../assets/css/loginpage.css', '../../assets/css/bootstrap.min.3.37.css']

})
export class AdminloginComponent implements OnInit {

  constructor(private service: ApihandlerService, private router: Router) { }

  ngOnInit() {
  }
  login(loginData) {
    this.service.UserLogin(loginData.value).subscribe((data: any) => {
      localStorage.setItem('Token', data.userId);
      this.router.navigate(['/dashboard']);
    }, (err: HttpErrorResponse) => {
      if (err.status === 400) {
        Swal.fire({
          icon: 'warning',
          title: err.error.message,
          text: "Warning",
        })
      };
    });
  }
}
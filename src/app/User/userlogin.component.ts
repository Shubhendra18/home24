import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['../../assets/css/loginpage.css', '../../assets/css/bootstrap.min.3.37.css']
})
export class UserloginComponent implements OnInit {
  defaultgroup = "0";
  defaultname = "0";
  groupData: any = [];
  users: any = [];
  constructor(private service: ApihandlerService, private toaster: ToastrService, private router: Router) { }

  ngOnInit() {
    this.service.GroupMaster().subscribe(k => {
      this.groupData = k;
    });
  }
  onSelect(value) {
    this.service.GetUserBygroup(value).subscribe(k => {
      this.users = k;
    });
  }
  login(loginData) {
    this.service.UserLogin(loginData.value).subscribe((data: any) => {
      localStorage.setItem('userToken', data.userId);
      this.router.navigate(['/inbox']);
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

import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styles: []
})
export class ManageUserComponent implements OnInit {
  groupData: any = [];
  defaultgroup = "0";
  values = '';
  alreadytaken: boolean = false;
  constructor(private service: ApihandlerService, private toaster: ToastrService) { }

  ngOnInit() {
    this.service.GroupMaster().subscribe(k => {
      this.groupData = k;
    });
  }
  onChange(event: any) {
    this.values = event.target.value;
    this.service.chkName(this.values).subscribe((data: any) => {
      this.alreadytaken = false;
    }, (err: HttpErrorResponse) => {
      if (err.status === 400) {
        this.alreadytaken = true;
      };
    });
    console.log(this.values);
  }
  addNewUser(addUser) {
    this.service.AddUser(addUser.value).subscribe((data: any) => {
      this.toaster.success('User Added successfully!', 'Success');
    }, (err: HttpErrorResponse) => {
      if (err.status === 400) {
        this.toaster.error('Something went wrong', 'Error');
      };
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styles: []
})
export class ComposeComponent implements OnInit {
  defaultgroup = "0";
  defaultname = "0";
  groupData: any = [];
  public users: any = [];
  Sid = localStorage.getItem("Token");
  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private service: ApihandlerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.GroupMaster().subscribe(k => {
      this.groupData = k;
    });


    this.dropdownSettings = {
      singleSelection: false,
      data: 'dropdownList',
      idField: 'userId',
      textField: 'userName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video']                         // link and image, video
    ]
  };
  onSelect(value) {
    this.service.GetUserBygroup(value).subscribe(k => {
      //this.users = k;
      this.dropdownList = k;
    });
  }
  MailSend(mailBox) {
    console.log(mailBox.value);
    this.service.composemail(mailBox.value).subscribe((data: any) => {
      this.toastr.success('Mail Sent!', 'Success');
    }, (err: HttpErrorResponse) => {
      if (err.status === 400) {
        this.toastr.error('Something went wrong', 'Error');
      };
    });

  }
}

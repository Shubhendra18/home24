import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styles: []
})
export class UserDashboardComponent implements OnInit {
  private allmails: any = [];
  SelectedIDs: any = [];
  i: number = 0;
  allmailtotrash: boolean = false;
  Rid = localStorage.getItem("userToken");

  constructor(private service: ApihandlerService, private toastr: ToastrService) { }
  getShortName(fullName) {
    return fullName.split(' ').map(n => n[0]).join('');
  }
  ngOnInit() {
    this.service.getmail(this.Rid).subscribe(k => {
      this.allmails = k;
    });
  }

  onChange(event, i, k) {
    k.checked = !k.checked;
    console.log(i, event, k);
  }
  selectID(id, event: any) {
    this.SelectedIDs.push(id);
    console.log(this.SelectedIDs);

  }
  deleteSelected() {
    if (this.allmailtotrash == true) {
      this.service.allMailsmoveToTrash(this.Rid).subscribe(k => {
        if (k == "success") {
          this.toastr.success('Inbox is Empty!', 'Success');
          this.ngOnInit();
        }
        else {
          this.toastr.error('Failed to Moved To Trash!', 'Error');
        }
      });
    }
    else {
      this.service.moveToTrash(this.SelectedIDs).subscribe(k => {
        if (k == "Success") {
          this.toastr.info('Moved To Trash!', 'Success');
          this.ngOnInit();
        }
        else {
          this.toastr.error('Failed to Moved To Trash!', 'Error');
        }
      });
    }
  }

  checkAll(ev) {
    this.allmails.forEach(x => x.mailId = ev.target.checked)
  }

  isAllChecked() {
    return this.allmails.every(_ => _.mailId);
  }
  FieldsChange(values: any, mailId) {
    this.SelectedIDs.push(mailId);
    console.log(values.currentTarget.checked + " " + mailId);
  }
  alltotrash(values: any) {
    this.allmailtotrash = (values.currentTarget.checked);
  }
}

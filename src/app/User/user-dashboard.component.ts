import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styles: []
})
export class UserDashboardComponent implements OnInit {
  private allmails: any = [];
  SelectedIDs: any = [];
  Rid = localStorage.getItem("userToken");

  constructor(private service: ApihandlerService) { }
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
    console.log(id);
    this.SelectedIDs.push(id);
  }
  deleteSelected() {
    this.SelectedIDs.forEach(function (obj) {
      this.pagedItems = this.pagedItems.filter(item => item.id !== obj.id);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {
  private allmails: any = [];
  Rid = localStorage.getItem("Token");

  constructor(private service: ApihandlerService) { }
  getShortName(fullName) {
    return fullName.split(' ').map(n => n[0]).join('');
  }
  ngOnInit() {
    this.service.getmail(this.Rid).subscribe(k => {
      this.allmails = k;
    });
  }

}

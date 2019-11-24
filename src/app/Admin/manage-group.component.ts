import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApihandlerService } from '../apihandler.service';
import { Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.css']
})
export class ManageGroupComponent implements OnInit, OnDestroy {
  groupData: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  userId = localStorage.getItem("Token");
  toUpdateGroup: string;
  groupId: number;
  constructor(private service: ApihandlerService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.service.GroupMaster().subscribe(k => {
      this.groupData = k;
      this.dtTrigger.next();
    });
    this.dtOptions = {
      pageLength: 8,
    };
  }
  addUserMaster(groupMasterData) {
    this.service.AddUpdateGroupMaster(groupMasterData.value).subscribe(k => {
      this.toaster.success('Group Added Successfully', 'Success');
      this.service.GroupMaster().subscribe(k => {
        this.groupData = k;
      });
    });
  }
  toUpdate(groupName, groupId) {
    this.toUpdateGroup = groupName;
    this.groupId = groupId;
  }

  editUserMaster(editgroupMasterData) {
    this.service.AddUpdateGroupMaster(editgroupMasterData.value).subscribe(k => {
      this.toaster.success('Group Updated Successfully', 'Success');
      $("#editGroup").modal('hide');
      this.service.GroupMaster().subscribe(k => {
        this.groupData = k;
      });
    });
  }
  deleteUserMaster(groupId) {
    this.service.DeleteGroupMaster(groupId).subscribe(k => {
      this.toaster.info('Group Deleted Successfully', 'Success');
      $("#deleteGroup").modal('hide');
      this.service.GroupMaster().subscribe(k => {
        this.groupData = k;
      });
    });
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex, event.currentIndex);
      console.log(event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  trackByName(index: number, k: any): string {
    return k.groupName
  }
}

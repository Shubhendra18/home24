import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ComposeMailModel } from "../models/ComposeMail";
@Injectable({
  providedIn: 'root'
})
export class ApihandlerService {
  private baseUrl = "http://localhost:57959"
  constructor(private http: HttpClient) { }
  UserLogin(loginData) {
    return this.http.post(this.baseUrl + "/Admin/UserLogin", loginData);
  }
  GroupMaster() {
    return this.http.get(this.baseUrl + "/Admin/GroupMaster");
  }
  AddUpdateGroupMaster(groupMasterData) {
    return this.http.post(this.baseUrl + "/Admin/AddUpdateGroupMaster", groupMasterData);
  }
  DeleteGroupMaster(groupId) {
    return this.http.delete(this.baseUrl + "/Admin/DeleteGroupMaster/" + groupId.groupId);
  }
  composemail(mailBox) {
    return this.http.post(this.baseUrl + "/Admin/ComposeMail", mailBox);
  }

  //****************************************************User Api Call*********************************************************************/
  chkName(UserName) {
    return this.http.get(this.baseUrl + "/Admin/CheckUserName/" + UserName);
  }
  AddUser(addUser) {
    return this.http.post(this.baseUrl + "/Admin/AddUser", addUser);
  }
  GetUserBygroup(groupId) {
    return this.http.get(this.baseUrl + "/Admin/GetUserBygroup/" + groupId);
  }
  getmail(Rid) {
    return this.http.get(this.baseUrl + "/User/InboxMail/" + Rid);
  }
  moveToTrash(SelectedIDs: any = []) {
    return this.http.post(this.baseUrl + "/User/MoveToTrash", SelectedIDs);
  }
  allMailsmoveToTrash(Rid) {
    return this.http.delete(this.baseUrl + "/User/AllMailMoveToTrash/" + Rid);
  }
}

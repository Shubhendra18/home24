import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './Admin/inbox.component';
import { ComposeComponent } from './Admin/compose.component';
import { AdminloginComponent } from './admin/adminlogin.component';
import { UserloginComponent } from './User/userlogin.component';
import { DashboardComponent } from './Admin/dashboard.component';
import { ManageGroupComponent } from './Admin/manage-group.component';
import { ManageUserComponent } from './Admin/manage-user.component';
import { UserDashboardComponent } from './User/user-dashboard.component';
import { UserComposeComponent } from './User/user-compose.component';
import { UserSendComponent } from './User/user-send.component';
import { UserImportantComponent } from './User/user-important.component';
import { UserArchiveComponent } from './User/user-archive.component';
import { UserTrashComponent } from './User/user-trash.component';
import { UserDraftComponent } from './User/user-draft.component';


const routes: Routes = [
  //**********Admin************ */
  { path: 'admin', component: AdminloginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'managegroup', component: ManageGroupComponent },
  { path: 'manageuser', component: ManageUserComponent },

  { path: 'admininbox', component: InboxComponent },
  { path: 'admincompose', component: ComposeComponent },
  { path: '', component: AdminloginComponent },

  //**********User************ */
  { path: 'user', component: UserloginComponent },
  { path: 'inbox', component: UserDashboardComponent },
  { path: 'compose', component: UserComposeComponent },
  { path: 'sent', component: UserSendComponent },
  { path: 'important', component: UserImportantComponent },
  { path: 'draft', component: UserDraftComponent },
  { path: 'archive', component: UserArchiveComponent },
  { path: 'trash', component: UserTrashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

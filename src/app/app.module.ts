import { UserSendComponent } from './User/user-send.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SidebarComponent } from './Admin/sidebar.component';
import { NavbarComponent } from './Admin/navbar.component';
import { FooterComponent } from './Admin/footer.component';
import { InboxComponent } from './Admin/inbox.component';
import { ComposeComponent } from './Admin/compose.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ApihandlerService } from './apihandler.service';
import { AdminloginComponent } from './admin/adminlogin.component';
import { UserloginComponent } from './User/userlogin.component';
import { DashboardComponent } from './Admin/dashboard.component';
import { ManageGroupComponent } from './Admin/manage-group.component';
import { DataTablesModule } from 'angular-datatables';
import Swal from 'sweetalert2';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ManageUserComponent } from './Admin/manage-user.component';
import { UserDashboardComponent } from './User/user-dashboard.component';
import { UserSidebarComponent } from './user/user-sidebar.component';
import { UserNavbarComponent } from './user/user-navbar.component';
import { BredcrumComponent } from './admin/bredcrum.component';
import { UserComposeComponent } from './User/user-compose.component';
import { UserImportantComponent } from './User/user-important.component';
import { UserDraftComponent } from './User/user-draft.component';
import { UserArchiveComponent } from './User/user-archive.component';
import { UserTrashComponent } from './User/user-trash.component';
import { UserBreadcrumbComponent } from './user/user-breadcrumb.component';
import { QuillModule } from 'ngx-quill';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    InboxComponent,
    ComposeComponent,
    AdminloginComponent,
    UserloginComponent,
    DashboardComponent,
    ManageGroupComponent,
    ManageUserComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    UserNavbarComponent,
    BredcrumComponent,
    UserComposeComponent,
    UserSendComponent,
    UserImportantComponent,
    UserDraftComponent,
    UserArchiveComponent,
    UserTrashComponent,
    UserBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-center',
      timeOut: 3000,
      preventDuplicates: true
    }),
    DataTablesModule,
    DragDropModule,
    QuillModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    ApihandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TenantComponent } from './tenant/tenant.component';
import { TenantCreateComponent } from './tenant/tenant-create/tenant-create.component';
import { ClientComponent } from './client/client.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { TenantUserComponent } from './tenant-user/tenant-user.component';
import { TenantUserCreateComponent } from './tenant-user/tenant-user-create/tenant-user-create.component';
import { TenantUserAppComponent } from './tenant-user-app/tenant-user-app.component';
import { TenantUserAppCreateComponent } from './tenant-user-app/tenant-user-app-create/tenant-user-app-create.component';
import { TenantUserAppRoleComponent } from './tenant-user-app-role/tenant-user-app-role.component';
import { TenantUserAppRoleCreateComponent } from './tenant-user-app-role/tenant-user-app-role-create/tenant-user-app-role-create.component';
import { TenantUserAppAlertComponent } from './tenant-user-app-alert/tenant-user-app-alert.component';
import { TenantUserAppAlertCreateComponent } from './tenant-user-app-alert/tenant-user-app-alert-create/tenant-user-app-alert-create.component';
import { TenantAppComponent } from './tenant-app/tenant-app.component';
import { TenantAppCreateComponent } from './tenant-app/tenant-app-create/tenant-app-create.component';
import { TenantAppFeatureComponent } from './tenant-app-feature/tenant-app-feature.component';
import { TenantAppFeatureCreateComponent } from './tenant-app-feature/tenant-app-feature-create/tenant-app-feature-create.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureCreateComponent } from './feature/feature-create/feature-create.component';
import { FeaturePermissionComponent } from './feature-permission/feature-permission.component';
import { FeaturePermissionCreateComponent } from './feature-permission/feature-permission-create/feature-permission-create.component';
import { AppsComponent } from './apps/apps.component';
import { AppCreateComponent } from './apps/app-create/app-create.component';
import { AppRoleComponent } from './app-role/app-role.component';
import { AppRoleCreateComponent } from './app-role/app-role-create/app-role-create.component';
import { AppMessageComponent } from './app-message/app-message.component';
import { AppMessageCreateComponent } from './app-message/app-message-create/app-message-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [NavComponent,MenuComponent, SecureComponent, UsersComponent, UserCreateComponent,  RolesComponent, RoleCreateComponent, TenantComponent, TenantCreateComponent, ClientComponent, ClientCreateComponent, TenantUserComponent, TenantUserCreateComponent, TenantUserAppComponent, TenantUserAppCreateComponent, TenantUserAppRoleComponent, TenantUserAppRoleCreateComponent, TenantUserAppAlertComponent, TenantUserAppAlertCreateComponent, TenantAppComponent, TenantAppCreateComponent, TenantAppFeatureComponent, TenantAppFeatureCreateComponent, FeatureComponent, FeatureCreateComponent, FeaturePermissionComponent, FeaturePermissionCreateComponent, AppsComponent, AppCreateComponent, AppRoleComponent, AppRoleCreateComponent, AppMessageComponent, AppMessageCreateComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class SecureModule { }

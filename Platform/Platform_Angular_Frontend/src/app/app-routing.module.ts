import { TenantCreateComponent } from './secure/tenant/tenant-create/tenant-create.component';
import { TenantComponent } from './secure/tenant/tenant.component';
import { RoleCreateComponent } from './secure/roles/role-create/role-create.component';
import { RolesComponent } from './secure/roles/roles.component';
import { UserCreateComponent } from './secure/users/user-create/user-create.component';
import { UsersComponent } from './secure/users/users.component';
import { SecureComponent } from './secure/secure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './secure/client/client.component';
import { ClientCreateComponent } from './secure/client/client-create/client-create.component';
import { TenantUserComponent } from './secure/tenant-user/tenant-user.component';
import { TenantUserCreateComponent } from './secure/tenant-user/tenant-user-create/tenant-user-create.component';
import { TenantUserAppComponent } from './secure/tenant-user-app/tenant-user-app.component';
import { TenantUserAppCreateComponent } from './secure/tenant-user-app/tenant-user-app-create/tenant-user-app-create.component';
import { TenantUserAppRoleComponent } from './secure/tenant-user-app-role/tenant-user-app-role.component';
import { TenantUserAppRoleCreateComponent } from './secure/tenant-user-app-role/tenant-user-app-role-create/tenant-user-app-role-create.component';
import { TenantUserAppAlertComponent } from './secure/tenant-user-app-alert/tenant-user-app-alert.component';
import { TenantUserAppAlertCreateComponent } from './secure/tenant-user-app-alert/tenant-user-app-alert-create/tenant-user-app-alert-create.component';
import { TenantAppComponent } from './secure/tenant-app/tenant-app.component';
import { TenantAppCreateComponent } from './secure/tenant-app/tenant-app-create/tenant-app-create.component';
import { TenantAppFeatureComponent } from './secure/tenant-app-feature/tenant-app-feature.component';
import { TenantAppFeatureCreateComponent } from './secure/tenant-app-feature/tenant-app-feature-create/tenant-app-feature-create.component';
import { FeatureComponent } from './secure/feature/feature.component';
import { FeatureCreateComponent } from './secure/feature/feature-create/feature-create.component';
import { FeaturePermissionComponent } from './secure/feature-permission/feature-permission.component';
import { FeaturePermissionCreateComponent } from './secure/feature-permission/feature-permission-create/feature-permission-create.component';
import { AppCreateComponent } from './secure/apps/app-create/app-create.component';
import { AppsComponent } from './secure/apps/apps.component';
import { AppRoleComponent } from './secure/app-role/app-role.component';
import { AppRoleCreateComponent } from './secure/app-role/app-role-create/app-role-create.component';
import { AppMessageComponent } from './secure/app-message/app-message.component';
import { AppMessageCreateComponent } from './secure/app-message/app-message-create/app-message-create.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { TokenResolverService } from './resolver/token-resolver.service';


const routes: Routes = [

  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'callback',redirectTo: 'secure'},

  {path: "login", component: LoginComponent},
  {
    path: 'secure',
    component: SecureComponent, resolve: {
      access: TokenResolverService
    },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/create', component: UserCreateComponent },
      { path: 'users/:id/edit', component: UserCreateComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'roles/create', component: RoleCreateComponent },
      { path: 'roles/:id/edit', component: RoleCreateComponent },
      { path: 'tenant', component: TenantComponent },
      { path: 'tenant/create', component: TenantCreateComponent },
      { path: 'tenant/:id/edit', component: TenantCreateComponent },
      { path: 'client', component: ClientComponent },
      { path: 'client/create', component: ClientCreateComponent },
      { path: 'client/:id/edit', component: ClientCreateComponent },
      { path: 'tenantUser', component: TenantUserComponent },
      { path: 'tenantUser/create', component: TenantUserCreateComponent },
      { path: 'tenantUser/:id/edit', component: TenantUserCreateComponent },
      { path: 'tenantUserApp', component: TenantUserAppComponent },
      { path: 'tenantUserApp/create', component: TenantUserAppCreateComponent },
      { path: 'tenantUserApp/:id/edit', component: TenantUserAppCreateComponent },
      { path: 'tenantUserAppRole', component: TenantUserAppRoleComponent },
      { path: 'tenantUserAppRole/create', component: TenantUserAppRoleCreateComponent },
      { path: 'tenantUserAppRole/:id/edit', component: TenantUserAppRoleCreateComponent },
      { path: 'tenantUserAppAlert', component: TenantUserAppAlertComponent },
      { path: 'tenantUserAppAlert/create', component: TenantUserAppAlertCreateComponent },
      { path: 'tenantUserAppAlert/:id/edit', component: TenantUserAppAlertCreateComponent },
      { path: 'tenantApp', component: TenantAppComponent },
      { path: 'tenantApp/create', component: TenantAppCreateComponent },
      { path: 'tenantApp/:id/edit', component: TenantAppCreateComponent },
      { path: 'tenantAppFeature', component: TenantAppFeatureComponent },
      { path: 'tenantAppFeature/create', component: TenantAppFeatureCreateComponent },
      { path: 'tenantAppFeature/:id/edit', component: TenantAppFeatureCreateComponent },
      { path: 'feature', component: FeatureComponent },
      { path: 'feature/create', component: FeatureCreateComponent },
      { path: 'feature/:id/edit', component: FeatureCreateComponent },
      { path: 'featurePermission', component: FeaturePermissionComponent },
      { path: 'featurePermission/create', component: FeaturePermissionCreateComponent },
      { path: 'featurePermission/:id/edit', component: FeaturePermissionCreateComponent },
      { path: 'app', component: AppsComponent },
      { path: 'app/create', component: AppCreateComponent },
      { path: 'app/:id/edit', component: AppCreateComponent },
      { path: 'appRole', component: AppRoleComponent },
      { path: 'appRole/create', component: AppRoleCreateComponent },
      { path: 'appRole/:id/edit', component: AppRoleCreateComponent },
      { path: 'appMessage', component: AppMessageComponent },
      { path: 'appMessage/create', component: AppMessageCreateComponent },
      { path: 'appMessage/:id/edit', component: AppMessageCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpModule, HttpService, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersAppService from './appservices/users.appservice'
import { UsersFacade } from './facade/users.facade';
import { UsersRoutes } from './routes/users.route';
import { User } from '../submodules/Portfolio-Platform-Entities/users.entity';
import TenantsAppService from './appservices/tenants.appservice';
import Tenant_UsersAppService from './appservices/tenant_users.appservice';
import Tenant_AppsAppService from './appservices/tenant_apps.appservice';
import Tenant_App_FeaturesAppService from './appservices/tenant_app_features.appservice';
import Tenant_User_AppsAppService from './appservices/tenant_user_apps.appservice';
import Tenant_User_App_RolesAppService from './appservices/tenant_user_app_roles.appservice';
import Tenant_User_App_AlertsAppService from './appservices/tenant_user_app_alerts.appservice';
import RolesAppService from './appservices/roles.appservice';
import Feature_PermissionsAppService from './appservices/feature_permissions.appservice';
import FeaturesAppService from './appservices/features.appservice';
import ClientsAppService from './appservices/clients.appservice';
import AppsAppService from './appservices/apps.appservice';
import App_RolesAppService from './appservices/app_roles.appservice';
import App_MessagesAppService from './appservices/app_messages.appservice';
import { Tenant_UsersFacade } from './facade/tenant_users.facade';
import { Tenant_AppsFacade } from './facade/tenant_apps.facade';
import { Tenant_App_FeaturesFacade } from './facade/tenant_app_features.facade';
import { Tenant_User_AppsFacade } from './facade/tenant_user_apps.facade';
import { Tenant_User_App_RolesFacade } from './facade/tenant_user_app_roles.facade';
import { Tenant_User_App_AlertsFacade } from './facade/tenant_user_app_alerts.facade';
import { RolesFacade } from './facade/roles.facade';
import { Feature_PermissionsFacade } from './facade/feature_permissions.facade';
import { FeaturesFacade } from './facade/features.facade';
import { ClientsFacade } from './facade/clients.facade';
import { AppsFacade } from './facade/apps.facade';
import { App_RolesFacade } from './facade/app_roles.facade';
import { App_MessagesFacade } from './facade/app_messages.facade';
import { TenantsFacade } from './facade/tenants.facade';
import { Tenant } from '../submodules/Portfolio-Platform-Entities/tenants.entity';
import { TenantsRoutes } from './routes/tenants.route';
import { Tenant_UsersRoutes } from './routes/tenant_users.route';
import { Tenant_AppsRoutes } from './routes/tenant_apps.route';
import { Tenant_App_FeaturesRoutes } from './routes/tenant_app_features.route';
import { Tenant_User_AppsRoutes } from './routes/tenant_user_apps.route';
import { Tenant_User_App_RolesRoutes } from './routes/tenant_user_app_roles.route';
import { Tenant_User_App_AlertsRoutes } from './routes/tenant_user_app_alerts.route';
import { RolesRoutes } from './routes/roles.route';
import { Feature_PermissionsRoutes } from './routes/feature_permissions.route';
import { FeaturesRoutes } from './routes/features.route';
import { ClientsRoutes } from './routes/clients.route';
import { AppsRoutes } from './routes/apps.route';
import { App_RolesRoutes } from './routes/app_roles.route';
import { App_MessagesRoutes } from './routes/app_messages.route';
import { Tenant_User } from '../submodules/Portfolio-Platform-Entities/tenant_users.entity';
import { Tenant_User_App } from '../submodules/Portfolio-Platform-Entities/tenant_user_apps.entity';
import { Tenant_User_App_Role } from '../submodules/Portfolio-Platform-Entities/tenant_user_app_roles.entity';
import { Tenant_User_App_Alert } from '../submodules/Portfolio-Platform-Entities/tenant_user_app_alerts.entity';
import { Tenant_App} from '../submodules/Portfolio-Platform-Entities/tenant_apps.entity';
import { Tenant_App_Feature } from '../submodules/Portfolio-Platform-Entities/tenant_app_features.entity';
import { Role} from '../submodules/Portfolio-Platform-Entities/roles.entity';
import { Feature } from '../submodules/Portfolio-Platform-Entities/features.entity';
import { Feature_Permission } from '../submodules/Portfolio-Platform-Entities/feature_permissions.entity';
import { Client } from '../submodules/Portfolio-Platform-Entities/clients.entity';
import { App } from '../submodules/Portfolio-Platform-Entities/apps.entity';
import { App_Role } from '../submodules/Portfolio-Platform-Entities/app_roles.entity';
import { App_Message } from '../submodules/Portfolio-Platform-Entities/app_messages.entity';
import { Address } from 'submodules/Portfolio-Platform-Entities/addresses.entity';
import { Country } from 'submodules/Portfolio-Platform-Entities/countries.entity';
import { State } from 'submodules/Portfolio-Platform-Entities/states.entity';
import { City } from 'submodules/Portfolio-Platform-Entities/cities.entity';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([ User, 
                              Tenant,
                              Tenant_User,
                              Tenant_User_App,
                              Tenant_User_App_Role,
                              Tenant_User_App_Alert,
                              Tenant_App,
                              Tenant_App_Feature,
                              Role,
                              Feature,
                              Feature_Permission,
                              Client,
                              App,
                              App_Role,
                              App_Message,
                              Address,
                              Country,
                              State,
                              City
                             ]),
  ],
  providers: [UsersFacade,
              UsersAppService,
              TenantsFacade,
              TenantsAppService,
              Tenant_UsersFacade,
              Tenant_UsersAppService,
              Tenant_User_AppsFacade,
              Tenant_User_AppsAppService,
              Tenant_User_App_RolesFacade,
              Tenant_User_App_RolesAppService,
              Tenant_User_App_AlertsFacade,
              Tenant_User_App_AlertsAppService,
              Tenant_AppsFacade,
              Tenant_AppsAppService,
              Tenant_App_FeaturesFacade,
              Tenant_App_FeaturesAppService,
              RolesFacade,
              RolesAppService,
              FeaturesFacade,
              FeaturesAppService,
              Feature_PermissionsFacade,
              Feature_PermissionsAppService,
              ClientsFacade,
              ClientsAppService,
              AppsFacade,
              AppsAppService,
              App_RolesFacade,
              App_RolesAppService,
              App_MessagesFacade,
              App_MessagesAppService
            ],
  controllers: [UsersRoutes,
                TenantsRoutes,
                Tenant_UsersRoutes,
                Tenant_User_AppsRoutes,
                Tenant_User_App_RolesRoutes,
                Tenant_User_App_AlertsRoutes,
                Tenant_AppsRoutes,
                Tenant_App_FeaturesRoutes,
                RolesRoutes,
                FeaturesRoutes,
                Feature_PermissionsRoutes,
                ClientsRoutes,
                AppsRoutes,
                App_RolesRoutes,
                App_MessagesRoutes
              ]
})

export class EntityModule implements NestModule {
  constructor() {
    console.log("Inside Entity Module....");
  }

  configure(consumer: MiddlewareConsumer) {
    console.log("Inside Consumer");
  }
}
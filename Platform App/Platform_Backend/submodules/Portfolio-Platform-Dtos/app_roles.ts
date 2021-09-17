import { DtoBase } from "./DtoBase/dtobase";

export class App_RolesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    role_id?: number;
    app_id?: number;
    app_role_permissions?: string;
}
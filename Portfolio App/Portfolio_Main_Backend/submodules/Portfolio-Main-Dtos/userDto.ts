
import { DtoBase } from "./DtoBase/DtoBase";

export class userDto extends DtoBase {
    constructor() {
      super();
     
    }
   
    email?: string;
    sub?: string;
    
  }
import { DtoBase } from "./DtoBase/dtobase";

export class UsersDto extends DtoBase {
    constructor() {
      super();
     
    }
    login_name?: string;
    birth_date?: Date;
    date_of_joining?: Date;
    //user_guid?: number;
    //user_profile?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: number;
    marital_status?: string;

    //middle_name?: string;
    //title?: string;
   //culture?: string;
    //is_locked_out?: boolean;
    
    //name_suffix?: string;
    //display_name?: string;
    //picture_file_path?: string;
    //organizational_unit?: string;
    //password_hash?: string;
    //password_reset_code?: string;
    //password_question?: string;
    //password_answer?: string;
    //password_salt?: number;
    
   
    //can_receive_html_mail?: boolean;
    //url?: string;
}
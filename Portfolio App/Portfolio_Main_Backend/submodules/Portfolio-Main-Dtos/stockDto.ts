
import { DtoBase } from "./DtoBase/DtoBase";

export class stockDto extends DtoBase {
    constructor() {
        super();

    }

    ticker_symbol?: string;
    company_name?: string;

}
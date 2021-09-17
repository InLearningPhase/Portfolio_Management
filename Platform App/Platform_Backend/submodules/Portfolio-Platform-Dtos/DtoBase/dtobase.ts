export class DtoBase {
  constructor() {
    this.row_version = 0
    this.creation_date = new Date()
    this.modified_date = new Date()
  }

  id: number
  creation_date: Date
  modified_date: Date
  created_by: number
  modified_by: number
  row_version: number
  
 
}

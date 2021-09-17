import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm'

@Entity()
export class EntityBase {
  constructor() {
    this.id = 0
    this.modified_by = 0
    this.created_by = 0
    this.row_version = 0 // new Buffer("abc");
    this.creation_date = new Date()
    this.modified_date = new Date()
  }

  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @CreateDateColumn({
    name: 'creation_date',
    nullable: false,
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creation_date: Date

  @CreateDateColumn({
    name: 'modified_date',
    type: 'timestamp with time zone',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  modified_date: Date

  @Column({ name: 'created_by' })
  created_by: number

  @Column({ name: 'modified_by' })
  modified_by: number

  @VersionColumn({ name: 'row_version' }) //({ type: "bytea", nullable: true })
  row_version: number
}

//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserFiles')
export class UserFilesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  fileName: string;

  @Column('text', { nullable: true })
  fileType: string;

  @Column('date', { nullable: true })
  uploadDate: Date;
}

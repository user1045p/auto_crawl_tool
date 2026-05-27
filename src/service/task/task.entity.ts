import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cron: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  enabled: boolean;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  method: string;

  @Column({ type: 'text', nullable: true })
  params: string;

  @Column({ type: 'text', nullable: true })
  headers: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
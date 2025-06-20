import { Exclude } from 'class-transformer';
import { Project } from 'src/project/entities/project.entity';
import { Task } from 'src/task/entites/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  //   one user can have many projects
  @OneToMany(() => Project, (project) => project.owner)
  projects: Project[];

  // one user can have many tasks
  @OneToMany(() => Task, (task) => task.assignee)
  assignedTasks: Task[];
}

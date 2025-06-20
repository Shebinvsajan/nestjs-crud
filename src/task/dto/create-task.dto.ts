import { IsString, IsOptional, IsEnum, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskPriority, TaskStatus } from '../entites/task.entity';

export class CreateTaskDto {
  @ApiProperty({ example: 'Design login page', description: 'Title of the task' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ example: 'Create a responsive login page for the app', description: 'Detailed task description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ enum: TaskStatus, description: 'Current status of the task' })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @ApiPropertyOptional({ enum: TaskPriority, description: 'Priority level of the task' })
  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;

  @ApiPropertyOptional({ example: '2025-07-01', description: 'Due date for the task in ISO format' })
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @ApiProperty({ example: 101, description: 'ID of the associated project' })
  @IsNumber()
  projectId: number;

  @ApiPropertyOptional({ example: 7, description: 'ID of the user assigned to this task' })
  @IsNumber()
  @IsOptional()
  assigneeId?: number;
}

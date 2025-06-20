import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProjectStatus } from '../entities/project.entity';

export class CreateProjectDto {
  @ApiProperty({
    example: 'Website Redesign',
    description: 'Name of the project',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'Update the company website for 2025',
    description: 'Detailed project description',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    enum: ProjectStatus,
    description: 'Current status of the project',
  })
  @IsEnum(ProjectStatus)
  @IsOptional()
  status?: ProjectStatus;

  @ApiPropertyOptional({
    example: '2025-12-31',
    description: 'Project due date in ISO format',
  })
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @ApiPropertyOptional({ example: 42, description: 'ID of the project owner' })
  @IsNumber()
  @IsOptional()
  ownerId?: number;
}

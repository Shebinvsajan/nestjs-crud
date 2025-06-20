import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'John',
    minLength: 2,
    description: 'First name of the user',
  })
  @IsString()
  @MinLength(2)
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    minLength: 2,
    description: 'Last name of the user',
  })
  @IsString()
  @MinLength(2)
  lastName: string;

  @ApiProperty({
    example: 'strongPassword123',
    minLength: 6,
    description: 'User password',
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Whether the user is active',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

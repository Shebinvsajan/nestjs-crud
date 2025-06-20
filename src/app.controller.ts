import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a hello message' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the hello message.' })
  getHello(): string {
    return this.appService.getHello();
  }
}

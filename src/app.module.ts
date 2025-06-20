import {  Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import * as fs from 'fs';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: (() => {
        const dbDir = path.resolve(process.env.DB_DIR || '.', 'db');
        if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
        const dbFile = path.join(dbDir, 'db.sqlite');
        const exists = fs.existsSync(dbFile);
        console.log('SQLite DB exists?', exists);
        return dbFile;
      })(),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
    }),
    UserModule,
    ProjectModule,
    TaskModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'nest_tutorial_db',
      autoLoadEntities: true,
      synchronize: true, // Disable in production
    }),
  ],
})
export class DatabaseModule {}

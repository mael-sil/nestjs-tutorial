import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nest_tutorial_db',
      autoLoadEntities: true,
      synchronize: true, // Disable in production
    }),
  ],
})
export class DatabaseModule {}

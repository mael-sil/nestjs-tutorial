import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.DB_HOST),
      port: parseInt(process.env.DB_PORT || '5432'),
      username: String(process.env.DB_USERNAME),
      password: String(process.env.DB_PASSWORD),
      database: String(process.env.DB_NAME),
      autoLoadEntities: true,
      synchronize: true, // Disable in production
    }),
  ],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'ella.db.elephantsql.com',
      port: 5432,
      username: 'ssxnhuvu',
      password: 'Pf7Cpc8k1bpJH4P9NgGHeCjjnxGY2Thh',
      database: 'ssxnhuvu',
      models: [],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}

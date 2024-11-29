import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
    InvoicesModule,
    BillsModule,
  ],
})
export class AppModule {}

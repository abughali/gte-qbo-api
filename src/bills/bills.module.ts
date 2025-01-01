import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { BillProfile } from './profile/bill.profile';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './entities/bill.entity';
import { AuthService } from '../auth/auth.service';
import { BillLines } from './entities/bill-lines.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bill, BillLines])],
  controllers: [BillsController],
  providers: [BillsService, BillProfile, AuthService],
})
export class BillsModule {}

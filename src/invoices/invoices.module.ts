import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoiceProfile } from './profile/invoice.profile';
import { AuthService } from '../auth/auth.service';
import { InvoiceLines } from "./entities/invoice-lines.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, InvoiceLines])],
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoiceProfile, AuthService],
})
export class InvoicesModule {}

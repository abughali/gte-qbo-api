import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { InvoiceLines } from './invoice-lines.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @ApiProperty({ description: 'Invoice Number' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  invoiceNo: string;

  @ApiProperty({ description: 'Invoice Date' })
  @Column({ type: 'date' })
  @AutoMap()
  invoiceDate: string;

  @ApiProperty({ description: 'Currency used in the invoice' })
  @Column({ type: 'varchar', length: 10 })
  @AutoMap()
  currency: string;

  @ApiProperty({ description: 'Name of the customer' })
  @Column({ type: 'varchar', length: 255 })
  @AutoMap()
  customerName: string;

  @ApiProperty({ description: 'Booking Code' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  bookingCode: string;

  @ApiProperty({ description: 'Tax Code for the invoice' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  taxCode: string;

  @ApiProperty({ description: 'Payment Terms' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  paymentTerms: string;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  accountManager: string;

  @ApiProperty({ description: 'Location of the service or customer' })
  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  location: string;

  @Column({ type: 'varchar', nullable: true, length: 100 })
  @AutoMap()
  syncStatus: string;
  
  @Column({ type: 'varchar', nullable: true, length: 1000 })
  @AutoMap()
  errorDescription: string;

  @ApiProperty({ description: 'Details associated with the invoice' })
  @OneToMany(() => InvoiceLines, (detail) => detail.invoice, { cascade: true })
  @AutoMap()
  lines: InvoiceLines[];
}

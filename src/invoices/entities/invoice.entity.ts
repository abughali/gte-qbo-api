import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @ApiProperty({ description: 'Invoice ID' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  invoiceNo: string;

  @Column({ type: 'date' })
  @AutoMap()
  invoiceDate: string;

  @Column({ type: 'date' })
  @AutoMap()
  serviceDate: string;

  @Column({ type: 'varchar', length: 10 })
  @AutoMap()
  currency: string;

  @Column({ type: 'varchar', length: 255 })
  @AutoMap()
  customerName: string;

  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  bookingCode: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  itemAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  taxes: number;

  @Column({ type: 'varchar', length: 1000 })
  @AutoMap()
  itemDescription: string;

  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  taxCode: string;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  service: string;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  accountManager: string;

  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  paymentTerms: string;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  location: string;
}

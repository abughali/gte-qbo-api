import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @ApiProperty({ description: 'Bill Number' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  billNo: string;

  @ApiProperty({ description: 'Bill Date' })
  @Column({ type: 'date' })
  @AutoMap()
  billDate: string;

  @ApiProperty({ description: 'Service Date' })
  @Column({ type: 'date' })
  @AutoMap()
  serviceDate: string;

  @ApiProperty({ description: 'Currency' })
  @Column({ type: 'varchar', length: 10 })
  @AutoMap()
  currency: string;

  @ApiProperty({ description: 'Supplier Name' })
  @Column({ type: 'varchar', length: 255 })
  @AutoMap()
  supplierName: string;

  @ApiProperty({ description: 'Booking Code' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  bookingCode: string;

  @ApiProperty({ description: 'Item Amount' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  itemAmount: number;

  @ApiProperty({ description: 'Taxes' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  taxes: number;

  @ApiProperty({ description: 'Item Description' })
  @Column({ type: 'varchar', length: 1000 })
  @AutoMap()
  itemDescription: string;

  @ApiProperty({ description: 'Tax Code' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  taxCode: string;

  @ApiProperty({ description: 'Service Type' })
  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  service: string;

  @ApiProperty({ description: 'Account Manager' })
  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  accountManager: string;

  @ApiProperty({ description: 'Payment Terms' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  paymentTerms: string;

  @ApiProperty({ description: 'Location' })
  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  location: string;
}

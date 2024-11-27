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

  @ApiProperty({ description: 'Due Date' })
  @Column({ type: 'date' })
  @AutoMap()
  dueDate: string;

  @ApiProperty({ description: 'Currency' })
  @Column({ type: 'varchar', length: 10 })
  @AutoMap()
  currency: string;

  @ApiProperty({ description: 'Supplier Name' })
  @Column({ type: 'varchar', length: 255 })
  @AutoMap()
  supplier: string;

  @ApiProperty({ description: 'Booking Code' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  bookingCode: string;

  @ApiProperty({ description: 'Item Amount' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  lineAmount: number;

  @ApiProperty({ description: 'Taxes' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  lineTaxAmount: number;

  @ApiProperty({ description: 'Item Description' })
  @Column({ type: 'varchar', length: 1000 })
  @AutoMap()
  lineDescription: string;

  @ApiProperty({ description: 'Tax Code' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  lineTaxCode: string;

  @ApiProperty({ description: 'Account Name' })
  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  account: string;

  @ApiProperty({ description: 'Customer Name' })
  @Column({ type: 'varchar', length: 500 })
  @AutoMap()
  customer: string;

  @ApiProperty({ description: 'Product Name' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  product: string;
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { Bill } from './bill.entity';

@Entity()
export class BillLines {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty({ description: 'Item Description' })
  @Column({ type: 'varchar', length: 1000 })
  @AutoMap()
  description: string;
  
  @ApiProperty({ description: 'Item Amount' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  lineAmount: number;

  @ApiProperty({ description: 'Taxes' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  lineTaxAmount: number;

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

  @ApiProperty({ description: 'Bill this detail belongs to' })
  @ManyToOne(() => Bill, (bill) => bill.lines, { onDelete: 'CASCADE' })
  @AutoMap()
  bill: Bill;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { BillLines } from './bill-lines.entity';

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

  @ApiProperty({ description: 'Tax Code' })
  @Column({ type: 'varchar', length: 50 })
  @AutoMap()
  taxCode: string;

  @ApiProperty({ description: 'Details associated with the bill' })
  @OneToMany(() => BillLines, (detail) => detail.bill, { cascade: true })
  @AutoMap()
  lines: BillLines[];
}


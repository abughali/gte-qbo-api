import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { Invoice } from './invoice.entity';

@Entity()
export class InvoiceLines {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @ApiProperty({ description: 'Description of the service or item' })
  @Column({ type: 'varchar', length: 1000 })
  @AutoMap()
  description: string;

  @ApiProperty({ description: 'Service Name' })
  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  service: string;

  @ApiProperty({ description: 'Service Date' })
  @Column({ type: 'date' })
  @AutoMap()
  serviceDate: string;

  @ApiProperty({ description: 'Line Amount' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  lineAmount: number;

  @ApiProperty({ description: 'Line Tax amount' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @AutoMap()
  lineTaxAmount: number;

  @ApiProperty({ description: 'Invoice this detail belongs to' })
  @ManyToOne(() => Invoice, (invoice) => invoice.lines, { onDelete: 'CASCADE' })
  @AutoMap()
  invoice: Invoice;
}

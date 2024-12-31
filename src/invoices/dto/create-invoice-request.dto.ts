import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AutoMap } from '@automapper/classes';
import { InvoiceLineDto } from './invoice-line.dto';

@ApiSchema({ name: 'CreateInvoiceRequest' })
export class CreateInvoiceRequestDto {
  @ApiProperty({
    description: 'The invoice number from the source system.',
    example: '119209',
  })
  @IsNotEmpty()
  @AutoMap()
  invoiceNo: string;

  @ApiProperty({
    description: 'The date the invoice was issued.',
    example: '2024-10-30',
  })
  @IsNotEmpty()
  @IsDateString()
  @AutoMap()
  invoiceDate: string;

  @ApiProperty({
    description: 'The currency of the invoice.',
    example: 'AED',
  })
  @IsNotEmpty()
  @AutoMap()
  currency: string;

  @ApiProperty({
    description: 'The name of the customer.',
    example: 'RateHawk–Guru XML',
  })
  @IsNotEmpty()
  @AutoMap()
  customerName: string;

  @ApiProperty({
    description: 'The booking code associated with the invoice.',
    example: 'RJCJTW',
  })
  @IsNotEmpty()
  @AutoMap()
  bookingCode: string;

  @ApiProperty({
    description: 'The tax code applied to the invoice.',
    example: 'EX Exempt',
  })
  @IsNotEmpty()
  @AutoMap()
  taxCode: string;

  @ApiProperty({
    description: 'The payment terms agreed for the invoice.',
    example: 'Net 30',
  })
  @IsNotEmpty()
  @AutoMap()
  paymentTerms: string;

  @ApiProperty({
    description: 'The location associated with the customer or transaction.',
    example: 'UNITED STATES',
  })
  @IsNotEmpty()
  @AutoMap()
  location: string;

  @ApiProperty({
    description: 'The account manager responsible for the invoice.',
    example: 'XML Agency',
  })
  @AutoMap()
  accountManager: string;  

  @ApiProperty({
    description: 'The details or line items associated with the invoice.',
    type: [InvoiceLineDto],
  })
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineDto)
  @AutoMap()
  lines: InvoiceLineDto[];
}
import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'CreateInvoiceRequest' })
export class CreateInvoiceRequestDto {
  @ApiProperty({
    description: 'The invoice number from source system.',
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
    description: 'The date the service was provided.',
    example: '2024-10-29',
  })
  @IsDateString()
  @AutoMap()
  serviceDate: string;

  @ApiProperty({
    description: 'The currency of the invoice amount.',
    example: 'AED',
  })
  @IsNotEmpty()
  @AutoMap()
  currency: string;

  @ApiProperty({
    description: 'The name of the customer.',
    example: 'RateHawk–Guru XML',
  })
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
    description: 'The amount of the item or service.',
    example: 206.87,
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @AutoMap()
  itemAmount: number;

  @ApiProperty({
    description: 'The tax amount applied to the item or service.',
    example: 0.0,
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @AutoMap()
  taxes: number;

  @ApiProperty({
    description: 'A detailed description of the item or service.',
    example:
      'Name :- John Stark\nHilton Hotel\nTravel Dates: 2024-10-25 to 2024-10-29',
  })
  @AutoMap()
  itemDescription: string;

  @ApiProperty({
    description: 'The tax code applied to the transaction.',
    example: 'EX Exempt',
  })
  @IsNotEmpty()
  @AutoMap()
  taxCode: string;

  @ApiProperty({
    description: 'The type of service related to the invoice.',
    example: 'XML Hotel',
  })
  @AutoMap()
  service: string;

  @ApiProperty({
    description: 'The account manager responsible for the invoice.',
    example: 'XML Agency',
  })
  @AutoMap()
  accountManager: string;

  @ApiProperty({
    description: 'The payment terms agreed for the invoice.',
    example: 'Net 30',
  })
  @AutoMap()
  paymentTerms: string;

  @ApiProperty({
    description: 'The location associated with the customer or transaction.',
    example: 'UNITED STATES',
  })
  @AutoMap()
  location: string;
}

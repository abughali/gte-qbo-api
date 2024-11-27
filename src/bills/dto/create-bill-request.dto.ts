import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'CreateBillRequest' })
export class CreateBillRequestDto {
  @ApiProperty({
    description: 'The bill number from source system.',
    example: '12345',
  })
  @IsNotEmpty()
  @AutoMap()
  billNo: string;

  @ApiProperty({
    description: 'The date the bill was issued.',
    example: '2024-10-30',
  })
  @IsNotEmpty()
  @IsDateString()
  @AutoMap()
  billDate: string;

  @ApiProperty({
    description: 'The due date of the bill.',
    example: '2024-10-29',
  })
  @IsOptional()
  @IsDateString()
  @AutoMap()
  dueDate: string;

  @ApiProperty({
    description: 'The currency of the bill amount.',
    example: 'AED',
  })
  @IsNotEmpty()
  @AutoMap()
  currency: string;

  @ApiProperty({
    description: 'The name of the supplier.',
    example: 'HotelBeds XML',
  })
  @AutoMap()
  supplier: string;

  @ApiProperty({
    description: 'The booking code associated with the bill.',
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
  lineAmount: number;

  @ApiProperty({
    description: 'The tax amount applied to the item or service.',
    example: 0.0,
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @AutoMap()
  lineTaxAmount: number;

  @ApiProperty({
    description: 'A detailed description of the item or service.',
    example:
      'Name :- John Stark\nHilton Hotel\nTravel Dates: 2024-10-25 to 2024-10-29',
  })
  @AutoMap()
  lineDescription: string;

  @ApiProperty({
    description: 'The tax code applied to the bill.',
    example: 'EX Exempt',
  })
  @IsNotEmpty()
  @AutoMap()
  lineTaxCode: string;

  @ApiProperty({
    description: 'The account name.',
    example: 'XML - COS',
  })
  @AutoMap()
  account: string;

  @ApiProperty({
    description: 'The customer name.',
    example: 'TDS',
  })
  @AutoMap()
  customer: string;

  @ApiProperty({
    description: 'The product name.',
    example: 'XML Hotel',
  })
  @AutoMap()
  product: string;
}

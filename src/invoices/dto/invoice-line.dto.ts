import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'InvoiceLine' })
export class InvoiceLineDto {
  @ApiProperty({
    description: 'A detailed description of the item or service.',
    example:
      'Name :- John Stark\nHilton Hotel\nTravel Dates: 2024-10-25 to 2024-10-29',
  })
  @IsNotEmpty()
  @AutoMap()
  description: string;

  @ApiProperty({
    description: 'The type of service related to the line item.',
    example: 'XML Hotel',
  })
  @IsNotEmpty()
  @AutoMap()
  service: string;

  @ApiProperty({
    description: 'The date the service was provided.',
    example: '2024-10-29',
  })
  @IsNotEmpty()
  @IsDateString()
  @AutoMap()
  serviceDate: string;

  @ApiProperty({
    description: 'The amount for this line item.',
    example: 206.87,
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @AutoMap()
  lineAmount: number;

  @ApiProperty({
    description: 'The tax amount for this line item.',
    example: 0.0,
  })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @AutoMap()
  lineTaxAmount: number;
}

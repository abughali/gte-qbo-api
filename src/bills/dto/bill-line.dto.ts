import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'BillLine' })
export class BillLineDto {
  
  @ApiProperty({
    description: 'A detailed description of the item or service.',
    example:
      'Name :- John Stark\nHilton Hotel\nTravel Dates: 2024-10-25 to 2024-10-29',
  })
  @AutoMap()
  description: string;
  
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

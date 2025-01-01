import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { Type } from 'class-transformer';
import { BillLineDto } from './bill-line.dto';


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
    description: 'The tax code applied to the bill.',
    example: 'EX Exempt',
  })
  @IsNotEmpty()
  @AutoMap()
  taxCode: string;

  @ApiProperty({
    description: 'The details or line items associated with the bill.',
    type: [BillLineDto],
  })
  @ValidateNested({ each: true })
  @Type(() => BillLineDto)
  @AutoMap()
  lines: BillLineDto[];  
}

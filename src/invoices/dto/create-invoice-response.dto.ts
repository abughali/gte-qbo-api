import { ApiProperty, ApiSchema, PartialType } from '@nestjs/swagger';
import { CreateInvoiceRequestDto } from './create-invoice-request.dto';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'CreateInvoiceResponse' })
export class CreateInvoiceResponseDto extends CreateInvoiceRequestDto
 {
  @ApiProperty({
    description: 'The unique identifier for the invoice.',
    example: '123',
  })
  @AutoMap()
  id: number;
}

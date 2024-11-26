import { ApiProperty, ApiSchema, PartialType } from '@nestjs/swagger';
import { CreateInvoiceRequestDto } from './create-invoice-request.dto';

@ApiSchema({ name: 'CreateInvoiceResponse' })
export class CreateInvoiceResponseDto extends PartialType(
  CreateInvoiceRequestDto,
) {
  @ApiProperty({
    description: 'The unique identifier for the invoice.',
    example: '123',
  })
  id: number;
}

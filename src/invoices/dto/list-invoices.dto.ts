import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { CreateInvoiceRequestDto } from './create-invoice-request.dto';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'InvoiceListResponse' })
export class InvoiceListResponseDto {
  @ApiProperty({
    description: 'List of all invoices',
    type: [CreateInvoiceRequestDto],
  })
  @AutoMap(() => [CreateInvoiceRequestDto])
  invoices: CreateInvoiceRequestDto[];
}

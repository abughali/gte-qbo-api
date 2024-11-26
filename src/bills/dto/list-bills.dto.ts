import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { CreateBillRequestDto } from './create-bill-request.dto';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'BillListResponse' })
export class BillListResponseDto {
  @ApiProperty({
    description: 'List of all bills',
    type: [CreateBillRequestDto],
  })
  @AutoMap(() => [CreateBillRequestDto])
  bills: CreateBillRequestDto[];
}

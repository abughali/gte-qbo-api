import { ApiProperty, ApiSchema, PartialType } from '@nestjs/swagger';
import { CreateBillRequestDto } from './create-bill-request.dto';

@ApiSchema({ name: 'CreateBillResponse' })
export class CreateBillResponseDto extends PartialType(CreateBillRequestDto) {
  @ApiProperty({
    description: 'The unique identifier for the bill.',
    example: '123',
  })
  id: number;
}

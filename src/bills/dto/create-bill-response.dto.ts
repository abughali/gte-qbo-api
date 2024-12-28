import { ApiProperty, ApiSchema, PartialType } from '@nestjs/swagger';
import { CreateBillRequestDto } from './create-bill-request.dto';
import { AutoMap } from '@automapper/classes';

@ApiSchema({ name: 'CreateBillResponse' })
export class CreateBillResponseDto extends CreateBillRequestDto {
  @ApiProperty({
    description: 'The unique identifier for the bill.',
    example: '123',
  })
  @AutoMap()
  id: number;
}

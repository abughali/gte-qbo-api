import { ApiProperty, ApiSchema } from '@nestjs/swagger';
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

  @ApiProperty({
    description: "The sync status",
    example: "OK",
    required: false
  })
  @AutoMap()
  syncStatus: string;

  @ApiProperty({
    description: "The description of the sync error",
    example: "Validation error",
    required: false
  })
  @AutoMap()
  errorDescription: string;
}

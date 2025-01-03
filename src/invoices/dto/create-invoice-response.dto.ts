import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { CreateInvoiceRequestDto } from "./create-invoice-request.dto";
import { AutoMap } from "@automapper/classes";

@ApiSchema({ name: "CreateInvoiceResponse" })
export class CreateInvoiceResponseDto extends CreateInvoiceRequestDto {
  @ApiProperty({
    description: "The unique identifier for the invoice.",
    example: "123"
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

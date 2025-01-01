import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Invoice } from '../entities/invoice.entity';
import { CreateInvoiceResponseDto } from '../dto/create-invoice-response.dto';
import { CreateInvoiceRequestDto } from '../dto/create-invoice-request.dto';

@Injectable()
export class InvoiceProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        Invoice,
        CreateInvoiceResponseDto,
        forMember(
          (dest) => dest.lines,
          mapFrom((source) =>
            source.lines.map(({ id, ...lineDetails }) => lineDetails), // Exclude line id
          ),
        ),
      );      
        createMap(mapper, CreateInvoiceRequestDto, Invoice,
        forMember((dest) => dest.lines, mapFrom((src) => src.lines)),
      );
    };
  }
}

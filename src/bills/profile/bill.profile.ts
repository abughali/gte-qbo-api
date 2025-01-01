import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Bill } from '../entities/bill.entity';
import { CreateBillResponseDto } from '../dto/create-bill-response.dto';
import { CreateBillRequestDto } from '../dto/create-bill-request.dto';

@Injectable()
export class BillProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        Bill,
        CreateBillResponseDto,
        forMember(
          (dest) => dest.lines,
          mapFrom((source) =>
            source.lines.map(({ id, ...lineDetails }) => lineDetails), // Exclude line id
          ),
        ),
      );
      createMap(mapper, CreateBillRequestDto, Bill,
        forMember((dest) => dest.lines, mapFrom((src) => src.lines)),
      );      
    };
  }
}

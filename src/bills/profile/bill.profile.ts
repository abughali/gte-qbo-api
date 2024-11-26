import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Bill } from '../entities/bill.entity';
import { CreateBillRequestDto } from '../dto/create-bill-request.dto';

@Injectable()
export class BillProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, CreateBillRequestDto, Bill);
    };
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { CreateBillRequestDto } from './dto/create-bill-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Bill } from './entities/bill.entity';
import { BillListResponseDto } from './dto/list-bills.dto';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<CreateBillRequestDto>,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}
  private readonly logger = new Logger(BillsService.name, {
    timestamp: true,
  });
  async create(
    createBillDto: CreateBillRequestDto,
  ): Promise<CreateBillRequestDto> {
    const bill = this.mapper.map(createBillDto, CreateBillRequestDto, Bill);
    this.logger.log(`Creating bill number: ${bill.billNo}`);
    try {
      const savedBill = await this.billRepository.save(bill);
      this.logger.log(`Bill successfully saved with ID : ${savedBill.id}`);
      return savedBill;
    } catch (error) {
      this.logger.error(`Failed to save bill: ${bill.billNo}`, error.stack);
      throw error;
    }
  }

  async findByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<BillListResponseDto> {
    const filteredBills = await this.billRepository.find({
      where: {
        billDate: Between(startDate, endDate),
      },
    });
    const bills = await this.mapper.mapArrayAsync(
      filteredBills,
      CreateBillRequestDto,
      Bill,
    );
    this.logger.log(`Number of bills returned: ${bills.length}`);
    return { bills };
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { CreateInvoiceRequestDto } from './dto/create-invoice-request.dto';
import { Invoice } from './entities/invoice.entity';
import { InvoiceListResponseDto } from './dto/list-invoices.dto';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<CreateInvoiceRequestDto>,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}
  private readonly logger = new Logger(InvoicesService.name, {
    timestamp: true,
  });
  async create(
    createInvoiceDto: CreateInvoiceRequestDto,
  ): Promise<CreateInvoiceRequestDto> {
    const invoice = this.mapper.map(
      createInvoiceDto,
      CreateInvoiceRequestDto,
      Invoice,
    );
    this.logger.log(`Creating invoice number: ${invoice.invoiceNo}`);
    try {
      const savedInvoice = await this.invoiceRepository.save(invoice);
      this.logger.log(
        `Invoice successfully saved with ID : ${savedInvoice.id}`,
      );
      return savedInvoice;
    } catch (error) {
      this.logger.error(
        `Failed to save invoice: ${invoice.invoiceNo}`,
        error.stack,
      );
      throw error; // Re-throw the error after logging
    }
  }

  async findByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<InvoiceListResponseDto> {
    const filteredInvoices = await this.invoiceRepository.find({
      where: {
        invoiceDate: Between(startDate, endDate),
      },
    });
    const invoices = await this.mapper.mapArrayAsync(
      filteredInvoices,
      CreateInvoiceRequestDto,
      Invoice,
    );
    this.logger.log('Returns list of invoices');
    return { invoices };
  }
}

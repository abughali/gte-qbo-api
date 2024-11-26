import { Controller, Post, Body, UseGuards, Get, Query } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillRequestDto } from './dto/create-bill-request.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiSecurity,
} from '@nestjs/swagger';
import { ApiKeyGuard } from '../auth/auth.guard';
import { format } from 'date-fns';
import { BillListResponseDto } from './dto/list-bills.dto';
import { CreateInvoiceResponseDto } from '../invoices/dto/create-invoice-response.dto';

@ApiSecurity('X-API-KEY')
@UseGuards(ApiKeyGuard)
@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateInvoiceResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: CreateBillRequestDto })
  @ApiOperation({ operationId: 'create_bill' })
  create(@Body() createBillDto: CreateBillRequestDto) {
    return this.billsService.create(createBillDto);
  }

  @Get()
  @ApiQuery({
    name: 'startDate',
    required: true,
    example: format(new Date(), 'yyyy-MM-dd'),
  })
  @ApiQuery({
    name: 'endDate',
    required: true,
    example: format(new Date(), 'yyyy-MM-dd'),
  })
  @ApiOkResponse({
    description: 'Returns a list of bills within the specified date range',
    type: BillListResponseDto,
  })
  @ApiOperation({ operationId: 'query_bills' })
  async findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<BillListResponseDto> {
    return this.billsService.findByDateRange(startDate, endDate);
  }
}

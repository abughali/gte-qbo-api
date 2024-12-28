import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceRequestDto } from './dto/create-invoice-request.dto';
import {
  ApiBody,
  ApiQuery,
  ApiSecurity,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ApiKeyGuard } from '../auth/auth.guard';
import { CreateInvoiceResponseDto } from './dto/create-invoice-response.dto';
import { format } from 'date-fns';

@ApiSecurity('X-API-KEY')
@UseGuards(ApiKeyGuard)
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateInvoiceResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: CreateInvoiceRequestDto })
  @ApiOperation({ operationId: 'create_invoice' })
  create(@Body() createInvoiceDto: CreateInvoiceRequestDto) {
    return this.invoicesService.create(createInvoiceDto);
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
    description: 'Returns a list of invoices within the specified date range',
    type: [CreateInvoiceResponseDto],
  })
  @ApiOperation({ operationId: 'query_invoices' })
  async findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<CreateInvoiceResponseDto[]> {
    return this.invoicesService.findByDateRange(startDate, endDate);
  }
}

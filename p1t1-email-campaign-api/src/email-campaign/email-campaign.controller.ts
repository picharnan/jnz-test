import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { EmailCampaignService } from './email-campaign.service';
import { CreateEmailCampaignDto } from './dto/create-email-campaign.dto';
import { UpdateEmailCampaignDto } from './dto/update-email-campaign.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('email-campaign')
@Controller({
  path: 'email-campaign',
  version: '1',
})
export class EmailCampaignController {
  constructor(private readonly service: EmailCampaignService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new email campaign' })
  @ApiResponse({ status: 201, description: 'Campaign successfully created' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() dto: CreateEmailCampaignDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all email campaigns' })
  @ApiResponse({ status: 200, description: 'List of all campaigns' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific email campaign by ID' })
  @ApiResponse({ status: 200, description: 'The campaign details' })
  @ApiResponse({ status: 404, description: 'Campaign not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing email campaign' })
  @ApiResponse({ status: 200, description: 'Campaign successfully updated' })
  @ApiResponse({ status: 404, description: 'Campaign not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<UpdateEmailCampaignDto>,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an email campaign' })
  @ApiResponse({ status: 200, description: 'Campaign successfully deleted' })
  @ApiResponse({ status: 404, description: 'Campaign not found' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}

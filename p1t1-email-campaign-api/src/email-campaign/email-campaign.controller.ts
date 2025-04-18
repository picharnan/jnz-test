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

@Controller({
  path: 'email-campaign',
  version: '1',
})
export class EmailCampaignController {
  constructor(private readonly service: EmailCampaignService) {}

  @Post()
  create(@Body() dto: CreateEmailCampaignDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<CreateEmailCampaignDto>,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEmailCampaignDto } from './dto/create-email-campaign.dto';
import { EmailCampaignRepository } from './email-campaign.repository/email-campaign.repository';

@Injectable()
export class EmailCampaignService {
  constructor(private readonly repo: EmailCampaignRepository) {}

  create(dto: CreateEmailCampaignDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, dto: Partial<CreateEmailCampaignDto>) {
    return this.repo.update(id, dto);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}

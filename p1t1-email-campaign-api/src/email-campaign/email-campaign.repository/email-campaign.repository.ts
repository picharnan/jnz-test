import { Injectable } from '@nestjs/common';
import {
  CreateEmailCampaignDto,
  CampaignStatus,
} from '../dto/create-email-campaign.dto';

@Injectable()
export class EmailCampaignRepository {
  private campaigns: any[] = [];
  private idCounter = 1;

  create(dto: CreateEmailCampaignDto) {
    const now = new Date().toISOString();
    const campaign = {
      id: this.idCounter++,
      ...dto,
      created_at: now,
      updated_at: now,
      version: 1,
    };
    this.campaigns.push(campaign);
    return campaign;
  }

  findAll() {
    return this.campaigns;
  }

  findOne(id: number) {
    return this.campaigns.find((c) => c.id === id);
  }

  update(id: number, dto: Partial<CreateEmailCampaignDto>) {
    const index = this.campaigns.findIndex((c) => c.id === id);
    if (index === -1) return null;

    const updated = {
      ...this.campaigns[index],
      ...dto,
      updated_at: new Date().toISOString(),
      version: this.campaigns[index].version + 1,
    };

    this.campaigns[index] = updated;
    return updated;
  }

  delete(id: number) {
    const index = this.campaigns.findIndex((c) => c.id === id);
    if (index === -1) return null;

    const deleted = {
      ...this.campaigns[index],
      deleted_at: new Date().toISOString(),
    };

    this.campaigns[index] = deleted;
    return deleted;
  }
}

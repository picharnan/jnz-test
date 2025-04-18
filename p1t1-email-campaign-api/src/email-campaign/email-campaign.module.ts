import { Module } from '@nestjs/common';
import { EmailCampaignController } from './email-campaign.controller';
import { EmailCampaignService } from './email-campaign.service';
import { EmailCampaignRepository } from './email-campaign.repository/email-campaign.repository';

@Module({
  controllers: [EmailCampaignController],
  providers: [EmailCampaignService, EmailCampaignRepository],
})
export class EmailCampaignModule {}

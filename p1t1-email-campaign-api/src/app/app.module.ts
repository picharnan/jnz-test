import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailCampaignModule } from '../email-campaign/email-campaign.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmailCampaignModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

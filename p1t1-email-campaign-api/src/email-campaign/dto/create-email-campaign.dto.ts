import { ApiProperty } from '@nestjs/swagger';

import {
  IsString,
  IsUUID,
  IsOptional,
  IsEnum,
  IsJSON,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export enum CampaignStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export class CreateEmailCampaignDto {
  @ApiProperty({ description: 'Name of the campaign', example: 'Summer Promo' })
  @IsNotEmpty()
  @IsString()
  campaign_name: string;

  @ApiProperty({
    description: 'Email subject',
    example: '🔥 Hot Deals This Summer!',
  })
  @IsNotEmpty()
  @IsString()
  subject: string;

  @ApiProperty({
    description: 'Email address for communication',
    example: 'promo@example.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Email content',
    example: '<h1>Welcome to Summer</h1>',
  })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Campaign status',
    enum: CampaignStatus,
    example: 'active',
  })
  @IsEnum(CampaignStatus)
  status: CampaignStatus;

  @ApiProperty({
    description: 'Schedule time of the campaign',
    example: '2025-04-30T08:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  schedule?: string;

  @ApiProperty({
    description: 'Time when campaign is deleted',
    required: false,
    example: '2025-04-19T08:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  deleted_at?: string;
}

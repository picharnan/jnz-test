import { ApiProperty } from '@nestjs/swagger';

import {
  IsString,
  IsUUID,
  IsOptional,
  IsEnum,
  IsJSON,
  IsDateString,
} from 'class-validator';

export enum CampaignStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export class CreateEmailCampaignDto {
  @ApiProperty({
    description: 'Unique identifier for the campaign',
    example: 'bfb1398f-cd4c-4f4f-b543-92f8fb7ea0b1',
  })
  @IsUUID()
  uuid: string;

  @ApiProperty({ description: 'Slug for campaign', example: 'summer-campaign' })
  @IsString()
  slug: string;

  @ApiProperty({ description: 'Name of the campaign', example: 'Summer Promo' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email subject',
    example: '🔥 Hot Deals This Summer!',
  })
  @IsString()
  subject: string;

  @ApiProperty({
    description: 'Thumbnail URL',
    example: 'https://example.com/thumb.jpg',
  })
  @IsString()
  thumbnail: string;

  @ApiProperty({
    description: 'Social cover JSON',
    example:
      '{"fb":"https://fb.com/image.jpg","tw":"https://twitter.com/image.jpg"}',
  })
  @IsJSON()
  social_cover: string;

  @ApiProperty({ description: 'Line for communication', example: '@summer' })
  @IsString()
  line: string;

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
    description: 'Start time of the campaign',
    example: '2025-04-19T08:00:00.000Z',
  })
  @IsDateString()
  start_time: string;

  @ApiProperty({
    description: 'End time of the campaign',
    example: '2025-04-30T08:00:00.000Z',
  })
  @IsDateString()
  stop_time: string;

  @ApiProperty({
    description: 'Time when campaign is deleted',
    required: false,
    example: '2025-04-19T08:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  deleted_at?: string;
}

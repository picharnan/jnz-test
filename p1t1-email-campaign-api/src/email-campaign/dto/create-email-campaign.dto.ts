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
  @IsUUID()
  uuid: string;

  @IsString()
  slug: string;

  @IsString()
  name: string;

  @IsString()
  subject: string;

  @IsString()
  thumbnail: string;

  @IsJSON()
  social_cover: string;

  @IsString()
  line: string;

  @IsString()
  email: string;

  @IsString()
  content: string;

  @IsEnum(CampaignStatus)
  status: CampaignStatus;

  @IsDateString()
  start_time: string;

  @IsDateString()
  stop_time: string;

  @IsOptional()
  @IsDateString()
  deleted_at?: string;
}

export type EmailCampaign = {
  id?: number;
  uuid?: string;
  campaign_name?: string;
  subject?: string;
  content?: string;
  email?: string;
  status?: string;
  schedule?: Date;
  created_at?: Date;
  updated_at?: Date;
};

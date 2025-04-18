import { Pagination } from "@/types/service.type";
import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { EmailCampaign } from "@/types/email-campaign.type";

class EmailCampaignService {
  private apiEndpoint: string;

  constructor() {
    this.apiEndpoint =
      import.meta.env.VITE_API_ENDPOINT || `http://localhost:3000`;
  }

  async getEmailCampaignList(page: Pagination): Promise<EmailCampaign[]> {
    try {
      const rawList = await wretch()
        .addon(QueryStringAddon)
        .query(page)
        .get(`${this.apiEndpoint}/v1/email-campaign`)
        .json();
      const list: EmailCampaign[] = (rawList as any[]).map(
        parseEmailCampaignTime
      );
      return list;
    } catch (ex) {
      throw new Error(`getEmailCampaignList failed: ${(ex as Error).message}`);
    }
  }

  async createEmailCampaign(input: EmailCampaign): Promise<EmailCampaign> {
    try {
      const result = await wretch(`${this.apiEndpoint}/v1/email-campaign`)
        .addon(QueryStringAddon)
        .post(input)
        .json();
      return parseEmailCampaignTime(result);
    } catch (ex) {
      throw new Error(`createEmailCampaign failed: ${(ex as Error).message}`);
    }
  }
}

export default new EmailCampaignService();

function parseEmailCampaignTime(raw: any): EmailCampaign {
  return {
    ...raw,
    schedule: raw.schedule ? new Date(raw.schedule) : undefined,
    created_at: raw.created_at ? new Date(raw.created_at) : undefined,
    updated_at: raw.updated_at ? new Date(raw.updated_at) : undefined,
  };
}

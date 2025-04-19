import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import EmailCampaignService from "@/services/email-campaign.service";

import SidebarLayout from "@/layout/SidebarLayout";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "@/types/service.type";
import { EmailCampaign } from "@/types/email-campaign.type";

export const EmailCampaignList = () => {
  const paginationRef = useRef<Pagination>({ limit: 9999, page: 1 });
  const [emailCampaignList, setEmailCampaignList] = useState<EmailCampaign[]>(
    []
  );

  const getListData = async () => {
    const emailCmapaignList = await EmailCampaignService.getEmailCampaignList(
      paginationRef.current
    );

    setEmailCampaignList(emailCmapaignList);
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <SidebarLayout title="Email camapgin" tool={<EmailCampaignTool />}>
      <div className="bg-gray-50 border rounded">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Campaign Name</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-left">Schedule</TableHead>
              <TableHead className="text-left">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emailCampaignList.map((row) => (
              <TableRow key={row.uuid}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.campaign_name}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell className="text-center">{row.status}</TableCell>
                <TableCell className="text-left">
                  {row.schedule?.toISOString()}
                </TableCell>
                <TableCell className="text-left">
                  {row.created_at?.toISOString()}
                </TableCell>
              </TableRow>
            ))}
            {emailCampaignList.length === 0 && (
              <TableRow>
                <TableCell className="font-medium text-center" colSpan={6}>
                  No data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </SidebarLayout>
  );
};

export default EmailCampaignList;

const EmailCampaignTool = () => {
  const navigate = useNavigate();

  const handleClickCreateEmailCampaign = () => {
    navigate("/email-campaign/new");
  };
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClickCreateEmailCampaign}
    >
      Create Email Campaign
    </Button>
  );
};

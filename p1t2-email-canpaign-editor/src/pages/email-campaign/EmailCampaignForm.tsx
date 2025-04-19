import SidebarLayout from "@/layout/SidebarLayout";

interface EmailCampaignFormMode {
  mode: "create" | "edit";
}

export const EmailCampaignForm = (props: EmailCampaignFormMode) => {
  return (
    <SidebarLayout title="Email camapgin / Create email campaign">
      <div>Form</div>
    </SidebarLayout>
  );
};

export default EmailCampaignForm;

import React from "react";

interface EmailCampaignFormMode {
  mode: "create" | "edit";
}

const EmailCampaignForm = (props: EmailCampaignFormMode) => {
  if (props.mode === "edit") {
    return <div>Edit</div>;
  }
  if (props.mode === "create") {
    return <div>Create</div>;
  }
};

export default EmailCampaignForm;

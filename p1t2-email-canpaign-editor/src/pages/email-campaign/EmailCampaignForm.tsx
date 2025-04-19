import SidebarLayout from "@/layout/SidebarLayout";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { DateTimePicker24Hr } from "@/components/DateTimePicker24Hr";
import { RichTextEditor } from "@/components/RichTextEditor";

interface EmailCampaignFormMode {
  mode: "create" | "edit";
}

interface FormData {
  campaign_name: string;
  subject: string;
  content: string;
  email: string;
  status: "active" | "inactive";
  schedule: Date;
}

export const EmailCampaignForm = (props: EmailCampaignFormMode) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      status: "active",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Email campaign created successfully!");
  };

  const [contentValue, setContentValue] = useState("");

  const statusInput = watch("status");
  const emailInput = watch("email") || "";
  const emailList = emailInput
    .split(",")
    .map((e) => e.trim())
    .filter((e) => e);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const invalidEmails = emailList.filter((email) => !emailRegex.test(email));

  return (
    <SidebarLayout title="Email camapgin / Create email campaign">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
          <div>
            <Label className="mb-2">Campaign Name</Label>
            <Input {...register("campaign_name", { required: true })} />
            {errors.campaign_name && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Email Subject</Label>
            <Input {...register("subject", { required: true })} />
            {errors.subject && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Email Content</Label>
            {/* <Editor onChange={(value) => setValue('content', value)} /> */}
            <RichTextEditor
              onChange={(content) => {
                setValue("content", content);
              }}
            />
            {errors.content && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Send To (comma-separated emails)</Label>
            <Textarea
              {...register("email", {
                required: true,
                validate: () =>
                  emailList.length <= 1000 && invalidEmails.length === 0,
              })}
            />
            <div className="text-sm text-muted-foreground mt-1">
              {emailList.length} / 1000 emails
            </div>
            {emailList.length > 1000 && (
              <p className="text-red-500 text-sm">
                Maximum 1000 emails allowed
              </p>
            )}
            {invalidEmails.length > 0 && (
              <p className="text-red-500 text-sm">Invalid emails detected</p>
            )}
          </div>

          <div className="mb-2">
            <Label>Status</Label>
            <Select
              value={statusInput}
              onValueChange={(val) =>
                setValue("status", val as "active" | "inactive")
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Schedule</Label>
            <DateTimePicker24Hr
              onChange={(newDate) => {
                if (newDate) setValue("schedule", newDate);
              }}
            />
            {errors.schedule && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => navigate("/email-campaign")}
            >
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </SidebarLayout>
  );
};

export default EmailCampaignForm;

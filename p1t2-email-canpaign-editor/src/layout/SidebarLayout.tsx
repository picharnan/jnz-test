import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Toaster } from "@/components/ui/sonner";

interface SidebarLayoutProps {
  children: React.ReactNode;
  tool?: React.ReactNode;
  title?: string;
}

export default function SidebarLayout(props: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full">
        <header className="flex w-full h-[40px] p-2">
          <div className="flex">
            <SidebarTrigger />
          </div>
          {props.title !== undefined && (
            <div className="pt-[2px] pl-[8px] flex">{props.title}</div>
          )}
          <div className="flex-1"></div>
          {props.tool !== undefined && (
            <div className="bg-amber-100 content-end align-self items-end">
              {props.tool}
            </div>
          )}
        </header>
        <div className="p-2">{props.children}</div>
      </main>
      <Toaster position="top-right" />
    </SidebarProvider>
  );
}

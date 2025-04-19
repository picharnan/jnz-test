import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SidebarLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function SidebarLayout(props: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex flex-col w-full">
        <header className="flex w-full">
          <div className="flex">
            <SidebarTrigger />
          </div>
          {props.title !== undefined && (
            <div className="pt-[2px] pl-[8px] flex">{props.title}</div>
          )}
        </header>
        <div className="p-2">{props.children}</div>
      </main>
    </SidebarProvider>
  );
}

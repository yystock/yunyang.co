import { SidebarNav } from "@/components/SideBar";

export const metadata = {
  title: "Dashboard",
  description: "dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full container mx-auto gap-8 min-h-screen">
      <div className="w-1/6 min-h-screen">
        <SidebarNav />
      </div>
      <div className="w-4/5"> {children}</div>
    </div>
  );
}

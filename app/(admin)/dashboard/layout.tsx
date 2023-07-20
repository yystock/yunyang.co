import { SidebarNav } from "@/components/SideBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full container mx-auto max-w-7xl gap-8">
      <div className="w-1/6 h-min-screen border-r-2 border-y-2">
        <SidebarNav />
      </div>
      <div className="w-4/5 h-full"> {children}</div>
    </div>
  );
}
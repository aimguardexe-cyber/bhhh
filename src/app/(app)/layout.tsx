import AppSidebar from '@/components/layout/app-sidebar';
import AppHeader from '@/components/layout/app-header';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import ClientOnly from '@/components/client-only';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar>
        <ClientOnly>
          <AppSidebar />
        </ClientOnly>
      </Sidebar>
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </>
  );
}

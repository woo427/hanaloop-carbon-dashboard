import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Carbon 대시보드</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>대시보드</SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

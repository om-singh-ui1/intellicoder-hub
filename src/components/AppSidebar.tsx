import { NavLink, useLocation } from "react-router-dom";
import { 
  SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar
} from "@/components/ui/sidebar";
import { Home, BookOpen, Code2, Lightbulb, MessageSquare, History, Trophy, Bookmark, BarChart3 } from "lucide-react";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Problem", url: "/problem", icon: BookOpen },
  { title: "Code Editor", url: "/editor", icon: Code2 },
  { title: "Solution", url: "/solution", icon: Lightbulb },
  { title: "Discussion", url: "/discussion", icon: MessageSquare },
  { title: "History", url: "/history", icon: History },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "My List", url: "/my-list", icon: Bookmark },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/70";

  return (
    <>
      <SidebarHeader>
        <div className="h-10 rounded-md bg-gradient-to-tr from-[hsl(var(--brand))] to-[hsl(var(--brand-variant))]" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end className={getNavCls} aria-label={item.title}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}

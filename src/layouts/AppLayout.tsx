import { PropsWithChildren, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarInset, Sidebar } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { RightPanel } from "@/components/RightPanel";
import { cn } from "@/lib/utils";

export default function AppLayout({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const location = useLocation();

  // Keyboard shortcuts: Ctrl/Cmd + [1..9]
  useEffect(() => {
    const map: Record<string, string> = {
      "1": "/problem",
      "2": "/editor",
      "3": "/solution",
      "4": "/discussion",
      "5": "/history",
      "6": "/leaderboard",
      "7": "/my-list",
      "8": "/analytics",
      "9": "/", // Home
    };

    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && map[e.key]) {
        e.preventDefault();
        navigate(map[e.key]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r" collapsible="icon">
          <AppSidebar />
        </Sidebar>

        <SidebarInset>
          <header className="h-14 flex items-center gap-3 border-b px-3 sticky top-0 bg-background/80 backdrop-blur z-50">
            <SidebarTrigger className="ml-1" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[hsl(var(--brand))] to-[hsl(var(--brand-variant))] shadow" />
              <span className="font-semibold tracking-tight">AlgoForge</span>
            </div>
            <nav className="ml-auto text-xs text-muted-foreground hidden md:block" aria-label="Keyboard shortcuts">
              Ctrl/⌘ + 1..9 to navigate
            </nav>
          </header>

          <div className="flex flex-1">
            <main className={cn("flex-1 min-w-0")}>{children ?? <Outlet />}</main>
            <aside className="hidden xl:block w-80 border-l"><RightPanel currentPath={location.pathname} /></aside>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

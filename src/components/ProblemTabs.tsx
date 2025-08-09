import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Code, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabItems = [
  { id: "description", label: "Description", icon: FileText, path: "/problem" },
  { id: "editorial", label: "Editorial", icon: BookOpen, path: "/solution" }, 
  { id: "solutions", label: "Solutions", icon: Code, path: "/solutions" },
  { id: "submissions", label: "Submissions", icon: BarChart3, path: "/submissions" },
  { id: "discuss", label: "Discuss", icon: MessageSquare, path: "/discussion" },
];

interface ProblemTabsProps {
  children: React.ReactNode;
  showFocusMode?: boolean;
  onFocusModeToggle?: () => void;
}

export function ProblemTabs({ children, showFocusMode = false, onFocusModeToggle }: ProblemTabsProps) {
  const location = useLocation();
  
  const getActiveTab = () => {
    const currentPath = location.pathname;
    const activeTab = tabItems.find(tab => tab.path === currentPath);
    return activeTab?.id || "description";
  };

  return (
    <div className="flex flex-col h-full">
      {/* Tab Navigation */}
      <div className="border-b bg-background/80 backdrop-blur sticky top-14 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 py-2">
              {tabItems.map((tab) => (
                <NavLink
                  key={tab.id}
                  to={tab.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )
                  }
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {showFocusMode && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onFocusModeToggle}
                  className="gap-2"
                >
                  <Maximize2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Focus</span>
                </Button>
              )}
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
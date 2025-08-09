import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, MessageSquare, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProblemHeaderProps {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topics: string[];
  companies: string[];
  liked?: boolean;
  solved?: boolean;
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-600 border-green-500/30",
  Medium: "bg-amber-500/20 text-amber-600 border-amber-500/30", 
  Hard: "bg-red-500/20 text-red-600 border-red-500/30"
};

export function ProblemHeader({ 
  title, 
  difficulty, 
  topics, 
  companies, 
  liked = false, 
  solved = false 
}: ProblemHeaderProps) {
  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">{title}</h1>
              {solved && (
                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Badge 
                variant="outline" 
                className={cn("font-medium", difficultyColors[difficulty])}
              >
                {difficulty}
              </Badge>
              
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>Acceptance: 67.2%</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="text-sm text-muted-foreground">Topics:</div>
              {topics.map((topic) => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>

            {companies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <div className="text-sm text-muted-foreground">Companies:</div>
                {companies.map((company) => (
                  <Badge key={company} variant="outline" className="text-xs">
                    {company}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Star className={cn("h-4 w-4", liked && "fill-yellow-400 text-yellow-400")} />
              {liked ? "Starred" : "Star"}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Add to List
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Discuss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
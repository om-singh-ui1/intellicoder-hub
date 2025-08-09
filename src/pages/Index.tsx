import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AlgoForge — AI Coding Challenges</title>
        <meta name="description" content="Practice coding with AI assistance. Read problems, code in Monaco, see solutions and analytics." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background">
        <div className="text-center space-y-6 p-6">
          <h1 className="text-4xl font-bold tracking-tight">Crack Coding Interviews with AI</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">A polished LeetCode-like experience with smart hints, Monaco editor, and rich analytics. Start with Clone Graph.</p>
          <div className="flex items-center gap-3 justify-center">
            <a href="/problem"><Button variant="hero" className="hover-scale">Open Problem</Button></a>
            <a href="/editor"><Button variant="outline" className="hover-scale">Open Editor</Button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppLayout from "./layouts/AppLayout";
import Index from "./pages/Index";
import Problem from "./pages/Problem";
import CodeEditor from "./pages/Editor";
import Solution from "./pages/Solution";
import Discussion from "./pages/Discussion";
import History from "./pages/History";
import Leaderboard from "./pages/Leaderboard";
import MyList from "./pages/MyList";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/problem" element={<Problem />} />
              <Route path="/editor" element={<CodeEditor />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/discussion" element={<Discussion />} />
              <Route path="/history" element={<History />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="/analytics" element={<Analytics />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

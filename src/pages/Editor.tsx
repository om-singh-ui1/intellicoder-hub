import { Helmet } from "react-helmet-async";
import Editor, { OnChange } from "@monaco-editor/react";
import { useCallback, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ConsolePanel } from "@/components/editor/ConsolePanel";
import { AIAssistant } from "@/components/editor/AIAssistant";
import { ProblemHeader } from "@/components/ProblemHeader";
import { ProblemTabs } from "@/components/ProblemTabs";
import { Play, Upload, TestTube } from "lucide-react";

export default function CodeEditor() {
  const { currentLanguage, languages, code, setLanguage, setCode, testCases, addRunResult, addTestCase } = useAppStore();
  const { toast } = useToast();
  const [focusMode, setFocusMode] = useState(false);

  const onChange: OnChange = useCallback((value) => {
    setCode(currentLanguage, value || "");
  }, [currentLanguage, setCode]);

  const simulateRun = (mode: 'run' | 'submit') => {
    const runtime = Math.floor(30 + Math.random() * 40);
    const memory = 40 + Math.random() * 30;
    let passed = testCases.length;
    let failed = 0;
    if (mode === 'submit' && Math.random() < 0.35) { failed = 1; passed = Math.max(0, passed - 1); }
    addRunResult({ id: Math.random().toString(36).slice(2), timestamp: Date.now(), runtimeMs: runtime, memoryMb: memory, passed, failed });
    toast({ title: mode === 'run' ? 'Run complete' : 'Submission complete', description: `${passed} passed, ${failed} failed — ${runtime}ms, ${memory.toFixed(1)}MB` });
  };

  const generateTest = () => {
    const id = Math.random().toString(36).slice(2);
    addTestCase({ id, name: `Auto ${testCases.length + 1}`, input: "[[1],[2],[3],[4]]", expected: "[[1],[2],[3],[4]]" });
    toast({ title: 'Generated 1 new edge case', description: 'AI proposed an additional test based on your code.' });
  };

  return (
    <>
      <Helmet>
        <title>Editor — Clone Graph | AlgoForge</title>
        <meta name="description" content="Monaco editor with AI assistance. Run and submit your Clone Graph solution." />
        <link rel="canonical" href="/editor" />
      </Helmet>
      
      {!focusMode && (
        <ProblemHeader
          title="133. Clone Graph"
          difficulty="Medium"
          topics={['Hash Table', 'Depth-First Search', 'Breadth-First Search', 'Graph']}
          companies={['Facebook', 'Amazon', 'Microsoft', 'Google']}
          liked={false}
          solved={false}
        />
      )}

      <ProblemTabs 
        showFocusMode={true} 
        onFocusModeToggle={() => setFocusMode(!focusMode)}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-4">
            <header className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <Select value={currentLanguage} onValueChange={(v) => setLanguage(v as any)}>
                <SelectTrigger className="w-40"><SelectValue placeholder="Language" /></SelectTrigger>
                <SelectContent>
                  {languages.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Button onClick={() => simulateRun('run')} className="gap-2">
                  <Play className="h-4 w-4" />
                  Run
                </Button>
                <Button variant="secondary" onClick={() => simulateRun('submit')} className="gap-2">
                  <Upload className="h-4 w-4" />
                  Submit
                </Button>
                <Button variant="outline" onClick={generateTest} className="gap-2">
                  <TestTube className="h-4 w-4" />
                  Tests
                </Button>
              </div>
            </header>

            <div className={`grid gap-4 ${focusMode ? 'grid-cols-1' : 'grid-cols-1 2xl:grid-cols-3'}`}>
              <Card className={focusMode ? 'col-span-1' : '2xl:col-span-2'}>
                <CardContent className="p-0">
                  <Editor
                    height={focusMode ? "70vh" : "50vh"}
                    theme="vs-dark"
                    language={currentLanguage}
                    value={code[currentLanguage]}
                    onChange={onChange}
                    options={{ 
                      fontFamily: 'Fira Code', 
                      fontLigatures: true, 
                      minimap: { enabled: false }, 
                      scrollbar: { vertical: 'auto' },
                      fontSize: 14,
                      lineHeight: 1.6
                    }}
                  />
                </CardContent>
              </Card>
              {!focusMode && <AIAssistant />}
            </div>

            {!focusMode && <ConsolePanel />}
          </div>
        </div>
      </ProblemTabs>
    </>
  );
}

import { Helmet } from "react-helmet-async";
import Editor, { OnChange } from "@monaco-editor/react";
import { useCallback } from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ConsolePanel } from "@/components/editor/ConsolePanel";
import { AIAssistant } from "@/components/editor/AIAssistant";

export default function CodeEditor() {
  const { currentLanguage, languages, code, setLanguage, setCode, testCases, addRunResult, addTestCase } = useAppStore();
  const { toast } = useToast();

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
      <div className="p-4 space-y-4 animate-fade-in">
        <header className="flex flex-wrap items-center gap-3">
          <Select value={currentLanguage} onValueChange={(v) => setLanguage(v as any)}>
            <SelectTrigger className="w-40"><SelectValue placeholder="Language" /></SelectTrigger>
            <SelectContent>
              {languages.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
          <div className="ml-auto flex items-center gap-2">
            <Button onClick={() => simulateRun('run')}>Run</Button>
            <Button variant="secondary" onClick={() => simulateRun('submit')}>Submit</Button>
            <Button variant="outline" onClick={generateTest}>Generate Tests</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
          <Card className="2xl:col-span-2">
            <CardContent className="p-0">
              <Editor
                height="50vh"
                theme="vs-dark"
                language={currentLanguage}
                value={code[currentLanguage]}
                onChange={onChange}
                options={{ fontFamily: 'Fira Code', fontLigatures: true, minimap: { enabled: false }, scrollbar: { vertical: 'auto' } }}
              />
            </CardContent>
          </Card>
          <AIAssistant />
        </div>

        <ConsolePanel />
      </div>
    </>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/store/useAppStore";

export function RightPanel({ currentPath }: { currentPath: string }) {
  const { testCases, runHistory } = useAppStore();
  const isEditor = currentPath.startsWith("/editor");
  const isProblem = currentPath.startsWith("/problem");

  if (isEditor) {
    return (
      <div className="p-3 space-y-3">
        <Tabs defaultValue="tests">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="tests">Test Cases</TabsTrigger>
            <TabsTrigger value="runs">Run History</TabsTrigger>
            <TabsTrigger value="tips">Optimization</TabsTrigger>
          </TabsList>
          <TabsContent value="tests">
            <Card>
              <CardHeader><CardTitle>Sample Tests</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                {testCases.map(tc => (
                  <div key={tc.id} className="text-sm">
                    <div className="font-medium">{tc.name}</div>
                    <div className="text-muted-foreground">Input: {tc.input}</div>
                    <div className="text-muted-foreground">Expected: {tc.expected}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="runs">
            <Card>
              <CardHeader><CardTitle>Recent Runs</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                {runHistory.length === 0 && (
                  <div className="text-sm text-muted-foreground">No runs yet.</div>
                )}
                {runHistory.map(r => (
                  <div key={r.id} className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-medium">{new Date(r.timestamp).toLocaleTimeString()}</div>
                      <div className="text-muted-foreground">{r.passed} passed, {r.failed} failed</div>
                    </div>
                    <div className="text-right">
                      <div className="text-foreground">{r.runtimeMs} ms</div>
                      <div className="text-muted-foreground">{r.memoryMb.toFixed(1)} MB</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tips">
            <Card>
              <CardHeader><CardTitle>Suggestions</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use a hashmap/Dictionary to memoize cloned nodes.</li>
                  <li>Prefer BFS for shallower graphs to reduce call stack depth.</li>
                  <li>Guard against null input early; return null immediately.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  if (isProblem) {
    return (
      <div className="p-3 space-y-3">
        <Card>
          <CardHeader><CardTitle>Metadata</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>Difficulty: <Badge variant="secondary" className="bg-[hsl(var(--destructive))]/15 text-[hsl(var(--destructive))]">Medium</Badge></div>
            <div>Time Limit: <span className="text-muted-foreground">2s</span></div>
            <div>Memory Limit: <span className="text-muted-foreground">256 MB</span></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Related Topics</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {['Graph','DFS','BFS','Hash Table','Clone'].map(t => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Similar Problems</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="story-link">Course Schedule</div>
            <div className="story-link">Graph Valid Tree</div>
            <div className="story-link">Connected Components</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-3">
      <Card>
        <CardHeader><CardTitle>Quick Tips</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Use Ctrl/⌘ + B to toggle the sidebar. Try Ctrl/⌘ + 1..9 to jump between sections.
        </CardContent>
      </Card>
    </div>
  );
}

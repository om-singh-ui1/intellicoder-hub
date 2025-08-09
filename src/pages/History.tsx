import { Helmet } from "react-helmet-async";
import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function History() {
  const { runHistory } = useAppStore();
  return (
    <>
      <Helmet>
        <title>Run History | AlgoForge</title>
        <meta name="description" content="Your recent runs and submissions for Clone Graph." />
        <link rel="canonical" href="/history" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
        <Card>
          <CardHeader><CardTitle>Submissions</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {runHistory.length === 0 && <div className="text-muted-foreground">No history yet.</div>}
            {runHistory.map(r => (
              <div key={r.id} className="flex items-center justify-between">
                <div>{new Date(r.timestamp).toLocaleString()}</div>
                <div>{r.passed} passed / {r.failed} failed</div>
                <div>{r.runtimeMs} ms</div>
                <div>{r.memoryMb.toFixed(1)} MB</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

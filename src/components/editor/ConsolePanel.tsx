import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ConsolePanel = () => {
  const { testCases, runHistory } = useAppStore();
  const last = runHistory[0];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Console Output</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {!last && <div className="text-muted-foreground">No output yet. Click RUN to execute sample tests.</div>}
        {last && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className={last.failed === 0 ? "bg-green-500/15 text-green-600" : "bg-red-500/15 text-red-600"}>
                {last.failed === 0 ? "All Passed" : `${last.failed} Failed`}
              </Badge>
              <span>{last.passed} passed / {last.failed} failed</span>
            </div>
            <div className="text-right">
              <div>{last.runtimeMs} ms</div>
              <div className="text-muted-foreground">{last.memoryMb.toFixed(1)} MB</div>
            </div>
          </div>
        )}
        <div className="space-y-2">
          {testCases.map((tc, idx) => {
            const pass = !last ? false : idx < last.passed;
            return (
              <div key={tc.id} className="flex items-center justify-between border rounded-md p-2">
                <div>
                  <div className="font-medium">{tc.name}</div>
                  <div className="text-muted-foreground">Input: {tc.input}</div>
                </div>
                <Badge variant="secondary" className={pass ? "bg-green-500/15 text-green-600" : "bg-yellow-500/15 text-yellow-600"}>{pass ? "Pass" : "Pending"}</Badge>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  );
};

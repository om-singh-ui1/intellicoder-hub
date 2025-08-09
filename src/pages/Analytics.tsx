import { Helmet } from "react-helmet-async";
import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function Analytics() {
  const { runHistory } = useAppStore();
  const data = runHistory.map((r) => ({ t: new Date(r.timestamp).toLocaleTimeString(), runtime: r.runtimeMs, memory: r.memoryMb }));

  return (
    <>
      <Helmet>
        <title>Analytics | AlgoForge</title>
        <meta name="description" content="Charts for runtime and memory usage across submissions." />
        <link rel="canonical" href="/analytics" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
        <Card>
          <CardHeader><CardTitle>Runtime Distribution</CardTitle></CardHeader>
          <CardContent style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.length ? data : [{ t: '—', runtime: 0 }] }>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="t" hide={data.length === 0} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="runtime" stroke="hsl(var(--brand))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Memory Trend</CardTitle></CardHeader>
          <CardContent style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.length ? data : [{ t: '—', memory: 0 }] }>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="t" hide={data.length === 0} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="memory" stroke="hsl(var(--brand-variant))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

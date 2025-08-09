import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const threads = [
  { id: '1', title: 'DFS vs BFS for this problem?', votes: 42, snippet: 'Both work. DFS is concise; BFS avoids deep recursion.' },
  { id: '2', title: 'Python recursion limit?', votes: 18, snippet: 'Use BFS for large graphs or setrecursionlimit.' },
];

export default function Discussion() {
  return (
    <>
      <Helmet>
        <title>Discussion — Clone Graph | AlgoForge</title>
        <meta name="description" content="Threaded Q&A with code highlighting and voting for Clone Graph." />
        <link rel="canonical" href="/discussion" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
        {threads.map(t => (
          <Card key={t.id} className="hover-scale">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-base">{t.title}</CardTitle>
              <Button size="sm" variant="secondary">▲ {t.votes}</Button>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t.snippet}</CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

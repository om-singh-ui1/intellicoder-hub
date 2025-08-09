import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Problem() {
  return (
    <>
      <Helmet>
        <title>Clone Graph — Problem | AlgoForge</title>
        <meta name="description" content="Clone Graph problem statement, examples, constraints, and related topics." />
        <link rel="canonical" href="/problem" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
        <header>
          <h1 className="text-2xl font-semibold">Clone Graph</h1>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <Badge className="bg-amber-500/20 text-amber-600">Medium</Badge>
            <div className="text-muted-foreground">Topics:</div>
            {['Graph','DFS','BFS','Hash Table'].map(t => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </header>

        <Card>
          <CardHeader><CardTitle>Problem Statement</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm leading-6">
            <p>Given a reference of a node in a <strong>connected undirected graph</strong>, return a <strong>deep copy</strong> (clone) of the graph. Each node contains a value <code>val</code> and a list <code>neighbors</code>.</p>
            <p><code>class Node {'{'} val: number; neighbors: Node[] {'}'}</code></p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Examples</CardTitle></CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ex1">
                <AccordionTrigger>Example 1</AccordionTrigger>
                <AccordionContent>
                  <div className="text-sm space-y-2">
                    <div>Input: <code>adjList = [[2,4],[1,3],[2,4],[1,3]]</code></div>
                    <div>Output: <code>[[2,4],[1,3],[2,4],[1,3]]</code></div>
                    <div className="text-muted-foreground">Explanation: Node 1 is connected to nodes 2 and 4, etc.</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Constraints</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Number of nodes in the graph is in the range [0, 100].</li>
              <li><code>1 &lt;= Node.val &lt;= 100</code></li>
              <li><code>Node.val</code> is unique for each node.</li>
              <li>There are no repeated edges and no self-loops.</li>
              <li>The graph is connected.</li>
            </ul>
          </CardContent>
        </Card>

        <section aria-label="Similar Problems" className="space-y-2">
          <h2 className="text-lg font-semibold">Similar Problems</h2>
          <div className="grid gap-2 text-sm">
            {['Course Schedule','Graph Valid Tree','Connected Components'].map(s => (
              <a key={s} href="#" className="story-link w-max">{s}</a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

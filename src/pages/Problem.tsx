import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProblemHeader } from "@/components/ProblemHeader";
import { ProblemTabs } from "@/components/ProblemTabs";
import { Badge } from "@/components/ui/badge";

export default function Problem() {
  return (
    <>
      <Helmet>
        <title>Clone Graph — Problem | AlgoForge</title>
        <meta name="description" content="Clone Graph problem statement, examples, constraints, and related topics." />
        <link rel="canonical" href="/problem" />
      </Helmet>
      
      <ProblemHeader
        title="133. Clone Graph"
        difficulty="Medium"
        topics={['Hash Table', 'Depth-First Search', 'Breadth-First Search', 'Graph']}
        companies={['Facebook', 'Amazon', 'Microsoft', 'Google']}
        liked={false}
        solved={false}
      />

      <ProblemTabs>
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl">
            <div className="space-y-6">

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

            <section aria-label="Similar Problems" className="space-y-4">
              <h2 className="text-lg font-semibold">Similar Problems</h2>
              <div className="grid gap-3">
                {[
                  { title: 'Copy List with Random Pointer', difficulty: 'Medium' },
                  { title: 'Course Schedule', difficulty: 'Medium' },
                  { title: 'Graph Valid Tree', difficulty: 'Medium' }
                ].map((problem) => (
                  <a 
                    key={problem.title} 
                    href="#" 
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-medium story-link">{problem.title}</span>
                    <Badge variant="outline" className="text-xs">
                      {problem.difficulty}
                    </Badge>
                  </a>
                ))}
              </div>
            </section>
            </div>
          </div>
        </div>
      </ProblemTabs>
    </>
  );
}

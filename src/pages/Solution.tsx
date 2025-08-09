import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProblemHeader } from "@/components/ProblemHeader";
import { ProblemTabs } from "@/components/ProblemTabs";
import { Badge } from "@/components/ui/badge";

export default function Solution() {
  return (
    <>
      <Helmet>
        <title>Solution — Clone Graph | AlgoForge</title>
        <meta name="description" content="DFS and BFS editorial for Clone Graph with complexity analysis." />
        <link rel="canonical" href="/solution" />
      </Helmet>
      
      <ProblemHeader
        title="133. Clone Graph"
        difficulty="Medium"
        topics={['Hash Table', 'Depth-First Search', 'Breadth-First Search', 'Graph']}
        companies={['Facebook', 'Amazon', 'Microsoft', 'Google']}
        liked={false}
        solved={true}
      />

      <ProblemTabs>
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl space-y-6">
        <Card>
          <CardHeader><CardTitle>DFS Solution</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Use recursion with a hashmap mapping original → cloned node. For each node, clone and recursively clone neighbors.</p>
            <pre className="bg-muted rounded-md p-3 overflow-auto"><code>{`function cloneGraph(node){
  if(!node) return node
  const mp = new Map()
  const dfs = (n)=>{
    if(mp.has(n)) return mp.get(n)
    const copy = { val: n.val, neighbors: [] }
    mp.set(n, copy)
    for(const nei of n.neighbors) copy.neighbors.push(dfs(nei))
    return copy
  }
  return dfs(node)
}`}</code></pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>BFS Solution</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>Iterative BFS using a queue. Clone nodes on discovery, connect edges when visiting neighbors.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Complexity</CardTitle></CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Time: O(V + E)</li>
              <li>Space: O(V)</li>
            </ul>
          </CardContent>
            </Card>
          </div>
        </div>
      </ProblemTabs>
    </>
  );
}

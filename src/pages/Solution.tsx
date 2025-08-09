import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Solution() {
  return (
    <>
      <Helmet>
        <title>Solution — Clone Graph | AlgoForge</title>
        <meta name="description" content="DFS and BFS editorial for Clone Graph with complexity analysis." />
        <link rel="canonical" href="/solution" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
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
    </>
  );
}

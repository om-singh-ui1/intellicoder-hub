import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AIAssistant = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);

  const push = (content: string) => setMessages((m) => [...m, { role: 'user', content }, { role: 'assistant', content: mockReply(content) }]);

  const mockReply = (prompt: string) => {
    if (prompt.includes("Explain")) return "This problem asks you to create a deep copy of an undirected graph. Use a map to avoid cloning nodes multiple times.";
    if (prompt.includes("Approach")) return "Use DFS or BFS. Maintain a hashmap from original node to cloned node. Traverse neighbors and connect clones.";
    if (prompt.includes("Optimize")) return "Use iterative BFS to avoid recursion overhead and reuse a preallocated queue for performance.";
    return "I'll help you reason about the solution and edge cases.";
  };

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>AI Assistant</CardTitle>
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" variant="secondary" onClick={() => push("Explain the Problem")}>Explain the Problem</Button>
          <Button size="sm" variant="secondary" onClick={() => push("Suggest an Approach")}>Suggest an Approach</Button>
          <Button size="sm" variant="secondary" onClick={() => push("Optimize My Code")}>Optimize My Code</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 max-h-64 overflow-auto">
        {messages.length === 0 && (
          <div className="text-sm text-muted-foreground">Ask the assistant for help understanding, planning, or optimizing.</div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-sm' : 'text-sm text-muted-foreground'}>
            <span className="font-medium mr-2">{m.role === 'user' ? 'You' : 'AI'}</span>
            {m.content}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

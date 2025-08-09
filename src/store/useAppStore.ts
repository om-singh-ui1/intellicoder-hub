import { create } from "zustand";

export type Language = "javascript" | "python" | "cpp" | "java";

export type TestCase = {
  id: string;
  name: string;
  input: string;
  expected: string;
};

export type RunResult = {
  id: string;
  timestamp: number;
  runtimeMs: number;
  memoryMb: number;
  passed: number;
  failed: number;
};

type CodeMap = Record<Language, string>;

type Store = {
  currentLanguage: Language;
  languages: Language[];
  code: CodeMap;
  testCases: TestCase[];
  runHistory: RunResult[];
  setLanguage: (lang: Language) => void;
  setCode: (lang: Language, value: string) => void;
  addTestCase: (tc: TestCase) => void;
  resetTestCases: (tcs: TestCase[]) => void;
  addRunResult: (r: RunResult) => void;
  clearRunHistory: () => void;
};

const initialCode: CodeMap = {
  javascript: `// Clone Graph - JavaScript\n// Definition for a Node.\n// function Node(val, neighbors) {\n//   this.val = val === undefined ? 0 : val;\n//   this.neighbors = neighbors === undefined ? [] : neighbors;\n// }\n\nfunction cloneGraph(node) {\n  if (!node) return node;\n  const map = new Map();\n  const dfs = (n) => {\n    if (map.has(n)) return map.get(n);\n    const copy = { val: n.val, neighbors: [] };\n    map.set(n, copy);\n    for (const nei of n.neighbors) copy.neighbors.push(dfs(nei));\n    return copy;\n  };\n  return dfs(node);\n}\n\nmodule.exports = { cloneGraph };\n`,
  python: `# Clone Graph - Python\n# class Node: ...\nfrom collections import deque\n\ndef cloneGraph(node):\n    if not node: return node\n    mp = {}\n    def dfs(n):\n        if n in mp: return mp[n]\n        copy = Node(n.val)\n        mp[n] = copy\n        for nei in n.neighbors:\n            copy.neighbors.append(dfs(nei))\n        return copy\n    return dfs(node)\n`,
  cpp: `// Clone Graph - C++\n// class Node { public: int val; vector<Node*> neighbors; ... };\nNode* cloneGraph(Node* node){\n    if(!node) return node;\n    unordered_map<Node*, Node*> mp;\n    function<Node*(Node*)> dfs = [&](Node* n){\n        if(mp.count(n)) return mp[n];\n        Node* copy = new Node(n->val);\n        mp[n] = copy;\n        for(auto nei: n->neighbors) copy->neighbors.push_back(dfs(nei));\n        return copy;\n    };\n    return dfs(node);\n}\n`,
  java: `// Clone Graph - Java\n// class Node { public int val; public List<Node> neighbors; ... }\nclass Solution {\n    public Node cloneGraph(Node node) {\n        if (node == null) return node;\n        Map<Node, Node> mp = new HashMap<>();\n        return dfs(node, mp);\n    }\n    private Node dfs(Node n, Map<Node, Node> mp){\n        if (mp.containsKey(n)) return mp.get(n);\n        Node copy = new Node(n.val);\n        mp.put(n, copy);\n        for (Node nei: n.neighbors) copy.neighbors.add(dfs(nei, mp));\n        return copy;\n    }\n}\n`,
};

const sampleTests: TestCase[] = [
  { id: "t1", name: "Two squares", input: "[[2,4],[1,3],[2,4],[1,3]]", expected: "[[2,4],[1,3],[2,4],[1,3]]" },
  { id: "t2", name: "Single node", input: "[[]]", expected: "[[]]" },
];

export const useAppStore = create<Store>((set) => ({
  currentLanguage: "javascript",
  languages: ["javascript", "python", "cpp", "java"],
  code: initialCode,
  testCases: sampleTests,
  runHistory: [],
  setLanguage: (lang) => set({ currentLanguage: lang }),
  setCode: (lang, value) => set((s) => ({ code: { ...s.code, [lang]: value } })),
  addTestCase: (tc) => set((s) => ({ testCases: [...s.testCases, tc] })),
  resetTestCases: (tcs) => set({ testCases: tcs }),
  addRunResult: (r) => set((s) => ({ runHistory: [r, ...s.runHistory].slice(0, 20) })),
  clearRunHistory: () => set({ runHistory: [] }),
}));
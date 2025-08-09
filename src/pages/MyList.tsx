import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyList() {
  const items = [
    { title: 'Clone Graph', difficulty: 'Medium', tags: ['Graph','DFS'] },
  ];
  return (
    <>
      <Helmet>
        <title>My List | AlgoForge</title>
        <meta name="description" content="Bookmarked problems and progress filters." />
        <link rel="canonical" href="/my-list" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
        <Card>
          <CardHeader><CardTitle>Bookmarks</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {items.map((it, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.title}</div>
                  <div className="flex gap-2 mt-1">{it.tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}</div>
                </div>
                <Badge className="bg-amber-500/20 text-amber-600">{it.difficulty}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

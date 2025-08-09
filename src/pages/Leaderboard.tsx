import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Leaderboard() {
  const rows = [
    { user: 'Alice', solved: 123, xp: 4520 },
    { user: 'Bob', solved: 98, xp: 3890 },
    { user: 'Charlie', solved: 76, xp: 3020 },
  ];
  return (
    <>
      <Helmet>
        <title>Leaderboard | AlgoForge</title>
        <meta name="description" content="Top performers across coding challenges." />
        <link rel="canonical" href="/leaderboard" />
      </Helmet>
      <div className="p-4 space-y-4 animate-fade-in">
        <Card>
          <CardHeader><CardTitle>Top Coders</CardTitle></CardHeader>
          <CardContent className="grid gap-2 text-sm">
            {rows.map((r, i) => (
              <div className="flex items-center justify-between" key={i}>
                <div className="font-medium">#{i+1} {r.user}</div>
                <div className="text-muted-foreground">{r.solved} solved · {r.xp} XP</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

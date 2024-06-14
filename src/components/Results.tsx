import Card from "./share/Card";
import { Result } from "@/types/types";
interface ResultsProps {
  results: Result[];
}
export default function Results({ results }: ResultsProps) {
  return (
    <div className="max-w-6xl mx-auto py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results &&
        results.map((result) => {
          return <Card key={result.id} result={result} />;
        })}
    </div>
  );
}

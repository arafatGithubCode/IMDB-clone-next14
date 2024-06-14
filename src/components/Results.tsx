interface Result {
  id: string;
  original_name: string;
  overview: string;
  name: string;
}
interface ResultsProps {
  results: Result[];
}
export default function Results({ results }: ResultsProps) {
  return (
    <div>
      {results &&
        results.map((result) => {
          return (
            <div key={result.id}>
              <h1>{result.original_name}</h1>
            </div>
          );
        })}
    </div>
  );
}

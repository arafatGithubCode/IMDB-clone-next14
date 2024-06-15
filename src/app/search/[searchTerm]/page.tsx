import Results from "@/components/share/Results";

type SearchProps = { params: { searchTerm: string } };

const SearchPage = async ({ params }: SearchProps) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 ? (
        <h1>No Result found</h1>
      ) : (
        results && <Results results={results} />
      )}
    </div>
  );
};

export default SearchPage;

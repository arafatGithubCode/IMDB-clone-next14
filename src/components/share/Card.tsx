import { Result } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

interface CardProps {
  result: Result;
}
const Card = ({ result }: CardProps) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={500}
          alt={result.name}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200"
        />
        <div className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="font-bold text-lg truncate">
            {result.name || result.original_name || result.title}
          </h2>
          <p className="flex items-center">
            {result.first_air_date || result.release_date}{" "}
            <FiThumbsUp className="h-5 mr-1 ml-3" />{" "}
            {result.vote_count || result.vote_average}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

import requests from "../utils/request";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ movieData }) => {
  console.log(movieData);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex justify-center">
      {movieData.results.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
};

export default Results;

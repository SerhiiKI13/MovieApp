import {IMoviesResults} from "./ImoviesResults.ts";


export interface IMoviesModelsMainResponse {
  page: number;
  results: IMoviesResults[];
  total_pages: number;
  total_results: number;
}
export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
  }



  export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}





  export type FilterOption = "title" | "genre";

    export interface Review{
    id: string;
    content: string
    author: string
  }

    export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }
  
  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
     action: (m: BaseMovieProps) => React.ReactNode;
  }
  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
    selectFavourite?: (movieId: number) => void; // Add this line
  }




  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
       iso_3166_1: string,
       name: string      
    }[];
  }


  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; 
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }



export interface ActorProps {
id: number;
name: string;
profile_path: string;
known_for_department: string;
popularity: number;
}

export interface ActorApiResponse {
  page: number;
  results: ActorProps[];
  total_pages: number;
  total_results: number;
}

export interface BaseTVProps {
  id: number;
  name: string;
  poster_path: string | null;
  overview: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}
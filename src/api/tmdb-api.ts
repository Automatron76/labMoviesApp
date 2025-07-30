export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

  
 export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1&region=IE`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to fetch upcoming movies. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};
  
  export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
  ).then( (response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
   export const getMovieImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
    });
};

    export const getMovieReviews = (id: string | number) => { //movie id can be string or number
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });

      
  };

export const getPopularMovies = (page: number = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&sort_by=vote_average.desc&vote_average.gte=8&vote_count.gte=500&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to fetch popular movies. Response status: ${response.status}`);
    }
    return response.json();

  })
  .then((json) => json.results)
  .catch((error) => {
    throw error;
  });
};

 


export const getPopularActors = (page: number = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to fetch popular actors. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

export const getPopularActorsBio = (id: number) => {
return fetch(
  `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to fetch popular actors Bio. Response status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => data.biography)
  .catch((error) => {
    throw error;
  });
}

export const getPopularTVSeries = (page: number = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get TV series list. Response status: ${response.status}`);
    }
    return response.json();
  }).then((json) => json.results);
  
};

export const getTVSeriesImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch TV series images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error;
    });
};
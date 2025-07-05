import { useQuery } from '@tanstack/react-query';
import { getUpcomingMovies } from '../api/tmdb-api';

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: getUpcomingMovies,
    staleTime: 360000, // Cache for 1 hour
     
  });
};
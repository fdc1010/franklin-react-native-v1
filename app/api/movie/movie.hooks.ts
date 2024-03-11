import { useQuery } from '@tanstack/react-query';
import { useMovieRequests } from './movie.requests';

function useMovies() {
    const { getMovies } = useMovieRequests();
    
    return useQuery({
        queryFn: getMovies,
        queryKey: ['movies'],
    });
}
export {
    useMovies
};

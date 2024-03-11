import { movieGetTransformer } from '@app/lib/movie/responses/movieGet.builder';
import { MovieGetParams } from '@app/lib/movie/responses/movieGet.types';
import { moviesGetTransformer } from '@app/lib/movie/responses/moviesGet.builder';

const options = { hmethod: 'GET', headers: {
    'Content-Type': 'application/json'
} }
const STATUS = {
    ok:"OK",
    failed:"FAILED"
} as const;
async function searchMovies(title: MovieGetParams) {
    return fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/?s=${title ?? ''}&apikey=${process.env.EXPO_PUBLIC_OMDB_API_KEY}`, options)
    .then(async (response) => {
            const movie = await response.json();
    
            return { status: STATUS.ok, message: { code: response.status.toString() }, movie};
            
        }).then((data) => {
            return movieGetTransformer(data);
        })
        .catch(err => {
            throw err;
        });
}
async function getMovies() {
    return fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/?t=the&apikey=${process.env.EXPO_PUBLIC_OMDB_API_KEY}`,options).then(async response => {
        let movies = await response.json();

        return { status: STATUS.ok, message: { code: response.status.toString() }, movies};
        
    }).then((data) => {
        return moviesGetTransformer(data);
    })
    .catch(err => {
        throw err;
    });
    
}

export const useMovieRequests = () => {

    return {
        getMovies: () => getMovies(),
        searchMovies: (title: MovieGetParams) => searchMovies(title),
    };
};

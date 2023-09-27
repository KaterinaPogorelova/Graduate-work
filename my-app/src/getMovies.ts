
const TRENDSSURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US'
const MOVIESURL = 'https://api.themoviedb.org/3/discover/movie'
const DETAILEDMOVIE = 'https://api.themoviedb.org/3/movie/'
const GENRESURL = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
const COUNTRIESURL = 'https://api.themoviedb.org/3/configuration/countries'
const RECOMMENDEDURL = 'https://api.themoviedb.org/3/movie/'
const SEARCHMOVIESURL = 'https://api.themoviedb.org/3/search/movie?query='
const PAGE = '&page='
const language = '?language=en-US'
const VOTECOUNT = '&vote_count.gte=80'
const SORTBY = '&sort_by='
const GENRES = '&with_genres='

export type Movie = {
	adult: boolean,
	backdrop_path: string,
	genre_ids: number[],
	id: number,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}

export type DetailedMovie = {
	adult: boolean,
	backdrop_path: string,
	belongs_to_collection: {
		id: number,
		name: string,
		poster_path: string,
		backdrop_path: string
	},
	budget?: number,
	genres: {
		id: number,
		name: string
	}[],
	homepage: string,
	id: number,
	imdb_id: string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path?: string,
	production_companies?:
	{
		id: number,
		logo_path: string,
		name: string,
		origin_country: string
	}[],
	production_countries?:
	{
		iso_3166_1: string,
		name: string
	}[],
	release_date: string,
	revenue?: number,
	runtime: number,
	spoken_languages:
	{
		english_name: string,
		iso_639_1: string,
		name: string
	}[],
	status: string,
	tagline: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}
export type RecommendedMovie = {
	adult: boolean,
	backdrop_path: string,
	id: number,
	title: string,
	original_language: string,
	original_title: string,
	overview: string,
	poster_path: string,
	media_type: string,
	genre_ids: number[],
	popularity: number,
	release_date: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}

export type SearchedMovie = {
	adult: boolean,
	backdrop_path: string,
	genre_ids: number[],
	id: number,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number
}

type Genres = {
	genres:
	{
		id: number,
		name: string
	}[]
}

type Country = {
	iso_3166_1: string,
	english_name: string,
	native_name: string
}

type MovieResponse = {
	page: number,
	results: Movie[],
	total_pages: number,
	total_results: number
}
type RecommendMovieResponse = {
	page: number,
	results: RecommendedMovie[],
	total_pages: number,
	total_results: number
}

type SearchedMovieResponse = {
	page: number,
	results: SearchedMovie[],
	total_pages: number,
	total_results: number
}

export type FilterParams = {
	sortBy?: 'vote_average.desc' | 'primary_release_date.desc',
	genres?: string,
	releaseDateGTE?: string,
	releaseDateLTE?: string,
	voteGTE?: number,
	voteLTE?: number
}

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJkYmMwM2U2OGRjZjEyYmZmNWE3NGRkNGE2YWY0OSIsInN1YiI6IjY0ODc3OWM5ZTI3MjYwMDEyODdiMDY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I2NsuXv3MLx180N5Wugei29sbQFZOZ5wBb3b0ZI36uA'
	}
};

export const getMovies = async (pageNum: number, { sortBy, genres, releaseDateGTE, releaseDateLTE, voteGTE, voteLTE }: FilterParams) => {
	let moviesUrl = MOVIESURL + language + PAGE + pageNum + SORTBY + sortBy + VOTECOUNT;
	if (genres) {
		moviesUrl += GENRES + genres
	}
	if (releaseDateGTE && releaseDateGTE !== releaseDateLTE) {
		moviesUrl += '&primary_release_date.gte=' + releaseDateGTE
	}
	if (releaseDateLTE && releaseDateGTE !== releaseDateLTE) {
		moviesUrl += '&primary_release_date.lte=' + releaseDateLTE
	}
	if (releaseDateGTE && releaseDateLTE && releaseDateGTE === releaseDateLTE) {
		moviesUrl += '&year=' + releaseDateGTE
	}
	if (voteGTE) {
		moviesUrl += '&vote_average.gte=' + voteGTE
	}
	if (voteLTE) {
		moviesUrl += '&vote_average.lte=' + voteLTE
	}
	const newUrl = new URL(moviesUrl)
	const response = await fetch(newUrl, options);
	const results: MovieResponse = await response.json();
	return results.results
}

export const getMovieGenres = async (id: number) => {
	const movieUrl = new URL(DETAILEDMOVIE + id + language);
	const response = await fetch(movieUrl, options);
	const result: DetailedMovie = await response.json();
	const genres = result.genres ? result.genres.map((genre) => genre.name) : []
	return genres
}

export const getMovie = async (id: number) => {
	const movieUrl = new URL(DETAILEDMOVIE + id + language);
	const response = await fetch(movieUrl, options);
	const result: DetailedMovie = await response.json();
	return result.id ? result : null
}
export const getTrends = async (pageNum: number) => {
	const moviesUrl = new URL(TRENDSSURL + PAGE + pageNum);
	const response = await fetch(moviesUrl, options);
	const results: MovieResponse = await response.json();
	return results.results
}

export const getGenres = async () => {
	const genresUrl = new URL(GENRESURL);
	const response = await fetch(genresUrl, options);
	const result: Genres = await response.json();
	return result.genres
}

export const getCountries = async () => {
	const countriesUrl = new URL(COUNTRIESURL);
	const response = await fetch(countriesUrl, options);
	const result: Country[] = await response.json();
	const countries = result.map((country) => country.english_name)
	const origCountries = new Set(countries)
	const arrCountries = Array.from(origCountries)
	return arrCountries
}

export const getRecommended = async (id: number) => {
	const moviesUrl = new URL(RECOMMENDEDURL + id + '/recommendations' + language);
	const response = await fetch(moviesUrl, options);
	const results: RecommendMovieResponse = await response.json();
	return results.results ? results.results.slice(0, 4) : []
}

export const searchMovies = async (searchValue: string, page: number) => {
	const searchUrl = new URL(SEARCHMOVIESURL + searchValue + '&include_adult=false&language=en-US&page=' + page)
	const response = await fetch(searchUrl, options);
	const results: SearchedMovieResponse = await response.json();
	return results.results
}
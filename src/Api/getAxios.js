import axios from 'axios';

export function getAxiosList() {
    const url = "https://api.themoviedb.org/3/trending/movie/day";
    const parameters = {
        key: '866c6d075a3e37e8cd8cfb5e85076bc4',
    }
    const { key } = parameters;
    return axios.get(`${url}?api_key=${key}&page=1`)
};

export function getAxiosID(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const parameters = {
        key: '866c6d075a3e37e8cd8cfb5e85076bc4',
    }
    const { key } = parameters;
    
    return axios.get(`${url}?api_key=${key}`)
};

export function getSearchFilms(searchFilms) {
    const url = "https://api.themoviedb.org/3/search/movie";
    const parameters = {
        key: '866c6d075a3e37e8cd8cfb5e85076bc4',
        nameFilm: searchFilms,
    }
    const { key, nameFilm } = parameters;
    
    return axios.get(`${url}?api_key=${key}&query=${nameFilm}&page=1`)
};

export function getAxiosActors(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const parameters = {
        key: '866c6d075a3e37e8cd8cfb5e85076bc4',
    }
    const { key } = parameters;
    
    return axios.get(`${url}?api_key=${key}`)
};

export function getAxiosReviews(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    const parameters = {
        key: '866c6d075a3e37e8cd8cfb5e85076bc4',
    }
    const { key } = parameters;
    
    return axios.get(`${url}?api_key=${key}`)
};
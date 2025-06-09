export const TMDB_CONFIG = {
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN || '',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN || ''}`,
  }
}

export const fetchMovies = async (query?: string) => {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}&sort_by=popularity.desc`
    : `/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(`${TMDB_CONFIG.baseUrl}${endpoint}`, {
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error('Failed to fetch movies', response.statusText);
  }

  const data = await response.json();

  return data.results;
}
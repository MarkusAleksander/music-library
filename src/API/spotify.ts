/**
 * * Spotify API endpoints
 */

const BASE_URL: string = `https://api.spotify.com/v1`;

/*** ---- * ALBUMS ---- ***/
export const GET_ALBUMS: string = `${BASE_URL}/albums`;
export const GET_ALBUM: string = `${GET_ALBUMS}/:id`;
export const GET_ALBUM_TRACKS: string = `${GET_ALBUM}/tracks`;

/*** ---- * ARTISTS ---- ***/
export const GET_ARTISTS: string = `${BASE_URL}/artists`;
export const GET_ARTIST: string = `${GET_ARTISTS}/:id`;
export const GET_ARTIST_ALBUMS: string = `${GET_ARTIST}/albums`;

/*** ---- * SEARCH ---- ***/
export const SEARCH: string = `${BASE_URL}/search`;

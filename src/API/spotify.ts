/**
 * * Spotify API endpoints
 */

const BASE_URL: string = `https://api.spotify.com`;

/*** ---- * ALBUMS ---- ***/
export const GET_ALBUM: string = `${BASE_URL}/albums/:id`;
export const GET_ALBUM_TRACKS: string = `${GET_ALBUM}/tracks`;

/*** ---- * ARTISTS ---- ***/
export const GET_ARTIST: string = `${BASE_URL}/artists/:id`;
export const GET_ARTIST_ALBUMS: string = `${GET_ARTIST}/albums`;

/*** ---- * SEARCH ---- ***/
export const SEARCH: string = `${BASE_URL}/search`;

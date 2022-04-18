import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import { GET_ALBUMS } from "../../API/spotify";
import useAuth0 from "../../utils/Auth0/useAuth0";

const REQUEST_ALBUM: string = "REQUEST_ALBUM";

/**
 * * Request single album
 */
const useRequestSpotifyAlbumService = () => {
  const {
    httpClear,
    httpError,
    httpIsLoading,
    httpResponseData,
    httpSendRequest,
  } = useHttp();

  const { getAccessToken } = useAuth0();

  /**
   * album
   */
  const [album, setAlbum] = useState<any>([]);

  /**
   * Request album data
   */
  const requestAlbum = (albumId: string, market?: string) => {
    if (httpIsLoading || httpError) return;

    // * Clear current album
    setAlbum([]);

    httpSendRequest(
      `${GET_ALBUMS}?ids=${albumId}&market=${market || "GB"}`,
      "get",
      {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
      null,
      REQUEST_ALBUM,
      null
    );
  };

  /**
   * * Reset service
   */
  const resetService = () => {
    setAlbum([]);
    httpClear();
  };

  /**
   * * Handle response
   */
  useEffect(() => {
    if (!httpIsLoading && !httpError && httpResponseData) {
      setAlbum(httpResponseData);
      httpClear();
    }
  }, [httpClear, httpError, httpIsLoading, httpResponseData]);

  return {
    loadedAlbums: album,
    requestAlbum: requestAlbum,
    resetService: resetService,
    loadingAlbum: httpIsLoading,
    albumRequestError: httpError,
  };
};

export default useRequestSpotifyAlbumService;

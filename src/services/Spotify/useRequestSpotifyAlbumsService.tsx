import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import { GET_ALBUMS } from "../../API/spotify";
import useAuth0 from "../../utils/Auth0/useAuth0";

const REQUEST_ALBUMS: string = "REQUEST_ALBUMS";

/**
 * * Request multiple albums
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
   * Albums
   */
  const [albums, setAlbums] = useState<Array<any>>([]);

  /**
   * Request album data
   */
  const requestAlbums = (albumIds: Array<string>, market?: string) => {
    if (httpIsLoading || httpError) return;

    // * Clear current albums
    setAlbums([]);

    httpSendRequest(
      `${GET_ALBUMS}?ids=${albumIds.join(",")}&market=${market || "GB"}`,
      "get",
      {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
      null,
      REQUEST_ALBUMS,
      null
    );
  };

  /**
   * * Reset service
   */
  const resetService = () => {
    setAlbums([]);
    httpClear();
  };

  /**
   * * Handle response
   */
  useEffect(() => {
    if (!httpIsLoading && !httpError && httpResponseData) {
      setAlbums(httpResponseData.albums);
      httpClear();
    }
  }, [httpClear, httpError, httpIsLoading, httpResponseData]);

  return {
    loadedAlbums: albums,
    requestAlbums: requestAlbums,
    resetService: resetService,
    loadingAlbums: httpIsLoading,
    albumRequestError: httpError,
  };
};

export default useRequestSpotifyAlbumService;

import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import useAuth0 from "../../utils/Auth0/useAuth0";
import { SEARCH } from "../../API/spotify";

type searchType =
  | "album"
  | "artist"
  | "playlist"
  | "track"
  | "show"
  | "episode";

const SPOTIFY_SEARCH: string = "SPOTIFY_SEARCH";

/**
 * * Run a spotify search
 */
const useRequestSpotifySearchService = () => {
  const {
    httpClear,
    httpError,
    httpIsLoading,
    httpResponseData,
    httpSendRequest,
  } = useHttp();

  const { getAccessToken } = useAuth0();

  /**
   * * Search Result
   */
  const [searchResult, setSearchResult] = useState<any>(null);

  /**
   * Do search
   */
  const searchSpotify = ({
    query,
    type,
    limit,
    page,
    market,
  }: {
    query: string;
    type: Array<searchType>;
    limit: 10 | 25 | 50;
    page: number;
    market?: string;
  }) => {
    if (httpIsLoading || httpError) return;

    // * Clear previous search result
    setSearchResult(null);

    httpSendRequest(
      `${SEARCH}?q=${query}&type=${type.join(",")}&limit=${limit}&offset=${
        (page - 1) * limit
      }&market=${market || `GB`}`,
      "get",
      {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
      null,
      SPOTIFY_SEARCH,
      null
    );
  };

  /**
   * * Reset service
   */
  const resetService = () => {
    setSearchResult([]);
    httpClear();
  };

  /**
   * * Handle response
   */
  useEffect(() => {
    if (!httpIsLoading && !httpError && httpResponseData) {
      setSearchResult(httpResponseData);
      httpClear();
    }
  }, [httpClear, httpError, httpIsLoading, httpResponseData]);

  return {
    searchResults: searchResult,
    searchSpotify: searchSpotify,
    resetService: resetService,
    loadingSearch: httpIsLoading,
    searchError: httpError,
  };
};

export default useRequestSpotifySearchService;

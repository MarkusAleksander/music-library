import ContainerHero from "../components/ContainerHero/ContainerHero";
import Section from "../components/UI/Section/Section";
import useRequestSpotifySearchService from "../services/Spotify/useRequestSpotifySearchService";

/**
 * * Container for Searching Spotify
 */
const Search = () => {
  const {
    loadingSearch,
    resetService,
    searchError,
    searchResults,
    searchSpotify,
  } = useRequestSpotifySearchService();

  const handleSearch = () => {
    searchSpotify({
      query: "burning witches",
      type: ["album", "artist"],
      limit: 10,
      page: 1,
      market: "GB",
    });
  };

  return (
    <>
      <ContainerHero title={"Search"} subtitle={"Search Spotify"} />
      <Section>
        <button onClick={handleSearch}>Search</button>
        {loadingSearch && `is Loading search`}
        {searchResults && JSON.stringify(searchResults)}
        {searchError && searchError}
      </Section>
    </>
  );
};

export default Search;

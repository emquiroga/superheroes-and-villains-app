import SearchForm from "../../components/SearchForm/SearchForm";

const Search = () => {
  return (
    <div className="search-page">
      <div className="container">
        <div>
          <h1 className="search-title text-white">
            Seek across the multiverse
          </h1>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default Search;

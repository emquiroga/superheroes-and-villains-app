import SearchForm from "../../components/SearchForm/SearchForm";

const Search = () => {
  return (
    <div className="search-page">
      <div className="container-fluid">
        <div className="title-box">
          <h1 className="search-title gradient-text">
            Seek across the multiverse
          </h1>
        </div>

        <SearchForm />
      </div>
    </div>
  );
};

export default Search;

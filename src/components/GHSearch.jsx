import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [inputSearchField, setInputSearchField] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    let response = await axios.get(
      `https://api.github.com/search/users?q=barack`
    );
    setSearchResults(response);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Input
        data-cy="input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button data-cy="search-button" name="search" onClick={fetchData}>
        Search
      </Button>
      <p data-cy="search-results">{searchResults}</p>
    </>
  );
};

export default GHSearch;

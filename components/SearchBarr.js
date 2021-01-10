import React from "react";
import { SearchBar } from "react-native-elements";

// why the double R?
const SearchBarr = ({ setQuery, query }) => {
  return (
    <SearchBar
      placeholder="Type Here..."
      placeholderTextColor="white"
      onChangeText={(event) => setQuery(event)}
      value={query}
    />
  );
};

export default SearchBarr;

import React from "react";
import { SearchBar } from "react-native-elements";

const SearchBarr = ({ setQuery, query }) => {
  return (
    <SearchBar
      placeholder="Type Here..."
      placeholderTextColor="white"
      onChangeText={(event) => setQuery(event)}
      value={query}
      // lightTheme={true}
    />
  );
};

export default SearchBarr;

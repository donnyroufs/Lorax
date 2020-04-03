import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/core";
import { setQuery, getSearchResults } from "../redux/actions/search.actions";
import queryString from "query-string";

/* eslint-disable */

const Searchbar = ({ placeholder }) => {
  const match = useRouteMatch("/:id");

  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleOnChange = ({ target }) => setValue(target.value);

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(setQuery(value));
    history.push({
      search: `?search=${value}`
    });
    setValue("");
  };

  useEffect(() => {
    if (history.location.search.length >= 1) {
      const query = queryString.parse(history.location.search);
      dispatch(setQuery(query.search));
      dispatch(getSearchResults(undefined, match.params.id));
      setValue("");
    }
  }, []);

  return (
    <InputGroup
      as="form"
      border="none"
      marginLeft="1rem"
      width="400px"
      onSubmit={handleOnSubmit}
    >
      <InputLeftElement children={<Icon name="search" color="gray.300" />} />
      <Input
        type="search"
        placeholder={placeholder}
        border="none"
        value={value}
        onChange={handleOnChange}
      />
    </InputGroup>
  );
};

export default Searchbar;

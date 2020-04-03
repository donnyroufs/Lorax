import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/core";
import { setQuery } from "../redux/actions/search.actions";

const Searchbar = ({ placeholder }) => {
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

import { useState } from "react";
import { InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/core";

const Searchbar = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const handleOnChange = ({ target }) => setValue(target.value);

  return (
    <InputGroup border="none">
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

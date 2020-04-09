import React, { useState } from "react";
import { Avatar, Button, useToast } from "@chakra-ui/core";

const Account = () => {
  const [isAuth, setIsAuth] = useState(false);
  const toast = useToast();

  const handleOnClick = () => {
    setIsAuth(!isAuth);
    toast({
      position: "top",
      title: "Warning",
      description: "There's currently no auth support.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <React.Fragment>
      {isAuth ? (
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          onClick={handleOnClick}
        />
      ) : (
        <Button
          backgroundColor="dark"
          borderRadius="7px"
          outline="0"
          border="0"
          padding=".5rem 2rem"
          color="white"
          fontSize="sm"
          cursor="pointer"
          onClick={handleOnClick}
          _hover={{
            textDecor: "none",
            opacity: ".8",
          }}
        >
          Log In
        </Button>
      )}
    </React.Fragment>
  );
};

export default Account;

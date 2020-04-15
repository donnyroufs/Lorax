import React, { useState } from "react";
import { Avatar, useToast, Link } from "@chakra-ui/core";

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
        <Link
          href="https://discordapp.com/api/oauth2/authorize?client_id=693407160725536810&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify"
          backgroundColor="dark"
          borderRadius="7px"
          outline="0"
          border="0"
          padding=".5rem 2rem"
          color="white"
          fontSize="sm"
          cursor="pointer"
          _hover={{
            textDecor: "none",
            opacity: ".8",
          }}
        >
          Log In
        </Link>
      )}
    </React.Fragment>
  );
};

export default Account;

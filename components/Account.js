import { useState } from "react";
import { Avatar, Button } from "@chakra-ui/core";

const Account = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <React.Fragment>
      {isAuth ? (
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      ) : (
        <Button
          backgroundColor="dark"
          borderRadius="full"
          outline="0"
          border="0"
          padding=".5rem 2rem"
          color="white"
          fontSize="sm"
          cursor="pointer"
        >
          Log In
        </Button>
      )}
    </React.Fragment>
  );
};

export default Account;

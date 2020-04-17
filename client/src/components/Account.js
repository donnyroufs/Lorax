import React, { useRef } from "react";
import {
  Avatar,
  Link,
  Text,
  Box,
  useDisclosure,
  Scale,
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogOverlay,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
} from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.actions";

const Account = () => {
  const dispatch = useDispatch();
  const { username, avatar, isAuthenticated: isAuth } = useSelector(
    (state) => state.auth
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  const onLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <React.Fragment>
      {isAuth ? (
        <React.Fragment>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              name={username}
              src={avatar}
              order="2"
              cursor="pointer"
              onClick={onOpen}
            />
            <Text order="1" mr="1rem">
              {username}
            </Text>
          </Box>
          <Scale in={isOpen}>
            {(styles) => (
              <AlertDialog
                finalFocusRef={btnRef}
                onClose={onClose}
                isOpen={true}
              >
                <AlertDialogOverlay opacity={styles.opacity} />
                <AlertDialogContent {...styles}>
                  <AlertDialogHeader>Sign out?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogFooter>
                    <Button variantColor="red" ml={3} onClick={onLogout}>
                      Log out
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </Scale>
        </React.Fragment>
      ) : (
        <Link
          href="https://discordapp.com/api/oauth2/authorize?client_id=693407160725536810&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fauth%2Fredirect&response_type=code&scope=identify"
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

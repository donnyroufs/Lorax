import { useLocation } from "react-router-dom";

const useGuild = () => {
  const { pathname } = useLocation();

  return pathname === "/" || pathname === "/about" || pathname.includes("profile");
};

export default useGuild;

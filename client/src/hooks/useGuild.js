import { useLocation } from "react-router-dom";

const useGuild = () => {
  const { pathname } = useLocation();

  return pathname === "/" || pathname === "/about";
};

export default useGuild;

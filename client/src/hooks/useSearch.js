import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchResults } from "../redux/actions/search.actions";

/* eslint-disable */

const useSearch = (slug) => {
  const dispatch = useDispatch();
  const initialLoad = useRef(true);
  const query = useSelector((state) => state.search.query);
  const guildId = useSelector((state) => state.guild.id);
  const location = useLocation();

  useEffect(() => {
    if (!initialLoad.current) {
      if (location.search >= 1) {
        dispatch(getSearchResults(guildId, slug));
      }
    }
  }, [query, location.search]);

  return [initialLoad, query];
};

export default useSearch;

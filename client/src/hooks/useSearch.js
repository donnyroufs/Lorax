import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../redux/actions/search.actions";

/* eslint-disable */

const useSearch = slug => {
  const dispatch = useDispatch();
  const initialLoad = useRef(true);
  const query = useSelector(state => state.search.query);
  const guildId = useSelector(state => state.guild.id);

  useEffect(() => {
    if (!initialLoad.current) {
      dispatch(getSearchResults(guildId, slug));
    }
  }, [query]);

  return [initialLoad, query];
};

export default useSearch;

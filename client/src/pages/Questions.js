import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {} from "../redux/actions/guild.actions";

const Questions = () => {
  const dispatch = useDispatch();
  //const guilds = useSelector(state => state.guild.guilds);

  useEffect(() => {}, []);

  return <React.Fragment>Server</React.Fragment>;
};

export default Questions;

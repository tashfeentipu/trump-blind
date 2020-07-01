import React from "react";
import classes from "./card.module.css";

const card = (props) => {
  const sourceImage = require("../../assets/cards/" + props.id + ".png");
  return <img src={sourceImage} className={classes.Card}></img>;
};

export default card;

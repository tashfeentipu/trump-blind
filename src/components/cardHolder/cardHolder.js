import React from "react";
import Card from "../card/card";
import classes from "./cardHolder.module.css";

const cardHolder = (props) => {
  const CardContainerClass = [];
  if (props.ContainerClass === "Columns") {
    CardContainerClass.push(classes.CardContainerColumns);
  } else {
    CardContainerClass.push(classes.CardContainerRows);
  }
  const placeHolder = props.cardIds.map((cardId) => {
    return (
      <div className={classes.CardItem}>
        {" "}
        <Card id={cardId} />
      </div>
    );
  });
  return <div className={CardContainerClass.join(" ")}> {placeHolder}</div>;
};

export default cardHolder;

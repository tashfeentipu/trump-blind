import React, { Component } from "react";
import CardHolder from "../../components/cardHolder/cardHolder";
import classes from "./cards.module.css";

class Cards extends Component {
  state = {
    cardIdC: [
      "AC",
      "KC",
      "QC",
      "JC",
      "10C",
      "9C",
      "8C",
      "7C",
      "6C",
      "5C",
      "4C",
      "3C",
      "2C",
    ],
    cardIdS: [
      "AS",
      "KS",
      "QS",
      "JS",
      "10S",
      "9S",
      "8S",
      "7S",
      "6S",
      "5S",
      "4S",
      "3S",
      "2S",
    ],
    cardIdH: [
      "AH",
      "KH",
      "QH",
      "JH",
      "10H",
      "9H",
      "8H",
      "7H",
      "6H",
      "5H",
      "4H",
      "3H",
      "2H",
    ],
    cardIdD: [
      "AD",
      "KD",
      "QD",
      "JD",
      "10D",
      "9D",
      "8D",
      "7D",
      "6D",
      "5D",
      "4D",
      "3D",
      "2D",
    ],
  };

  render() {
    return (
      <div>
        <div className={classes.UpperContainer}>
          <CardHolder cardIds={this.state.cardIdC} ContainerClass="Columns" />
        </div>
        <div className={classes.MiddleContainer}>
          <CardHolder cardIds={this.state.cardIdH} ContainerClass="Rows" />
          <div></div>
          <CardHolder cardIds={this.state.cardIdS} ContainerClass="Rows" />
        </div>
        <div className={classes.LowerContainer}>
          <CardHolder cardIds={this.state.cardIdD} ContainerClass="Columns" />
        </div>
      </div>
    );
  }
}

export default Cards;

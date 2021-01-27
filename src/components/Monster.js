import { MonsterImage } from "../styles";
import monsters from "../monsters";
import { useState } from "react";

const Monster = (props) => {
  let currentMonster = props.currentMonster;
  return <MonsterImage src={currentMonster.image} alt={currentMonster.name} />;
};

export default Monster;

import { MonsterImage } from "../styles";

const Monster = (props) => {
  let currentMonster = props.currentMonster;
  return <MonsterImage src={currentMonster.image} alt={currentMonster.name} />;
};

export default Monster;

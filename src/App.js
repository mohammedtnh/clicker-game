import dragon from "./img/dragon.png";
import { useState } from "react";

function App() {
  let [gold, setGold] = useState(0);
  let [hp, setHp] = useState(5);

  const addGold = (goldGained) => {
    gold += goldGained;
    setGold(gold);
  };

  const hpControl = () => {
    if (gold < 5) {
      setHp(5);
    } else if (gold >= 5 && gold <= 10) {
      setHp(10);
    } else if (gold >= 10 && gold <= 20) {
      setHp(15);
    } else if (gold >= 20 && gold <= 30) {
      setHp(20);
    }
  };

  const attack = () => {
    if (hp > 0) {
      setHp((hp += -1));
      if (hp === 0) {
        addGold(1);
        hpControl();
      }
    }
  };

  return (
    <div>
      <br />
      <h1>Gold: {gold} </h1>
      <br />
      <button onClick={attack}>Attack</button>
      <br />
      <img src={dragon} alt="dragon" />
      <h1>Hp: {hp} </h1>
    </div>
  );
}

export default App;

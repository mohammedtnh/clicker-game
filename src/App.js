import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import Monster from "./components/Monster";
import WeaponList from "./components/WeaponList";
import monsters from "./monsters";
import { AttackButton } from "./styles";

const theme = {
  mainColor: "#B9B9B9",
  backgroundColor: "#000000",
  secondaryColor: "#00AAA9",
  red: "#FF0000",
};

function App() {
  let [gold, setGold] = useState(0);
  let [damage, setDamage] = useState(1);
  let [hp, setHp] = useState(5);
  let [currentMonster, setMonster] = useState(monsters[0]);

  const generateMonster = (damage) => {
    let newMonster = monsters.find(
      (monster) => monster.lvl >= damage && monster.killed === false
    );

    if (typeof newMonster !== "undefined") {
      setMonster(newMonster);
    } else {
      monsters.forEach(function (monster) {
        monster.killed = false;
      });
    }
  };

  const addGold = (goldGained) => {
    gold += goldGained;
    setGold(gold);
  };

  const hpControl = () => {
    if (damage < 2) {
      setHp(5);
    } else if (damage >= 2) {
      setHp(10);
    } else if (gold >= 3) {
      setHp(15);
    } else if (gold >= 4) {
      setHp(20);
    } else if (gold > 5) {
      setHp(30);
    }
  };

  const attack = () => {
    if (hp > 0) {
      setHp((hp -= damage));
      if (hp <= 0) {
        addGold(1);
        currentMonster.killed = true;
        generateMonster(damage);
        hpControl();
      }
    }
  };

  const upgardeWeapon = (weapon) => {
    if (weapon.price <= gold) {
      setGold((gold -= weapon.price));
      setDamage(weapon.damage);
      weapon.sold = true;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container">
        <div className="row">
          <div className="col-md">
            <WeaponList
              gold={gold}
              upgardeWeapon={upgardeWeapon}
              damage={damage}
            />
          </div>
          <div className="col-md">
            <h1 className="text-center">Gold: {gold} </h1>
            <h1 className="text-center">Damage: {damage} </h1>
            <AttackButton
              type="button"
              className="btn btn-lg btn-outline-danger"
              onClick={attack}
            >
              Attack
            </AttackButton>
            <Monster currentMonster={currentMonster} />
            <h1 className="text-center">Hp: {hp} </h1>
          </div>
          <div className="col-md">
            <h2>Hire a Hero</h2>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

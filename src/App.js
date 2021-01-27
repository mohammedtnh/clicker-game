import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import Monster from "./components/Monster";
import WeaponList from "./components/WeaponList";

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
    } else if (gold > 30) {
      setHp(30);
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
      <br />
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
            <Monster />
            <h1 className="text-center">Hp: {hp} </h1>
          </div>
          <div className="col-md">One of three columns</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

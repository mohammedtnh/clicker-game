import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import Monster from "./components/Monster";
import { AttackButton } from "./styles";

const theme = {
  mainColor: "#B9B9B9",
  backgroundColor: "#000000",
  secondaryColor: "#00AAA9",
  red: "#FF0000",
};

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1 className="text-center">Gold: {gold} </h1>
      <AttackButton
        type="button"
        className="btn btn-lg btn-outline-danger"
        onClick={attack}
      >
        Attack
      </AttackButton>
      <br />
      <Monster />
      <h1 className="text-center">Hp: {hp} </h1>
    </ThemeProvider>
  );
}

export default App;

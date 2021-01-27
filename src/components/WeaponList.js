import { ListWrapper } from "../styles";
import Weapon from "./Weapon";
import weapons from "../weapons";

const WeaponList = (props) => {
  const weaponList = weapons
    .filter(
      (weapon) =>
        weapon.price <= props.gold &&
        weapon.sold === false &&
        weapon.damage > props.damage
    )
    .map((weapon) => (
      <Weapon
        key={weapon.id}
        weapon={weapon}
        upgardeWeapon={props.upgardeWeapon}
      />
    ));

  return (
    <div>
      <h2 className="text-center">Upgrade Weapon</h2>
      <ListWrapper>{weaponList}</ListWrapper>
    </div>
  );
};
export default WeaponList;

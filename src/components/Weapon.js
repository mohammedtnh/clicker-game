import { WeaponWrapper } from "../styles";

const Weapon = (props) => {
  const weapon = props.weapon;
  return (
    <WeaponWrapper>
      <div className="card">
        <div className="card-header">{weapon.name}</div>
        <img
          className="card-img-top"
          src={weapon.image}
          alt={weapon.name}
          onClick={() => props.upgardeWeapon(weapon)}
        />
        <div className="card-body">
          Price: {weapon.price} Gold <br /> Damage: {weapon.damage}
        </div>
      </div>
    </WeaponWrapper>
  );
};

export default Weapon;

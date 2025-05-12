import { List } from "@mui/material";
import { Attack } from "../interfaces/Attack";
import AttackBox from "./AttackBox";

interface AttackListProps {
  list: Attack[];
}

const AtacksList = ({ list }: AttackListProps) => {

  // name: string;
  // attackModifier: number;
  // damageModifier: number;
  // numberDiceDamage: number;
  // typeDiceDamage: 4 | 6 | 8 | 10 | 12 | 20;
  // typeDamage:

  return (
    <List className="border">
      {list.map((attack, index) => (
        <AttackBox key={index} name={attack.name} attackModifier={attack.attackModifier} damageModifier={attack.damageModifier} numberDiceDamage={attack.numberDiceDamage} typeDiceDamage={attack.typeDiceDamage} typeDamage={attack.typeDamage} />
      ))}
    </List>
  )
}

export default AtacksList
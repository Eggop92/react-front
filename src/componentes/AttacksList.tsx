import { List } from "@mui/material";
import { Attack } from "../interfaces/Attack";
import AttackBox from "./AttackBox";
import BorderBox from "./BorderBox";

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
  if (list.length === 0) return null;
  return (
    <BorderBox title="Ataques">
      <List className="border">
        {list.map((attack, index) => (
          <AttackBox key={index} attack={attack} />
        ))}
      </List>
    </BorderBox>
  )
}

export default AtacksList
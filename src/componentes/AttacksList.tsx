import { List } from "@mui/material";
import { ReactNode } from "react";
import { Attack } from "../interfaces/Attack";
import AttackBox from "./AttackBox";
import BorderBox from "./BorderBox";

interface AttackListProps {
  list: Attack[];
  makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const AtacksList = ({ list, makeRoll }: AttackListProps) => {

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
          <AttackBox key={index} attack={attack} makeRoll={makeRoll} />
        ))}
      </List>
    </BorderBox>
  )
}

export default AtacksList
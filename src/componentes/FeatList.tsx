import { List } from "@mui/material"
import { Feat } from "../interfaces/Feat"
import BorderBox from "./BorderBox"
import FeatBox from "./FeatBox"

interface FeatListProps {
    feats: Feat[]
}

const Feats = ({ feats }: FeatListProps) => {
    return (
        <BorderBox title='Traits and Feats'>
            <List>
                {feats.sort((a, b) => { return a.level > b.level ? 1 : a.level === b.level ? 0 : -1 }).map((feat, index) => (
                    <FeatBox key={index} feat={feat} />
                ))}
            </List>
        </BorderBox>
    )
}

export default Feats
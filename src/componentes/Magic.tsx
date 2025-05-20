import { Divider, Stack } from "@mui/material";
import { MagicLevel } from "../interfaces/MagicLevel";
import BorderBox from "./BorderBox";
import MagicStats from "./MagicStats";
import Spells from "./Spells";



interface MagicProps {
    caracteristic: string;
    attack: number;
    saving: number;
    levels: MagicLevel[]
}

const Magic = ({ caracteristic, attack, saving, levels }: MagicProps) => {
    return (
        <BorderBox title="Spells">
            <Stack>
                <MagicStats caracteristic={caracteristic} attack={attack} saving={saving} />
                {levels.map((level, index) => (
                    <>
                        <Divider />
                        <Spells key={index} level={level.name} quantity={level.slots} spells={level.spells} />
                    </>
                ))}

            </Stack>
        </BorderBox>
    )
}

export default Magic
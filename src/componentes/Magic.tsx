import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import { MagicLevel } from "../interfaces/MagicLevel";
import BorderBox from "./BorderBox";
import MagicStats from "./MagicStats";
import Spells from "./Spells";
import TabContent from "./TabContent";



interface MagicProps {
    caracteristic: string;
    attack: number;
    saving: number;
    levels: MagicLevel[]
}

const Magic = ({ caracteristic, attack, saving, levels }: MagicProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BorderBox title="Spells">
            <Stack>
                <MagicStats caracteristic={caracteristic} attack={attack} saving={saving} />
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs spells">
                            {levels.map((level) => (
                                <Tab key={level.name} label={level.name} id={`spell-tab-${level.name}`} aria-controls={`spell-tabpanel-${level.name}`} />
                            ))}
                        </Tabs>
                    </Box>
                    {levels.map((level, index) => (
                        <TabContent key={level.name} value={value} index={index}>
                            <Spells quantity={level.slots} spells={level.spells} />
                        </TabContent>
                    ))}
                </Box>


            </Stack>
        </BorderBox>
    )
}

export default Magic
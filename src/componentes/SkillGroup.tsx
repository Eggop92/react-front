import { Button, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SkillGroupProps {
    name: string;
    superName?: string;
    modifier: number;
    direction?: 'row' | 'column-reverse';
    typographyVariant?: 'h6' | 'body2';
    icon?: ReactNode;
    proficency?: boolean;
    makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const SkillGroup = ({ name, superName, modifier, direction, typographyVariant = 'body2', icon, proficency = false, makeRoll }: SkillGroupProps) => {
    return (
        <Stack direction={direction} sx={{ alignItems: 'center' }} spacing={1}>
            <Button variant={proficency ? "contained" : "outlined"} onClick={() => makeRoll(modifier, name, icon, 20, 1)}> {modifier} </Button>
            <Typography variant={typographyVariant} style={{ textAlign: "left" }}> {superName ? superName : name} </Typography>

        </Stack>
    )
}

export default SkillGroup
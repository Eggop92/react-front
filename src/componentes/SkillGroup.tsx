import { Button, Stack, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { ReactNode } from "react";

interface SkillGroupProps {
    name: string;
    modifier: number;
    direction?: 'row' | 'column-reverse';
    typographyVariant?: 'h6' | 'body2';
    icon?: ReactNode;
    proficency?: boolean;
}

const SkillGroup = ({ name, modifier, direction, typographyVariant = 'body2', icon, proficency = false }: SkillGroupProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: modifier, skill: name, icon: icon });
    };

    return (
        <Stack direction={direction} sx={{ alignItems: 'center' }} spacing={1}>
            <Button variant={proficency ? "contained" : "outlined"} onClick={handleClick}> {modifier} </Button>
            <Typography variant={typographyVariant} style={{ textAlign: "left" }}> {name} </Typography>

        </Stack>
    )
}

export default SkillGroup
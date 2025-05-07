import { Button, Stack, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { ReactNode } from "react";

interface SkillGroupProps {
    name: string;
    modifier: number;
    direction?: 'row' | 'column-reverse';
    typographyVariant?: 'h6' | 'body1';
    icon?: ReactNode;
}

const SkillGroup = ({ name, modifier, direction, typographyVariant = 'body1', icon }: SkillGroupProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: modifier, skill: name, icon: icon });
    };

    return (
        <Stack direction={direction} sx={{ alignItems: 'center' }} spacing={2}>
            <Button variant="outlined" onClick={handleClick}> {modifier} </Button>
            <Typography variant={typographyVariant}> {name} </Typography>

        </Stack>
    )
}

export default SkillGroup
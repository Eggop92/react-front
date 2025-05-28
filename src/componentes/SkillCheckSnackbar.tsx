import { Box, Stack, Typography } from "@mui/material";
import { CustomContentProps, SnackbarContent } from "notistack";
import { forwardRef, ReactNode } from "react";

interface SkillCheckSnackbarProps extends CustomContentProps {
    modifier: number;
    skill: string;
    icon: ReactNode;
    dice: number;
    ammount: number;
}

const SkillCheckSnackbar = forwardRef<HTMLDivElement, SkillCheckSnackbarProps>(({ modifier, skill, icon, dice = 20, ammount = 1 }, ref) => {
    const rolls: number[] = [];
    let totalRolls = 0;
    [...Array(ammount).keys()].forEach(() => {
        let r = Math.floor(Math.random() * dice) + 1;
        rolls.push(r);
        totalRolls += r;
    });

    const sign = modifier >= 0 ? "+" : "";
    const total = totalRolls + modifier;
    const bgColor = ammount === 1 ? rolls[0] === 20 ? "success.main" : rolls[0] === 1 ? "error.main" : "primary.main" : "primary.main";
    const hoverColor = ammount === 1 ? rolls[0] === 20 ? "success.dark" : rolls[0] === 1 ? "error.dark" : "primary.dark" : "primary.dark";
    return (
        <SnackbarContent ref={ref}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    padding: '10px',
                    borderRadius: 1,
                    bgcolor: bgColor,
                    '&:hover': {
                        bgcolor: hoverColor,
                    },
                }}
            >
                <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
                    {icon}
                    <Typography>You roled {ammount > 1 ? rolls.reduce((prev, current) => { return prev + ' + ' + current; }, '') : rolls[0]} {sign}{modifier} = <b>{total}</b> for <b>{skill}</b></Typography>
                </Stack>
            </Box>
        </SnackbarContent>
    );
}
);

SkillCheckSnackbar.displayName = "SkillCheckSnackbar";

export default SkillCheckSnackbar

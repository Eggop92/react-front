import { Box, Stack, Typography } from "@mui/material";
import { CustomContentProps, SnackbarContent } from "notistack";
import { forwardRef, ReactNode } from "react";

interface SkillCheckSnackbarProps extends CustomContentProps {
    modifier: number;
    skill: string;
    icon: ReactNode
}

const SkillCheckSnackbar = forwardRef<HTMLDivElement, SkillCheckSnackbarProps>(({ id, ...props }, ref) => {
    const roll = Math.floor(Math.random() * 20) + 1;
    const sign = props.modifier >= 0 ? "+" : "";
    const total = roll + props.modifier;
    const bgColor = roll === 20 ? "success.main" : roll === 1 ? "error.main" : "primary.main";
    const hoverColor = roll === 20 ? "success.dark" : roll === 1 ? "error.dark" : "primary.dark";
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
                    {props.icon}
                    <Typography>You roled a {roll} {sign}{props.modifier} = <b>{total}</b> for <b>{props.skill}</b> check</Typography>
                </Stack>
            </Box>
        </SnackbarContent>
    );
}
);

SkillCheckSnackbar.displayName = "SkillCheckSnackbar";

export default SkillCheckSnackbar

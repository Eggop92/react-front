import { Box } from "@mui/material";
import { CustomContentProps, SnackbarContent } from "notistack";
import { forwardRef, ReactNode } from "react";

interface SkillCheckSnackbarProps extends CustomContentProps {
    bgColor: string;
    hoverColor: string;
    node: ReactNode;
}

const SkillCheckSnackbar = forwardRef<HTMLDivElement, SkillCheckSnackbarProps>(({ bgColor, hoverColor, node }, ref) => {
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
                {node}
            </Box>
        </SnackbarContent>
    );
}
);

SkillCheckSnackbar.displayName = "SkillCheckSnackbar";

export default SkillCheckSnackbar

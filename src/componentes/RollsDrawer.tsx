import { Box, Drawer, Stack, Typography } from '@mui/material';
import React from 'react';

interface RollsDrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
    rollsHistory: React.ReactNode[];
}

const RollsDrawer = ({ open, toggleDrawer, rollsHistory }: RollsDrawerProps) => {
    return (
        <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
            <Stack sx={{ minWidth: 300 }}>
                <Typography variant="h6" sx={{ padding: 2, textAlign: 'center' }}>Roll history</Typography>
                <Stack padding={2} spacing={2} direction="column-reverse">
                    {rollsHistory.map((rollBox, index) => (
                        <Box key={index}>{rollBox}</Box>
                    ))}
                </Stack>
            </Stack>
        </Drawer>
    )
}

export default RollsDrawer
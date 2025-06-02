import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface RollBoxProps {
    icon: ReactNode;
    rollText: ReactNode;
}

const RollBox = ({ icon, rollText }: RollBoxProps) => {

    return (
        <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
            {icon}
            {rollText}
        </Stack>
    )
}

export default RollBox
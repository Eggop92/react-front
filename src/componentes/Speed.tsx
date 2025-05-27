import { Stack, Typography } from "@mui/material";
import { GiFeatheredWing, GiWalkingBoot } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";

interface SpeedProps {
    speed: number;
    speedType: "walking" | "flying" | "swimming";
}

const Speed = ({ speed, speedType }: SpeedProps) => {
    const getSpeedIcon = () => {
        switch (speedType) {
            case "walking":
                return <GiWalkingBoot size='1.5rem' />;
            case "flying":
                return <GiFeatheredWing size='1.5rem' />; // Replace with flying icon
            case "swimming":
                return <TbSwimming size='1.5rem' />; // Replace with swimming icon
            default:
                return <GiWalkingBoot size='1.5rem' />; // Default icon
        }
    };
    return (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: 'center' }} >
            {getSpeedIcon()}
            <Typography variant="h5">{speed}</Typography>
        </Stack>
    )
}

export default Speed
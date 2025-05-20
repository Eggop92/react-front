import { Checkbox, ListItem, ListItemIcon, Stack, Tooltip, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { GiBearFace, GiCrossMark } from "react-icons/gi";
import { Feat } from "../interfaces/Feat";

interface FeatBoxProps {
    feat: Feat;
}

const FeatBox = ({ feat }: FeatBoxProps) => {
    const getIcon = () => {
        switch (feat.type) {
            case 'race': return <GiBearFace color={"#8B4513"} />; // Brown
            case 'class': return <GiBearFace color={"#4682B4"} />; // Steel Blue
            case 'background': return <GiBearFace color={"#228B22"} />; // Forest Green
            case 'general': return <GiBearFace color={"#FFD700"} />; // Gold
        }
    };
    const getChecks = () => {
        if (feat.quantity === undefined) return null;
        return (
            <Stack direction='row' sx={{ justifyContent: "flex-end", alignItems: "center" }}>
                {[...Array(feat.quantity).keys()].map((_, index) => (
                    <Checkbox key={index} size={"small"} checkedIcon={<GiCrossMark color={red[900]} />} />
                ))}
            </Stack>
        )
    }

    return (
        <ListItem>
            <ListItemIcon>{getIcon()}</ListItemIcon>
            <Stack direction={'row'} sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <Tooltip arrow title={feat.description} placement="top">
                    <Typography>{feat.name}</Typography>
                </Tooltip>
                {getChecks()}
            </Stack>
        </ListItem>
    )
}

export default FeatBox
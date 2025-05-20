import { Checkbox, ListItem, ListItemIcon, Stack, Tooltip, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { FaRegCompass } from "react-icons/fa";
import { GiBeamsAura, GiBearFace, GiCrossMark, GiFlatStar, GiFlexibleStar } from "react-icons/gi";
import { Feat } from "../interfaces/Feat";

interface FeatBoxProps {
    feat: Feat;
}

const FeatBox = ({ feat }: FeatBoxProps) => {
    const getIcon = () => {
        switch (feat.type) {
            case 'race': return <GiBeamsAura />; // Brown
            case 'class': return <GiFlatStar />; // Steel Blue
            case 'subclass': return <GiFlexibleStar />; // Steel Blue
            case 'background': return <FaRegCompass />; // Forest Green
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
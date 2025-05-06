import { Avatar, Stack, Typography } from "@mui/material";
import ClaseChip from "./ClaseChip";
import RaceChip from "./RaceChip";

interface HeaderProps {
    name: string;
    clase: string;
    race: string;
    level: number
}

const Header = ({ name, clase, race, level }: HeaderProps) => {

    return (
        <Stack paddingBottom={2} >
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Avatar {...stringAvatar(name)} />
                <Typography variant="h4" noWrap>{name}</Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <ClaseChip clase={clase} level={level} />
                <RaceChip race={race} />
            </Stack>
        </Stack>

    )
}

export default Header

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
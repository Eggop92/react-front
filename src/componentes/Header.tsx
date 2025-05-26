import { Avatar, Stack, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material";
import ClaseChip from "./ClaseChip";
import RaceChip from "./RaceChip";

interface HeaderProps {
    name: string;
    clase: string;
    race: string;
    level: number;
    imageProfile?: string;
}

const Header = ({ name, clase, race, level, imageProfile }: HeaderProps) => {
    const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            // backgroundColor: '#f5f5f9',
            // color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 500,
            // fontSize: theme.typography.pxToRem(12),
            // border: '1px solid #dadde9',
        },
    }));


    return (
        <Stack paddingBottom={2} >
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                {imageProfile ? <HtmlTooltip title={<img alt={name} width='500' loading="lazy" src={imageProfile}></img>} arrow><Avatar src={imageProfile} alt={name} /></HtmlTooltip> : <Avatar {...stringAvatar(name)} />}
                <Typography variant="h4" noWrap>{name}</Typography>
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
import { Button, ListItem, ListItemIcon, Stack, Tooltip, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { ReactNode } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiArrowhead, GiBrainstorm, GiChemicalBolt, GiCrossedSlashes, GiDivert, GiDrippingKnife, GiFireTail, GiIceSpear, GiLightningBranches, GiPointySword, GiSkullCrack, GiThorHammer, GiWingedSword } from "react-icons/gi";
import { Attack } from "../interfaces/Attack";

interface AttackBoxProps {
    attack: Attack;
}

const AttackBox = ({ attack }: AttackBoxProps) => {
    const getDamageIcon = (): ReactNode => {
        switch (attack.typeDamage) {
            case 'slashing':
                return <GiCrossedSlashes />;
            case 'piercing':
                return <GiArrowhead />;
            case 'bludgeoning':
                return <GiThorHammer />;
            case 'fire':
                return <GiFireTail />;
            case 'cold':
                return <GiIceSpear />;
            case 'lightning':
                return <GiLightningBranches />;
            case 'thunder':
                return <AiOutlineThunderbolt />;
            case 'poison':
                return <GiDrippingKnife />;
            case 'necrotic':
                return <GiSkullCrack />;
            case 'radiant':
                return <GiWingedSword />;
            case 'psychic':
                return <GiBrainstorm />;
            case 'force':
                return <GiDivert />;
            case 'acid':
                return <GiChemicalBolt />;
            default:
                return <GiCrossedSlashes />;
        }
    }

    const { enqueueSnackbar } = useSnackbar();
    const handleAttackClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: attack.attackModifier, skill: "Attack", icon: <GiPointySword /> });
    };
    const handleDamageClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: attack.damageModifier, skill: attack.typeDamage + " damage", icon: getDamageIcon(), dice: attack.typeDiceDamage, ammount: attack.numberDiceDamage });
    };
    const getAttackButton = (): ReactNode => {
        if (attack.attackModifier === undefined) return null;
        return (
            <Button variant="outlined" color="primary" onClick={handleAttackClick} startIcon={<GiPointySword />}>
                {attack.attackModifier >= 0 ? '+' : ''}{attack.attackModifier}
            </Button>
        )
    };
    const getSavingButton = (): ReactNode => {
        if (attack.savingThrow === undefined) return null;
        return (
            <Button variant="text" color="primary" disabled>
                {attack.savingThrowType} {attack.savingThrow}
            </Button>
        )
    };
    const getDamageButton = (): ReactNode => {
        return (<Button variant="outlined" color="primary" onClick={handleDamageClick} startIcon={getDamageIcon()}>
            {attack.numberDiceDamage}d{attack.typeDiceDamage} {attack.damageModifier >= 0 ? '+' : ''} {attack.damageModifier}
        </Button>);
    }
    const getTitle = (): ReactNode => {
        if (attack.description === undefined) return <Typography variant="body1" color="text.secondary">{attack.name}</Typography>;
        return (
            <Tooltip title={attack.description} arrow>
                <Typography variant="body1" color="text.secondary">{attack.name}</Typography>
            </Tooltip>
        );
    }

    return (
        <ListItem >
            <ListItemIcon>
                {getDamageIcon()}
            </ListItemIcon>
            <Stack direction={"row"} sx={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                {getTitle()}
                <Stack direction='row' spacing={1} sx={{ justifyContent: "flex-end", alignItems: "center" }}>
                    {getAttackButton()}
                    {getSavingButton()}
                    {getDamageButton()}
                </Stack>
            </Stack>
        </ListItem>
    )
}

export default AttackBox
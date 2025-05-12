import { Button, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { useSnackbar } from "notistack";
import { ReactNode } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiArrowhead, GiBrainstorm, GiChemicalBolt, GiCrossedSlashes, GiDivert, GiDrippingKnife, GiFireTail, GiIceSpear, GiLightningBranches, GiPointySword, GiSkullCrack, GiThorHammer, GiWingedSword } from "react-icons/gi";
import { Attack } from "../interfaces/Attack";


const AttackBox = ({ name, attackModifier, damageModifier, numberDiceDamage, typeDiceDamage, typeDamage }: Attack) => {
    const getDamageIcon = (): ReactNode => {
        switch (typeDamage) {
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
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: attackModifier, skill: "Attack", icon: <GiPointySword /> });
    };
    const handleDamageClick = () => {
        enqueueSnackbar({ variant: 'skillCheckSnackbar', modifier: damageModifier, skill: typeDamage + " damage", icon: getDamageIcon(), dice: typeDiceDamage, ammount: numberDiceDamage });
    };
    return (
        <ListItem secondaryAction={
            <Stack direction='row' spacing={1}>
                <Button variant="outlined" color="primary" onClick={handleAttackClick} startIcon={<GiPointySword />}>
                    {attackModifier >= 0 ? '+' : ''}{attackModifier}
                </Button>
                <Button variant="outlined" color="primary" onClick={handleDamageClick} startIcon={getDamageIcon()}>
                    {numberDiceDamage}d{typeDiceDamage} {damageModifier >= 0 ? '+' : ''} {damageModifier}
                </Button>
            </Stack>
        }>
            <ListItemIcon>
                {getDamageIcon()}
            </ListItemIcon>
            <ListItemText
                primary={name}
            // secondary={secondary ? 'Secondary text' : null}
            />
        </ListItem>
    )
}

export default AttackBox
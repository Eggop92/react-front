import { Button, ListItem, ListItemIcon, Stack, Tooltip, Typography } from "@mui/material";
import { ReactNode } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiArrowhead, GiBrainstorm, GiChemicalBolt, GiCrossedSlashes, GiDivert, GiDrippingKnife, GiFireTail, GiHealing, GiIceSpear, GiLightningBranches, GiPointySword, GiSkullCrack, GiThorHammer, GiWingedSword } from "react-icons/gi";
import { Attack } from "../interfaces/Attack";

interface AttackBoxProps {
    attack: Attack;
    makeRoll: (modifier: number, skill: string, icon: ReactNode, dice: number, ammount: number) => void;
}

const AttackBox = ({ attack, makeRoll }: AttackBoxProps) => {
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
            case 'healing':
                return <GiHealing />;
            default:
                return <GiCrossedSlashes />;
        }
    }

    const handleAttackClick = () => {
        console.log("Attack clicked", attack);
        makeRoll(attack.attackModifier || 0, "Attack", <GiPointySword />, 20, 1);
    };
    const handleDamageClick = () => {
        console.log("Damage clicked", attack);
        makeRoll(attack.damageModifier || 0, attack.typeDamage + " damage", getDamageIcon(), attack.typeDiceDamage || 20, attack.numberDiceDamage || 1);
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
        if (attack.numberDiceDamage === undefined || attack.typeDiceDamage === undefined) return null;
        return (<Button variant="outlined" color="primary" onClick={handleDamageClick} startIcon={getDamageIcon()}>
            {attack.numberDiceDamage}d{attack.typeDiceDamage} {attack.damageModifier != 0 ? (attack.damageModifier >= 0 ? '+' : '') + attack.damageModifier : ''}
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
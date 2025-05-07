import { Badge, Chip } from '@mui/material'
import { ReactElement } from 'react'
import { BsTools } from 'react-icons/bs'
import { FaHatWizard } from 'react-icons/fa6'
import { GiBarbarian, GiBloodySword, GiFireSilhouette, GiPunchBlast, GiRogue, GiSunPriest, GiSwordman, GiWarlockEye, GiWingedSword } from 'react-icons/gi'
import { LuGuitar } from 'react-icons/lu'
import { MdForest, MdPets } from 'react-icons/md'

interface ClaseChipProps {
    clase: string,
    level: number
}

const ClaseChip = ({ clase, level }: ClaseChipProps) => {
    const classIconMap: { [key: string]: ReactElement } = {
        Barbarian: <GiBarbarian />,
        Bard: <LuGuitar />,
        Cleric: <GiSunPriest />,
        Druid: <MdForest />,
        Fighter: <GiSwordman />,
        Monk: <GiPunchBlast />,
        Paladin: <GiWingedSword />,
        Ranger: <MdPets />,
        Rogue: <GiRogue />,
        Sorcerer: <GiFireSilhouette />,
        Warlock: <GiWarlockEye />,
        Wizard: <FaHatWizard />,
        Artificer: <BsTools />,
        "Blood Hunter": <GiBloodySword />
    }
    return (
        <Badge badgeContent={level} color="warning" anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}>
            <Chip icon={classIconMap[clase]} color="primary" label={clase} />
        </Badge>

    )
}

export default ClaseChip
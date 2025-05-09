import { Checkbox, Stack } from '@mui/material'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeartPulse } from 'react-icons/fa6'
import { GiChewedSkull } from 'react-icons/gi'
import { PiSkullBold } from 'react-icons/pi'

const DeathSaves = () => {
    return (
        <>
            <Stack direction='row' spacing={0} sx={{ alignItems: 'center' }}>
                <Checkbox icon={<FaRegHeart color={'white'} />} checkedIcon={<FaHeartPulse />} color="success" size='small' />
                <Checkbox icon={<FaRegHeart color={'white'} />} checkedIcon={<FaHeartPulse />} color="success" size='small' />
                <Checkbox icon={<FaRegHeart color={'white'} />} checkedIcon={<FaHeartPulse />} color="success" size='small' />
            </Stack>
            <Stack direction='row' spacing={0} sx={{ alignItems: 'center' }} >
                <Checkbox icon={<PiSkullBold color={'white'} />} checkedIcon={<GiChewedSkull />} color="error" size='small' />
                <Checkbox icon={<PiSkullBold color={'white'} />} checkedIcon={<GiChewedSkull />} color="error" size='small' />
                <Checkbox icon={<PiSkullBold color={'white'} />} checkedIcon={<GiChewedSkull />} color="error" size='small' />
            </Stack>
        </>
    )
}

export default DeathSaves
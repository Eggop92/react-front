import { Chip, Stack } from '@mui/material'

interface StatBoxProps {
    children: React.ReactNode
    title: string
}

const StatBox = ({ children, title }: StatBoxProps) => {
    return (
        <Stack className="border" padding={1} spacing={2}>
            <Chip label={title} color="primary" size='small' />
            {children}
        </Stack>
    )
}

export default StatBox
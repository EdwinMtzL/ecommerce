import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export const CardSkeleton = () => {
  return (
    <Stack spacing={1}>
        <Skeleton variant='rectangular' width={250} height={150}  />
        <Skeleton variant="text"  width={250} height={100}  />
        <Skeleton variant="rounded" width={250} height={40}  />
    </Stack>
  )
}

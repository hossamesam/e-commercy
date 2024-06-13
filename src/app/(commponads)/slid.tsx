'use client'
import react, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { Box } from '@mui/material'

const minDistance = 10

const SliderMinimumDistance = () => {
  // States
  const [value1, setValue1] = useState<number[]>([50, 5000])

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }



  return (
    <Box sx={{ width: "80%", justifyContent: "center", alignItems: "center", display: "flex" }}>
      <Slider
        sx={{ color: "rgb(255, 50, 100)" }}
        disableSwap
        value={value1}
        onChange={handleChange1}
        min={50}
        max={5000}
        valueLabelDisplay="on"
        getAriaLabel={() => 'Minimum distance'}
      />

    </Box>
  )
}

export default SliderMinimumDistance
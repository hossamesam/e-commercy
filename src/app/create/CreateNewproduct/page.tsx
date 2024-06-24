import { Box, TextField } from '@mui/material'
import React from 'react'

function page() {
  return (
    <Box dir="rtl" sx={{ mr: "250px", mt: "50px" }}>
        <div dir="rtl">
          <TextField
            label="ملصق"
            placeholder="العنصر النائب"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </div>
    </Box>
  )
}

export default page
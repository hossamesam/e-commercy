import { Box, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'

function page() {
  let x = false;
  return (
    <Box dir="rtl" sx={{ mr: "250px", mt: "50px" }}>
      <div dir="rtl">
        <Box>
          <Typography variant="body1" color="initial">فئة المنتج</Typography>
          <TextField
            label="ملصق"
            placeholder="العنصر النائب"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </Box>
        <Box>
          <Typography variant="body1" color="initial">اسم المنتج</Typography>
          <TextField
            label="اسم المنتج"
            placeholder="اسم المنتج"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </Box>
        <Box>
          <Typography variant="body1" color="initial">وصف المنتج</Typography>
          <TextField
            label="وصف المنتج"
            placeholder="وصف المنتج"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </Box>
        <Box>
          <Typography variant="body1" color="initial">الالوان المتوفره</Typography>
          <TextField
            label="الالوان المتوفره"
            placeholder="الالوان المتوفره"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </Box>
        <Box>
          <Typography variant="body1" color="initial">الاحجام المتوفرة</Typography>
          <TextField
            label="الاحجام المتوفرة"
            placeholder="الاحجام المتوفرة"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </Box>
        <FormControlLabel
          label="هل تريد "
          control={
            <Checkbox
              value="true"
              onChange={(e) =>{x=e}}
              color="primary"
            />
          }
        />
      </div>
    </Box>
  )
}

export default page
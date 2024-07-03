"use client"
import { Box, TextField, Typography, FormControlLabel, Checkbox, InputLabel, MenuItem, FormControl } from '@mui/material'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Page() {

  const [sort, setSort] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  let x = false;
  return (
    <Box dir="rtl" sx={{ mr: "250px", mt: "50px" }}>
      <div dir="rtl">
        <FormControl sx={{ width: "50%" }} >
          <InputLabel id="demo-simple-select-label">نوع المنتج</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="نوع المنتج"
            onChange={handleChange}
          >
            <MenuItem value={"baby_store"}>ملابس اطفال</MenuItem>
            <MenuItem value={"man_store"}>ملابس رجال</MenuItem>
            <MenuItem value={"underwear_store"}>ملابس داخلية</MenuItem>
            <MenuItem value={"shoses_store"}>ملابس احذية</MenuItem>
          </Select>
        </FormControl>
        <Box className="flex  items-center gap-2 my-2">
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
              color="primary"
            />
          }
        />
      </div>
    </Box>
  )
}

export default Page
'use client';
import Link from 'next/link'
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { drawerWidth_xs, drawerWidth_sm, drawerWidth_md, drawerWidth_lg, drawerWidth_xl } from './draw';
import { alpha, Button, IconButton, InputBase, Paper, styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// icon shoping ☟☟☟☟☟☟☟☟☟☟☟
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -12,
    top: 25,
    border: `3px solid rgb(255,50,100)`,
    width: "26px",
    height: "26px",
    borderRadius: "45px",

  },
}));
// theme header ☟☟☟☟☟☟☟☟☟☟☟☟
const theme = createTheme({
  palette: {
    primary: {
      main: '#20202080',
      light: '#20202060',
      dark: '#20707060',
      contrastText: '#000000',
    },
    secondary: {
      main: '#20202080',
      light: '#20202060',
      dark: '#20707060',
      contrastText: '#ffffff',
    },
  },
});
// theme Search ☟☟☟☟☟☟☟☟☟☟
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100wv',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '85%',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(.5em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  left: '5px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// jsx ☟☟☟☟☟☟☟☟☟☟
const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box style={{
        height: "40px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", padding: "25px"
      }} >
        <CssBaseline />
        <AppBar
          color='primary'
          position="fixed"
          sx={{
            width: { xs: `calc(100% - ${drawerWidth_xs}px)`, sm: `calc(100% - ${drawerWidth_sm}px)`, md: `calc(100% - ${drawerWidth_md}px)`, lg: `calc(100% - ${drawerWidth_lg}px)`, xl: `calc(100% - ${drawerWidth_xl}px)` },
            mr: { xs: `${drawerWidth_xs}px`, sm: `${drawerWidth_sm}px`, md: `${drawerWidth_md}px`, lg: `${drawerWidth_lg}px`, xl: `${drawerWidth_xl}px` }, zIndex: 1000
          }}
        >
          <Toolbar>
            <Search>
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="بحث"
                inputProps={{ 'aria-label': 'بحث' }}
              />
            </Search>
            <IconButton aria-label="cart" sx={{ position: "absolute", left: "1%" }}>
              <StyledBadge badgeContent={1} sx={{ color: "white" }}>
                <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
          </Toolbar>

          <Toolbar  >
            <Link href="/ref" className="m-4">
              <Button variant="contained" size="medium" color='secondary'>ref</Button>
            </Link>
            <Link href="/products" className="m-4">
              <Button variant="contained" size="medium" color='secondary'>product</Button>
            </Link>
            <Link href="/" className="m-4">
              <Button variant="contained" size="medium" color='secondary'>Home</Button>
            </Link>

          </Toolbar>
        </AppBar>
      </Box >
    </ThemeProvider>

  )
}
export default Header
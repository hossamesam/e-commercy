import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import babyIcon from '../../../public/icons/babyIcon.svg';
import manIcon from '../../../public/icons/manIcon.svg';
import shoseIcon from '../../../public/icons/shoseIcon.svg';
import underwear from '../../../public/icons/underwear.svg';
import womanIcon from '../../../public/icons/womanIcon.svg';
import { Slider } from '@mui/material';
import SliderMinimumDistance from './slid';
import SwithchButton from './Themes/SwitchButton';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const [drawerWidth_xs, drawerWidth_sm, drawerWidth_md, drawerWidth_lg, drawerWidth_xl] = [0, 0, 200, 240, 240];



const drawtitle = [
  { "title": 'ملابس اطفال', "icon": babyIcon, "link": "/baby_store" },
  { "title": 'ملابس رجال', "icon": manIcon, "link": "/man_store" },
  { "title": 'ملابس سيدات', "icon": womanIcon, "link": "/woman_store" },
  { "title": 'ملابس داخلية', "icon": underwear, "link": "/underwear_store" },
  { "title": 'احذية', "icon": shoseIcon, "link": "/shoses_store" }
]


export default function PermanentDrawerRight() {
  /////////////////////////mode////////////////


  return (
    <Box sx={{ display: 'flex', direction: "ltr" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: { xs: drawerWidth_xs, sm: drawerWidth_sm, md: drawerWidth_md, lg: drawerWidth_lg, xl: drawerWidth_xl },
          flexShrink: 1,
          '& .MuiDrawer-paper': {
            width: { xs: drawerWidth_xs, sm: drawerWidth_sm, md: drawerWidth_md, lg: drawerWidth_lg, xl: drawerWidth_xl },
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar sx={{ height: "130px" }}>
          <Link href="/" className="m-4">
            <Image src={logo} alt='هدومي' style={{ objectFit: "cover", padding: "0 10px" }} />
          </Link>
        </Toolbar>
        <Divider />
        <List>
          {drawtitle.map((text, index) => (
            <Link key={index} href={text.link} >
              <ListItem key={index} disablePadding   >
                <ListItemButton>
                  <ListItemIcon>
                    <Image width={30} height={30} src={text.icon} alt={text.title} />
                  </ListItemIcon>
                  <ListItemText content='h1' sx={{ textAlign: "right" }} primary={text.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <Typography variant="h5" color="initial" sx={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", mt: "10px" }}>السعر</Typography>
        <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
          <SliderMinimumDistance />
        </Box>
        <Divider />
        <List>
          <ListItem>
            <SwithchButton />
            <ListItemText sx={{ textAlign: "right" }} primary={"المظهر"} />
          </ListItem>
        </List>


      </Drawer>
    </Box>
  )
}

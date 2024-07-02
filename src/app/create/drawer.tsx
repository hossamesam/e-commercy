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
import logo from '/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import babyIcon from '@/../../public/icons/babyIcon.svg';
import manIcon from '../../../public/icons/manIcon.svg';
import shoseIcon from '../../../public/icons/shoseIcon.svg';
import underwear from '../../../public/icons/underwear.svg';
import womanIcon from '../../../public/icons/womanIcon.svg';
import SliderMinimumDistance from '../(commponads)/slid';
import SwithchButton from '../(commponads)/Themes/SwitchButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import products from '../../../public/icons/products.png';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

export const [drawerWidth_xs, drawerWidth_sm, drawerWidth_md, drawerWidth_lg, drawerWidth_xl] = [0, 200, 200, 240, 240];



const drawtitle = [
  { "title": 'ملابس اطفال', "icon": babyIcon, "link": "/baby_store" },
  { "title": 'ملابس رجال', "icon": manIcon, "link": "/man_store" },
  { "title": 'ملابس سيدات', "icon": womanIcon, "link": "/woman_store" },
  { "title": 'ملابس داخلية', "icon": underwear, "link": "/underwear_store" },
  { "title": 'احذية', "icon": shoseIcon, "link": "/shoses_store" },

]
const createsTitle = [
  { "title": 'انشاء منتج جديد', "icon": <AddBoxIcon />, "link": "/create/CreateNewproduct" },
  { "title": 'منتجات معروضة', "icon": <Image width={30} height={30} src={products} alt="" />, "link": "/MyProducts" },
  { "title": 'الطلبات', "icon": <RequestPageIcon />, "link": "/Requests" },
]

export default function PermanentDrawerRight() {
  /////////////////////////mode////////////////


  return (
    <Box sx={{ display: 'flex', direction: "ltr" }}>
      <CssBaseline />
      <Drawer
        open={false}
        anchor="right"
        sx={{
          overflow: "hidden",
          width: { xs: drawerWidth_xs, sm: drawerWidth_sm, md: drawerWidth_md, lg: drawerWidth_lg, xl: drawerWidth_xl },
          flexShrink: 1,
          '& .MuiDrawer-paper': {
            overflow: "hidden",
            width: { xs: drawerWidth_xs, sm: drawerWidth_sm, md: drawerWidth_md, lg: drawerWidth_lg, xl: drawerWidth_xl },
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
      >
        <Toolbar sx={{ height: "130px" }}>
          <Link href="/"> 
            <Image src={logo} alt='هدومي' style={{ objectFit: "cover", height: "130px" }} />
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
        <List>
          {createsTitle.map((text, index) => (
            <Link key={index} href={text.link} >
              <ListItem key={index} disablePadding   >
                <ListItemButton>
                  <ListItemIcon>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText content='h1' sx={{ textAlign: "right" }} primary={text.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
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

"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import './imgs.css';
import logo from '../../../../public/logo.png';
import Image from 'next/image';


const bigDiv = (
  <>
    <Box sx={{ position: "absolute", background: "rgb(20,255,40)", color: "GrayText", width: "300px", height: "300px", bottom: "27%", left: "25px" }}>
      hhhhhhhhhhhhhhhhh
    </Box>
    <Box sx={{ position: "absolute", background: "rgb(20,100,140)", width: "300px", height: "300px", transform: "rotate(140deg)", top: "20%", right: "20%" }}>

    </Box>
  </>
);

const gridDiv = (
  <Box sx={{ position: "absolute", background: "rgb(20,255,40)", color: "GrayText", width: "300px", height: "300px", bottom: "27%", left: "25px" }}>
    hhhhhhhhhhhhhhhhh
  </Box>
)

export default function MultiActionAreaCard() {
  // const [zoom, setzoom] = React.useState(false)
  const [zoomin, setzoomin] = React.useState([0,0])
  console.log(zoomin);

  return (
    <Box sx={{
      mt: "100px",
      mr: "220px",
    }}>
      <Box sx={{ width: "60vw", height: "40vh" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto 1fr",
            height: "100%"
          }}>
          <Box sx={{ bgcolor: "rgb(20,50,20)", cursor: "" }} onMouseMove={(e) => {
            setzoomin([
              e.clientX,
              e.clientY
            ])
            
          }}
          >
            <img
              style={{ objectFit: "cover" }}
              src="https://www.w3schools.com/html/pic_trulli.jpg"
              alt="Italian Trulli" />
          </Box>
          <Box sx={{
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,.8), rgba(255,255,255,.4) )"
          }}>

          </Box>
          <Box sx={{ backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.8), rgba(255,255,255,.4) )" }}></Box>
          
          <img
              style={{ objectFit: "cover" }}
              src="https://www.w3schools.com/html/pic_trulli.jpg"
              alt="Italian Trulli" />
              
          <Box sx={{ bgcolor: "rgb(220,22,100)" }}
            onMouseMove={() => {
              
              zoomin[0].style.setProperty('--x', (100 * zoomin[0] / zoomin[0].offsetWidth) + '%');
              zoomin[1].style.setProperty('--y', (100 * zoomin[1] / zoomin[1].offsetHeight) + '%');
            }}
          >

          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ background: "red", width: "220px", height: "220px", cursor: "pointer" }}
        onClick={() => {
          setzoom(!zoom)
        }}>
      </Box>
      {zoom === false ? bigDiv : "true"} */}

    </Box >
  );
}

{/* <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"
onClick={() => {
  return (
    <Box sx={{ bottom: "0px", left: "0px", bgcolor: "red" }}>
      <img className='productZoom' src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"
      />
    </Box>
  )
}}

/> */}

{/*
<Card sx={{ maxWidth: 300 }}>
<CardActionArea>
  <CardMedia
    className='productZoom'
    onMouseMove={(e) => {
      e.currentTarget.style.setProperty('--x', (100 * e.clientX / e.currentTarget.offsetWidth) + '%');
      e.currentTarget.style.setProperty('--y', (100 * e.clientY / e.currentTarget.offsetHeight) + '%');
    }}
    component="img"
    image="https://www.babylina.store/wp-content/uploads/2023/06/%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D8%A7%D9%88%D9%84%D8%A7%D8%AF-%D9%82%D9%85%D9%8A%D8%B5-%D9%88%D8%B4%D9%88%D8%B1%D8%AA-%D8%B7%D9%82%D9%85-%D9%85%D8%B3%D8%AA%D9%88%D8%B1%D8%AF-%D9%85%D9%86-%D8%A8%D9%8A%D8%A8%D9%8A-%D9%84%D9%8A%D9%86%D8%A7-BABYLINA-2023-K119-baby-clothes.jpg"
    alt="green iguana"
  />
</CardActionArea>
</Card>
*/}
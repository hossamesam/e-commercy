"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import './imgs.css';
import Image from 'next/image';
import logo from '../../../../public/logo.png';




export default function MultiActionAreaCard() {
  return (
    <Box sx={{
      mt: "100px",
      mr: "300px",
    }}>
      <Image src={logo} alt="Italian Trulli"
        style={{ cursor: "pointer" }}
        onClick={() => {
          <div style={{ width: "800px" }}>
            <Image className='productZoom' src={logo} alt="Italian Trulli" />
          </div>

        }
        }
      />
      <br />
      <br />
      <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"
        onMouseMove={(e) => {
          return (
            <div style={{ width: "800px" }}>
              <img className='productZoom' src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"
                onMouseMove={() => {
                  e.currentTarget.style.setProperty('--x', (100 * e.clientX / e.currentTarget.offsetWidth) + '%');
                  e.currentTarget.style.setProperty('--y', (100 * e.clientY / e.currentTarget.offsetHeight) + '%');
                }} />
            </div>
          )
        }}
      />
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
    </Box>
  );
}


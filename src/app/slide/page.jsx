"use client";
// for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Slider from "./slidera";
import "./slider.css";
import { Box } from "@mui/material";

const images = [
  {
    url: "https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg",
  },
  {
    url: "https://shopping.saigoncentre.com.vn/Data/Sites/1/News/1120/topbanner.jpg",
  },
  {
    url: "https://web.larue.com.kh/image/vcache/catalog/Men-Fashion-1920x550.webp",
  },
];

const TrendingSlider = () => {
  return (
    <>
      <Box sx={{ mr: "290px", mt: "-50px" }}>
        <Slider imageList={images} width="100%" height={"550px"} />
      </Box>
    </>
  );
};
export default TrendingSlider;

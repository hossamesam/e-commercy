import { Box, Button, IconButton, Paper, Stack } from "@mui/material";
import React from "react";
import {
  drawerWidth_xs,
  drawerWidth_sm,
  drawerWidth_md,
  drawerWidth_lg,
  drawerWidth_xl,
} from "./draw";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CircleIcon from "@mui/icons-material/Circle";
// tooltip <تلميحات الالوان> ☟☟☟☟☟☟☟☟☟☟
// const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// tooltip <تلميحات الالوان> ☟☟☟☟☟☟☟☟☟☟
const tooltip = (
  <Stack container gap={0.5} direction="row">
    <CircleIcon sx={{ color: "black" }} />
    <CircleIcon sx={{ color: "white" }} />
    <CircleIcon sx={{ color: "red" }} />
    <CircleIcon sx={{ color: "silver" }} />
  </Stack>
);

// jsx☟☟☟☟☟☟☟☟☟☟
function Tshirt({ src, alt, key, href, name, color, price, description }) {
  return (
    <>
      <Card
        key={key}
        sx={{
          maxHeight: "900px",
          width: {
            xs: `calc(100% - ${drawerWidth_xs}px + 210px)`,
            sm: `calc(100% - ${drawerWidth_sm}px + 210px)`,
            md: `calc(100% - ${drawerWidth_md}px + 210px)`,
            lg: `calc(100% - ${drawerWidth_lg}px + 210px)`,
            xl: `calc(100% - ${drawerWidth_xl}px + 210px)`,
          },
          mr: {
            xs: `calc(${drawerWidth_xs}px - 100px)`,
            sm: `calc(${drawerWidth_sm}px + 30px)`,
            md: `calc(${drawerWidth_md}px + 30px)`,
            lg: `calc(${drawerWidth_lg}px + 30px)`,
            xl: `calc(${drawerWidth_xl}px + 30px)`,
          },

          mt: "30px",
        }}>
        <Link href={href}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: "220px", objectFit: "cover" }}
              image={src}
              alt={alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  height: "140px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                {description}
              </Typography>
              <Box>
                <Typography variant="h5" color="text.secondary">
                  {price}
                </Typography>
                <Tooltip title={tooltip} placement="right">
                  <IconButton
                    sx={{ position: "absolute", left: "5px", bottom: "12px" }}>
                    <ColorLensIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}

export default Tshirt;
{
  /* <div>
<div key={key} className="group relative">
  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-fit  object-center"
    />
  </div>
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-sm text-whit">
        <a href={href}>
          <span aria-hidden="true" className="absolute inset-0" />
          {name}
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-200">{color}</p>
    </div>
    <p className="text-sm font-medium text-gray-100">{price}</p>
  </div>
</div>
</div> */
}

import Image from "next/image";
import Tshirt from "./(commponads)/T-shirt"
import products from "../../public/products.json"
import PermanentDrawerRight from "./(commponads)/draw";
import Header from "./(commponads)/Header";
import { Box } from "@mui/material";
import Banners from "./../../public/Banners/photo1.jpg";
import Slider from "./slide/slidera";
import {
  drawerWidth_xs,
  drawerWidth_sm,
  drawerWidth_md,
  drawerWidth_lg,
  drawerWidth_xl,
} from "./(commponads)/draw";


const images = [
  {
    url: "https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg"
  },
  {
    url: "https://shopping.saigoncentre.com.vn/Data/Sites/1/News/1120/topbanner.jpg",
  },
  {
    url: "https://web.larue.com.kh/image/vcache/catalog/Men-Fashion-1920x550.webp",
  },
];



export default async function Home() {

  return (
    <main >
      <Box sx={{
        mr: {
          xs: `${drawerWidth_xs}px`,
          sm: `${drawerWidth_sm}px`,
          md: `${drawerWidth_md}px`,
          lg: `${drawerWidth_lg}px`,
          xl: `${drawerWidth_xl}px`,
        }, mt: "-50px"
      }}>
        <Slider imageList={images} width="100vw" height={"550px"} />
      </Box>
    </main >
  );
}


// <Box
//         sx={{
//           mt: "100px",
//           mb: "50px",
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr 1fr ",
//             sm: "1fr 1fr ",
//             md: "1fr 1fr 1fr",
//             lg: "1fr 1fr 1fr 1fr ",
//             xl: "1fr 1fr 1fr 1fr 1fr  ",
//           },


//         }} >
//         {products.map((product) => (
//           <Tshirt src={product.imageSrc} alt={product.imageAlt} href={product.href} key={product.id} name={product.name} color={product.color} price={product.price} description={product.description}></Tshirt>
//         ))}
//       </Box>
{/* <Box sx={{
  mt: "-100px", mr: {
    xs: `${drawerWidth_xs}px`,
    sm: `${drawerWidth_sm}px`,
    md: `${drawerWidth_md}px`,
    lg: `${drawerWidth_lg}px`,
    xl: `${drawerWidth_xl}px`,
  }
  , width: {
    xs: `calc(100% - ${drawerWidth_xs})px`,
    sm: `calc(100% - ${drawerWidth_sm})px`,
    md: `calc(100% - ${drawerWidth_md})px`,
    lg: `calc(100% - ${drawerWidth_lg})px`,
    xl: `calc(100% - ${drawerWidth_xl})px`,
  },
  height: {
    xs: "100vh",
    sm: "100vh",
    md: "100vh",
    lg: "100vh",
    xl: "100vh",
  },
}}>
  <Image style={{ objectFit: "cover", width: "100%", height: "100%" }} src={Banners} alt="HeroBanner" />
</Box> */}
"use client";
import Image from "next/image";
import Tshirt from "../../(commponads)/T-shirt";
import shoses from "../../../../public/shoses.json";
import PermanentDrawerRight from "../../(commponads)/draw";
import Header from "../../(commponads)/Header";
import { Box } from "@mui/material";
import {
  drawerWidth_xs,
  drawerWidth_sm,
  drawerWidth_md,
  drawerWidth_lg,
  drawerWidth_xl,
} from "../../(commponads)/draw";
import { usePathname } from "next/navigation";

export default function Home() {
    const router = usePathname();

  return (
    <main>
      <Box
        sx={{
          mt: "0px",
          mb: "50px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr ",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr ",
            xl: "1fr 1fr 1fr 1fr 1fr",
          },
          mr: {
            xs: `calc(${drawerWidth_xs}px + 30px)`,
            sm: `calc(${drawerWidth_sm}px + 30px)`,
            md: `calc(${drawerWidth_md}px + 30px)`,
            lg: `calc(${drawerWidth_lg}px + 30px)`,
            xl: `calc(${drawerWidth_xl}px + 30px)`,
          },
        }}>
        {shoses.map((product) => (
          <Tshirt
            src={product.imageSrc}
            alt={product.imageAlt}
            href={product.href}
            key={product.id}
            id={product.id}
            name={product.name}
            color={product.color}
            price={product.price}
            description={product.description}
            kind={router}></Tshirt>
        ))}
      </Box>
    </main>
  );
}

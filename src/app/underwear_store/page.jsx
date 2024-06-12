import Image from "next/image";
import Tshirt from "../(commponads)/T-shirt";
import underwear from "../../../public/underwear.json";
import PermanentDrawerRight from "../(commponads)/draw";
import Header from "../(commponads)/Header";
import { Box } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <Box
        sx={{
          mt: "6px",
          mb: "50px",
          maxWidth: "200px ",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr ",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr ",
            xl: "1fr 1fr 1fr 1fr 1fr 1fr ",
          },
        }}>
        {underwear.map((product) => (
          <Tshirt
            src={product.imageSrc}
            alt={product.imageAlt}
            href={product.href}
            key={product.id}
            name={product.name}
            color={product.color}
            price={product.price}
            description={product.description}></Tshirt>
        ))}
      </Box>
    </main>
  );
}

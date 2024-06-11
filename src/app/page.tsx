import Image from "next/image";
import Tshirt from "./(commponads)/T-shirt"
import products from "../../public/products.json"
import PermanentDrawerRight from "./(commponads)/draw";
import Header from "./(commponads)/Header";

export default async function Home() {

  return (
    <main >

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-3">
        {products.map((product) => (
          <Tshirt src={product.imageSrc} alt={product.imageAlt} href={product.href} key={product.id} name={product.name} color={product.color} product={product.price} ></Tshirt>
        ))}
      </div>
    </main>
  );
}

import Image from "next/image";
import Tshirt from "./(commponads)/T-shirt"
import products from "../../public/products.json"
import PermanentDrawerRight from "./(commponads)/draw";
import Header from "./(commponads)/Header";

export default async function Home() {

  return (
    <main className="bg-neutral-900 color	text-white	">
      <div >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-3">
            {products.map((product) => (
              <Tshirt src={product.imageSrc} alt={product.imageAlt} href={product.href} key={product.id} name={product.name} color={product.color} product={product.price} ></Tshirt>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

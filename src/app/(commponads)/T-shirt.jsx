import React from "react";

function Tshirt({src, alt, key, href, name, color, price}) {
  return (
    <>
      <div >
        <div key={key} className="group relative">
          <h2 className="text-3xl  ltr font-bold tracking-tight text-gray-100">
          </h2>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
      </div>
    </>
  );
}

export default Tshirt;

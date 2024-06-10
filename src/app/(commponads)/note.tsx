{/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <h2 className="text-3xl  ltr font-bold tracking-tight text-gray-100">{product.title}</h2>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-whit">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-200">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-100">{product.price}</p>
                </div>
              </div>
            ))}
          </div> */}
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/',
//   {
//     next: {
//       revalidate: 60
//     }
//   }
// )
// const posts = await response.json()
// console.log(posts);
// const postjsx = posts.map((post: any) => {
//   return (
//     <>
//       <div style={{ wordWrap: "break-word", whiteSpace: "pre", position: "relative", direction: "ltr", justifyContent: "start", alignItems: "start", display: "flex", backgroundColor: "white", color: "rgb(22,22,22)", flexDirection: "column", border: "5px solid black", margin: "10px 5%", padding: "0 10px 0 50px", borderRadius: "12px" }}>
//         <div style={{ position: "absolute", left: "10px", top: "12px" }}>{post.id}</div>
//         <div>&quot;title&quot; : {post.title}</div>
//         <div>&quot;completed&quot; : {String(post.completed)} </div>
//       </div>
//     </>
//   );
// })
import React from 'react'
import {notFound} from "next/navigation"

const page = ({params} : {params : {product : string[]}}) => {
  console.log(params.product);
  
  if (params.product?.length === 1 ) return <h3> thnx {params.product[0]}  </h3>
  else if (params.product?.length === 2 ) return (<h3> is {params.product[0]} done {params.product[1]} </h3>)
   if (parseInt(params.product) > 500 ) return (
    notFound()
  )

    return (
    <div className='flex min-h-screen flex-col items-center justify-between p-20'>pages</div>
  )
}

export default page
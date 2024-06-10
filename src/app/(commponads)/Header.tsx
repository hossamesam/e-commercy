import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header style={{ height: "40px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", background: "rgb(44,44,44)", padding: "25px" }} >
      <Link href="/ref" className="m-4">
        <button className="flex-none flex items-center justify-center w-full h-9  p-2 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="product">ref</button>
      </Link>
      <Link href="/products" className="m-4">
        <button className="flex-none flex items-center justify-center w-full h-9  p-2 rounded-md text-slate-300 border border-slate-200 " type="button" aria-label="product">product</button>
      </Link>
      <Link href="/" className="m-4">
        <button className="flex-none flex items-center justify-center w-full h-9  p-2 rounded-md text-slate-300 border border-slate-200 " type="button" aria-label="product">Home</button>
      </Link>
    </header>
  )
}

export default Header
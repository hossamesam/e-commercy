import { Content } from 'next/font/google'
import React from 'react'

function Not_found() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h3 style={{ margin: "0 10px", padding: "0 10px", borderRight: "2px solid", fontWeight: "600", fontSize: "40px" }}>404</h3>
        <h3>Thisx page could not be found .</h3>
      </div>
    </>
  )
}

export default Not_found
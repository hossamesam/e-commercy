import React, { Suspense } from "react";

const ree = <div><div>hay</div><div>hay</div></div>

export default async function page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 15000);
  })
  return (
    <div >
      <div>pagessss</div>
      {ree}
      {/* < fallback={ree}>
          </ Suspense> */}
    </div >
  );
} 

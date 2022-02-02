import React from "react"

import Head from "next/head"

export default function Error() {
  return (
    <>
      <Head>
        <title>LedLamp Liquidators - Error</title>
      </Head>
      <div className="center erros">
        <h1>An error has occurred. Try again later.</h1>
        <button onClick={() => (window.location.href = "/")}>Home Page</button>
      </div>
    </>
  )
}

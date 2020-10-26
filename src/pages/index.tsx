import React from 'react'
import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sumbit</title>
      </Head>
      <h1 className="bg-red-200">Hello World</h1>
    </>
  )
}
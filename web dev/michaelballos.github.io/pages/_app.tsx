import React from 'react'
import { AppProps } from 'next/app'
import { NotificationsProvider } from '@mantine/notifications'
import Head from 'next/head'
import HomePage from '../pages/index'
import './../css/parallax.css'
import './../css/info.css'
import 'animate.css'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  return (
    <>
      <Head>
        <title>
          Michael Ballos
        </title>
        <link rel="preconnect"
          href="https://fonts.googleapis.com" />
        <link rel="preconnect"
          href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@1,200&family=Orbitron&family=Teko:wght@500&display=swap"
          rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <HomePage />
    </>
  )
}

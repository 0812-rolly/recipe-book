import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    background-attachment: fixed;
    font-family: 'Inter', sans-serif;
    font-variant: common-ligatures tabular-nums;
    text-rendering: geometricPrecision;

    ${tw`font-sans bg-gray-200 text-black`}
  }

  img {
    ${tw`h-auto max-w-full`}
  }

  svg {
    ${tw`inline-block	`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles

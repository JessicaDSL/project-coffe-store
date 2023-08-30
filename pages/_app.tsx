import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/styles";
import { ProductProvider } from "../context/context-product";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ProductProvider>
  )
}
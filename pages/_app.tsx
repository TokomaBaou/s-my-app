import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
// theme
import ThemeProvider from "../theme"

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

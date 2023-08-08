import Link from "next/link"
import Layout from "../components/Layout"
import App from "./App"
import { useSession, signIn, signOut } from "next-auth/react"
import LoginPage from "./LoginPage"

const IndexPage = () => {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>

        <Layout title="Home | Next.js + TypeScript Example">
          <h1>Hello Next.js 👋</h1>
          <App />
          <p>
            <Link href="/about">About</Link>
          </p>
        </Layout>
      </>
    )
  }

  return (
    <>
      <LoginPage onClick={() => signIn("github")} />
    </>
  )
}
export default IndexPage

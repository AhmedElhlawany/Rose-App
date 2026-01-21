import Link from "next/link";
import LoginForm from "./_components/login-form";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen " >
      <h1 className="">Login</h1>

      <LoginForm/>


      <footer>
        <p>Don’t have an account yet? <Link href='/register'>Create one now!</Link></p>
      </footer>
    </main>
  )
}

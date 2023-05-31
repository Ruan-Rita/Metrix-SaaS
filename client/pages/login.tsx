import { FormEvent } from "react";
import Image from "next/image";
import logo from '../public/images/logo.png'
import Input from "../components/core/Input";
import SubmitButton from "../components/core/Submit";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  function _send(event: FormEvent) {
    event.preventDefault()
    console.log('event', event)
    router.push('dashboard')
  }

  return (
    <section className='bg-slate-100 p-8 w-full h-screen flex justify-center items-center'>
      <div className="bg-white rounded-lg flex flex-col items-center h-max w-96 py-12 px-8 shadow-md" >
        <Image src={logo} alt="logo" />
        <h1 className="font-bold text-black">Welcome Back!</h1>
        <p>Login to your account</p>
        <form className="mt-8  w-full" action="#" onSubmit={_send}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md">
            <div className="mb-6">
              <Input placeholder="E-mail" name="email" type="email" required />
            </div>
            <div className="!mb-2">
              <Input placeholder="Password" name="password" type="password" required />
            </div>
            <div className="text-sm text-right">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Recover password
              </a>
            </div>
          </div>
          <h6 className="text-center text-neutral-700 text-sm my-8">
            Don't have an account ? <Link href="singup"><a className="text-blue-500">Sign Up</a></Link>
          </h6>
          <SubmitButton label="Login" />

        </form>
      </div>
    </section>
  )
}

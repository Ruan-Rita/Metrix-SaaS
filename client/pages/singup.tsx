import Image from "next/image";
import logo from '../public/images/logo.png'
import Input from "../components/core/Input";
import SubmitButton from "../components/core/Submit";
import Link from "next/link";

export default function Signup() {
  return (
    <section className='bg-slate-100 p-8 w-full h-screen flex justify-center items-center'>
      <div className="bg-white rounded-lg flex flex-col items-center h-max w-96 py-12 px-8 shadow-md" >
        <Image src={logo} alt="logo" />
        <h1 className="font-bold text-black">Welcome Back!</h1>
        <p>Login to your account</p>
        <form className="mt-8  w-full" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md">
            <Input placeholder="Your Full Name" name="name" type="name" />
            <Input placeholder="Your Email Address" name="email" type="email" />
            <Input placeholder="Password" name="password" type="password" />
          </div>
          <h6 className="text-center text-neutral-700 text-sm my-8">
            Already have as account? <Link href="login"><a className="text-blue-500">Login</a></Link>
          </h6>
          <SubmitButton label="Register" />

        </form>
      </div>
    </section>
  )
}

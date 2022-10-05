import Image from "next/image";
import logo from '../public/images/logo.png'

export default function Home() {
  return (
    <section className='bg-slate-100 p-8 w-full h-screen flex justify-center'>
      <div className="bg-white rounded-sm flex flex-col items-center w-96">
        <Image src={logo} alt="logo" />
        <h1 className="font-bold text-black">Welcome Back!</h1>
      </div>
    </section>
  )
}

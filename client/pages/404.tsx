import Image from "next/image"
import SadBoy404  from '../public/giffs/sadboy-404.gif'
export default function Custom404() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-40">
                <Image src={SadBoy404} alt="Page not found"/>
            </div>
            <h1 className="text-3xl mt-6">404 - Page Not Found</h1>
        </div>
    )
}
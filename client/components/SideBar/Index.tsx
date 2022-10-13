import { ChatBubbleOvalLeftEllipsisIcon, Cog6ToothIcon, FolderIcon, ShoppingBagIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Logo from '../../public/images/logo.png'
import ActiveLink from "../core/ActiveLink";

export default function SideBar () {
    return (
        <div className="flex-none px-7 py-5">
            <section className="mb-10 flex items-center">
                <Image src={Logo} alt="LOGO"/>
                <h5 className="text-lg font-bold ml-2">Metrix</h5>
            </section>
            <nav>
                <ul>
                    <li className="mb-3">
                        <ActiveLink href={'/dashboard'} icon={<Squares2X2Icon/>} label="Dashboard" />
                    </li>
                    <li className="mb-3">
                        <ActiveLink href={'/orders'} icon={<ShoppingBagIcon/>} label="Ordens" >
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 3 </span> 
                        </ActiveLink>
                    </li>
                    <li className="mb-3">
                        <ActiveLink href={'/inventory'} icon={<FolderIcon/>} label="Inventory" />
                    </li>
                    <li className="mb-3">
                        <ActiveLink href={'/chat'} icon={<ChatBubbleOvalLeftEllipsisIcon/>} label="Conversations" >
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 16 </span> 
                        </ActiveLink>
                    </li>
                    <li className="mb-3">
                        <ActiveLink href={'/setting'} icon={<Cog6ToothIcon/>} label="Setting" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
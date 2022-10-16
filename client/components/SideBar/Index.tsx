import { 
    ChatBubbleOvalLeftEllipsisIcon, 
    Cog6ToothIcon, 
    FolderIcon, 
    ShoppingBagIcon, 
    Squares2X2Icon, 
    ArrowRightOnRectangleIcon,
    PhoneArrowDownLeftIcon,
    GiftIcon,
    ChevronRightIcon
} from "@heroicons/react/20/solid";

import Image from "next/image";
import Logo from '../../public/images/logo.png'
import ActiveLink from "../core/ActiveLink";

export default function SideBar () {

    function _logout () {
        console.log("efetuou o logout")
    }

    return (
        <div className="flex-none flex flex-col px-7 py-5 h-screen shadow-md">
            <section className="mb-10 flex items-center">
                <Image src={Logo} alt="LOGO"/>
                <h5 className="text-lg font-bold ml-2">Metrix</h5>
            </section>
            <nav className="flex flex-col justify-between h-max flex-grow">
                <ul>
                    <li className="mb-1">
                        <ActiveLink href={'/dashboard'} icon={<Squares2X2Icon />} label="Dashboard" />
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/orders'} icon={<ShoppingBagIcon/>} label="Ordens" >
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 3 </span> 
                        </ActiveLink>
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/inventory'} icon={<FolderIcon/>} label="Inventory" />
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/chat'} icon={<ChatBubbleOvalLeftEllipsisIcon/>} label="Conversations" >
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 16 </span> 
                        </ActiveLink>
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/setting'} icon={<Cog6ToothIcon/>} label="Setting" />
                    </li>
                </ul>
                <div>
                    <div className="bg-gray-200 px-4 py-2 rounded-xl">
                        <PhoneArrowDownLeftIcon className="inline w-6 mr-1"/> Contact Support
                    </div>
                    <div className="bg-amber-100 px-4 my-4 py-2 rounded-xl">
                        <GiftIcon className="inline w-6 mr-1"/> Free Gift Awaits You
                        <p className="text-sm mt-4 mr-4">Upgrade your account <ChevronRightIcon className="w-6 inline"/></p>
                    </div>
                    <ActiveLink 
                        onClick={_logout} 
                        label="Logout" 
                        icon={<ArrowRightOnRectangleIcon className="fill-red-600" />}
                        styleLabel="text-red-600"
                    />
                </div>
            </nav>
        </div>
    )
}
import {
    ChatBubbleOvalLeftEllipsisIcon,
    Cog6ToothIcon,
    FolderIcon,
    ShoppingBagIcon,
    Squares2X2Icon,
    ArrowRightOnRectangleIcon,
    PhoneArrowDownLeftIcon,
    GiftIcon,
    ChevronRightIcon,
    UsersIcon
} from "@heroicons/react/20/solid";

import Image from "next/image";
import { useRouter } from "next/router";
import Logo from '../../public/images/logo.png'
import ActiveLink from "../core/ActiveLink";
import { useEffect, useState } from 'react'

export default function SideBar() {
    const router = useRouter()
    const [isExpansive, setIsExpansive] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('UserUI_isExpansive') == 'true') {
            setIsExpansive(localStorage.getItem('UserUI_isExpansive') == 'true')
            console.log('1 ruan - rita');
        }
    }, [])

    function _logout() {
        console.log("efetuou o logout")
        router.push('login')
    }

    function handleIsExpansive() {
        const newValue = !isExpansive
        setIsExpansive(newValue)
        localStorage.setItem('UserUI_isExpansive', 'true')
    }

    return (
        <div className="flex-none flex flex-col px-7 py-5 h-screen shadow-md">
            <section onClick={() => handleIsExpansive()} className={`mb-10 flex items-center cursor-pointer hover:scale-105 transition-all ${!isExpansive ? 'justify-center' : ''}`}>
                <Image src={Logo} alt="LOGO" />
                {isExpansive ? <h5 className="text-lg font-bold ml-2">Metrix</h5> : ''}
            </section>
            <nav className="flex flex-col justify-between h-max flex-grow">
                <ul>
                    <li className="mb-1">
                        <ActiveLink href={'/dashboard'} icon={<Squares2X2Icon />} label="Dashboard" justIcon={!isExpansive} />
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/orders'} icon={<ShoppingBagIcon />} label="Ordens" justIcon={!isExpansive}>
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 3 </span>
                        </ActiveLink>
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/customers'} icon={<UsersIcon />} label="Customers" justIcon={!isExpansive}>
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 3 </span>
                        </ActiveLink>
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/inventory'} icon={<FolderIcon />} label="Inventory" justIcon={!isExpansive} />
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/chat'} icon={<ChatBubbleOvalLeftEllipsisIcon />} label="Conversations" justIcon={!isExpansive}>
                            <span className="bg-orange-300 w-7 h-7 text-center leading-7 ml-2 rounded-full"> 16 </span>
                        </ActiveLink>
                    </li>
                    <li className="mb-1">
                        <ActiveLink href={'/setting'} icon={<Cog6ToothIcon />} label="Setting" justIcon={!isExpansive} />
                    </li>
                </ul>
                <div>
                    <div className="bg-gray-200 px-4 py-2 rounded-xl">
                        <PhoneArrowDownLeftIcon className="inline w-6 mr-1" />
                        {isExpansive ? 'Contact Support' : ''}
                    </div>
                    <div className="bg-amber-100 px-4 my-4 py-2 rounded-xl">
                        <GiftIcon className="inline w-6 mr-1" />
                        {isExpansive ? <div>
                            Free Gift Awaits You
                            <p className="text-sm mt-4 mr-4">Upgrade your account <ChevronRightIcon className="w-6 inline" /></p>
                        </div> : ''}
                    </div>
                    <ActiveLink
                        onClick={_logout}
                        href={''}
                        label="Logout"
                        icon={<ArrowRightOnRectangleIcon className="fill-red-600" />}
                        styleLabel="text-red-600"
                        justIcon={!isExpansive}
                    />
                </div>
            </nav>
        </div>
    )
}
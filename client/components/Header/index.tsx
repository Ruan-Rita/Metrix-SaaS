import { BellAlertIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Dropdown from "../Core/Dropdown"

interface IHeader {
    title: string
}

export default function Header({ title }: IHeader) {
    const router = useRouter()
    const [historic, setHistoric] = useState([])
    const photoProfile = null

    useEffect(() => {
        const current = router.asPath
        let historic: string[] = current.split('/')

        historic.shift()
        setHistoric(historic)
    }, [router.asPath])

    return (
        <header className='h-max'>
            <div className="text-xl px-5 py-3 flex justify-between items-center font-bold">
                {title}
                <div className="flex items-center">
                    <Dropdown items={['shopper', 'category', 'review']} />
                    <BellAlertIcon className="w-5 h-5 mx-4 fill-blue-500" />
                    <div>
                        {
                            photoProfile ? (
                                <img src={photoProfile} />
                            ) : (
                                <UserCircleIcon className="w-10 h-10 fill-amber-600" />
                            )
                        }
                    </div>
                </div>

            </div>
            <section className="px-5 py-1 flex items-baseline border-t border-gray-200">
                <span>
                    <HomeIcon className="w-4 inline mr-1 fill-blue-500" />
                </span>
                {historic.map((item, key) => (
                    <span key={key} className="text-xs">
                        <span className={`mr-1 ${key != 0 ? 'ml-1' : ''}`}>/</span>{item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                ))}
            </section>
        </header>
    )
}
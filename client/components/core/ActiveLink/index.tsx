import { useRouter } from "next/router"
import { ReactNode, MouseEventHandler } from 'react'

interface IActiveLink {
    href: string
    label: string
    icon?: ReactNode
    className?: string
    children?: ReactNode
}

export default function ActiveLink ({href, children, className, icon, label}:IActiveLink) {
    const router = useRouter()

    function isActive() {
        console.log('o que esta comparando', href, ' with: ', router.asPath);
        console.log('results: ', router.asPath === href);
        
        return router.asPath === href ?? false
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} className={`${className} flex items-center ${isActive() ? 'bg-blue-500 px-4 py-3 rounded-lg': ''}`} onClick={handleClick}>
            {icon && <div className={`w-5 ${isActive() && 'text-white'}`}>{icon}</div> }
            <h3 className={`ml-2 ${isActive() && 'text-white'}`}>{label}</h3>
            {children}
        </a>
    )
}
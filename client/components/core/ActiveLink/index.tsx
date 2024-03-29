import { useRouter } from "next/router"
import { ReactNode, useEffect } from 'react'

interface IActiveLink {
    href?: string
    label: string
    icon?: ReactNode
    className?: string
    children?: ReactNode
    onClick?: Function,
    styleLabel?: string
    justIcon?: boolean
}

export default function ActiveLink({ href, children, className, icon, label, onClick, styleLabel, justIcon = false }: IActiveLink) {
    const router = useRouter()

    function isActive() {
        return router.asPath === href
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        if (onClick) {
            onClick()
        }
        else router.push(href)
    }

    return (
        <a href={href} className={`${className} w-fit flex items-center px-4 py-3 transition-all ${isActive() ? 'bg-blue-500 rounded-lg' : ''}`} onClick={handleClick}>
            {justIcon ?
                <p className={`w-7 ${isActive() && 'link-active-white'}`}>{icon}</p>
                :
                <>
                    {icon && (<p className={`w-5 ${isActive() && 'link-active-white'}`}>{icon}</p>)}
                    <h3 className={`${styleLabel} ml-2 ${isActive() && 'text-white'}`}>{label}</h3>
                    {children}
                </>
            }
        </a>
    )
}
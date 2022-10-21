import { ReactNode } from "react"
import Dropdown from "../core/Dropdown"

interface IInfoCard {
    icon: ReactNode
    children: ReactNode
    bgIconColor: string
    className?: string
}
export default function InfoCard ({icon, bgIconColor, children, className} : IInfoCard)
{
    return (
        <div className={`p-3 bg-white rounded-lg ${className}`} >
            <div>
                <div className="flex justify-between items-center mb-7">
                    <div className={`w-6 h-6 rounded-md flex justify-center items-center ${bgIconColor}`}>{icon}</div>
                    <Dropdown items={['shopper', 'category', 'review']} />
                </div>
                {children}
            </div>
        </div>
    )   
}
import { ReactNode } from "react"
import Dropdown from "../core/Dropdown"

interface IInfoCard {
    icon: ReactNode
    children: ReactNode
    bgIconColor: string
    className?: string
    title?: string
    dropItems?: Array<string>
    onChangeDrop?: (value: string | number) => void
}
export default function InfoCard({ icon, bgIconColor, children, className, dropItems, title, onChangeDrop }: IInfoCard) {
    return (
        <div className={`p-3 flex bg-white rounded-2xl ${className}`} >
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-7">
                    <div className={`w-6 h-6 rounded-md flex justify-center items-center ${bgIconColor}`}>{icon}</div>
                    <Dropdown items={dropItems} onChange={onChangeDrop} />
                </div>
                {children}
            </div>
        </div>
    )
}